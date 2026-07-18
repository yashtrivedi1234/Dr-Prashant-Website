import mongoose from "mongoose";
import validator from "validator";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    phone: {
      type: String,
      required: [true, "Please provide your phone number"],
      validate: {
        validator: function (v) {
          return /^\+?[1-9]\d{1,14}$/.test(v.replace(/\s/g, ""));
        },
        message: "Please provide a valid phone number",
      },
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    subject: {
      type: String,
      required: [true, "Please select a subject"],
      enum: [
        "ENT Consultation",
        "Vertigo Treatment",
        "Allergy Clinic",
        "Oral Immunotherapy",
        "Snoring Treatment",
        "General Check-up",
        "Other",
      ],
    },
    message: {
      type: String,
      required: [true, "Please provide a message"],
      trim: true,
      minlength: [10, "Message must be at least 10 characters long"],
      maxlength: [1000, "Message cannot exceed 1000 characters"],
    },
    status: {
      type: String,
      enum: ["new", "read", "replied"],
      default: "new",
    },
    createdAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
