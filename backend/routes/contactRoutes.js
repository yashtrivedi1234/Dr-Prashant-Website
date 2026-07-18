import { Router } from "express";
import {
  submitContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
  getContactStats,
} from "../controllers/contactController.js";
import { adminAuth } from "../middleware/adminAuth.js";
import {
  validateContact,
  validateContactStatus,
  handleValidationErrors,
} from "../middleware/validation.js";
import rateLimit from "express-rate-limit";

const router = Router();

// Rate limiter for contact form submission (5 requests per hour per IP)
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: "Too many contact form submissions. Please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

// POST /api/contact - Submit contact form
router.post(
  "/",
  contactLimiter,
  validateContact,
  handleValidationErrors,
  submitContact
);

// GET /api/contact - Get all contacts (admin only)
router.get("/", adminAuth, getAllContacts);

// GET /api/contact/stats - Get contact statistics (admin only)
router.get("/stats", adminAuth, getContactStats);

// GET /api/contact/:id - Get single contact (admin only)
router.get("/:id", adminAuth, getContactById);

// PUT /api/contact/:id - Update contact status (admin only)
router.put(
  "/:id",
  adminAuth,
  validateContactStatus,
  handleValidationErrors,
  updateContactStatus
);

// DELETE /api/contact/:id - Delete contact (admin only)
router.delete("/:id", adminAuth, deleteContact);

export default router;
