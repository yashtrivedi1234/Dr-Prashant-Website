import Contact from "../models/Contact.js";
import { sendContactConfirmationEmail, sendContactAdminEmail } from "../utils/emailService.js";

// Submit contact form
export const submitContact = async (req, res) => {
  try {
    const { name, phone, email, subject, message } = req.body;

    // Create contact document
    const contact = new Contact({
      name,
      phone,
      email,
      subject,
      message,
    });

    // Save to database
    await contact.save();

    // Send confirmation email to user
    await sendContactConfirmationEmail({
      name,
      email,
      subject,
      message,
    });

    // Send notification email to admin
    await sendContactAdminEmail({
      name,
      email,
      phone,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Thank you for contacting us! We will get back to you soon.",
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        status: contact.status,
      },
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit contact form. Please try again later.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

// Get all contacts (admin only)
export const getAllContacts = async (req, res) => {
  try {
    // Optional pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Get total count
    const total = await Contact.countDocuments();

    // Fetch contacts sorted by latest first
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select("-__v");

    res.status(200).json({
      success: true,
      data: contacts,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalItems: total,
        itemsPerPage: limit,
      },
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch contacts",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

// Get single contact by ID (admin only)
export const getContactById = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    // Mark as read
    if (contact.status === "new") {
      contact.status = "read";
      await contact.save();
    }

    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("Error fetching contact:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch contact",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

// Update contact status (admin only)
export const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ["new", "read", "replied"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(", ")}`,
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact status updated",
      data: contact,
    });
  } catch (error) {
    console.error("Error updating contact status:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update contact status",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

// Delete contact (admin only)
export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete contact",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

// Get contact statistics (admin only)
export const getContactStats = async (req, res) => {
  try {
    const total = await Contact.countDocuments();
    const newCount = await Contact.countDocuments({ status: "new" });
    const readCount = await Contact.countDocuments({ status: "read" });
    const repliedCount = await Contact.countDocuments({ status: "replied" });

    // Get last 7 days submissions
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const lastWeek = await Contact.countDocuments({
      createdAt: { $gte: sevenDaysAgo },
    });

    res.status(200).json({
      success: true,
      data: {
        total,
        byStatus: {
          new: newCount,
          read: readCount,
          replied: repliedCount,
        },
        lastWeek,
      },
    });
  } catch (error) {
    console.error("Error fetching contact stats:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch contact statistics",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
