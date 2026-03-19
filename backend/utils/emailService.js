import nodemailer from 'nodemailer';

// Create email transporter lazily to ensure env vars are loaded
let transporter = null;

const getTransporter = () => {
  if (!transporter) {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      throw new Error('Missing SMTP credentials (SMTP_USER or SMTP_PASS environment variables)');
    }
    
    transporter = nodemailer.createTransport({
      service: 'gmail',
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: false, // true for 465, false for other ports
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      connectionUrl: false,
      // Add timeout configuration
      connectionTimeout: 5000,
      socketTimeout: 5000,
      pool: {
        maxConnections: 1,
        maxMessages: 100,
        rateDelta: 1000,
        rateLimit: 50,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }
  return transporter;
};

// Verify SMTP connection
export const verifySmtpConnection = async () => {
  try {
    console.log('🔍 Checking SMTP connection...');
    const transporter = getTransporter();
    await transporter.verify();
    console.log('✅ SMTP Connected Successfully!');
    console.log(`📧 Connected as: ${process.env.SMTP_USER}`);
    return true;
  } catch (error) {
    console.error('❌ SMTP Connection Failed!');
    console.error(`Error: ${error.message}`);
    return false;
  }
};

// Retry logic for email sending
const sendEmailWithRetry = async (mailOptions, retries = 3, delay = 1000) => {
  let lastError;
  for (let i = 0; i < retries; i++) {
    try {
      return await getTransporter().sendMail(mailOptions);
    } catch (error) {
      lastError = error;
      console.error(`Attempt ${i + 1}/${retries} failed:`, error.message);
      if (i < retries - 1) {
        await new Promise(resolve => setTimeout(resolve, delay * (i + 1)));
      }
    }
  }
  throw lastError;
};

// Send confirmation email to user
export const sendUserConfirmationEmail = async (appointmentData) => {
  const { name, email, service, date, time } = appointmentData;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const mailOptions = {
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
    to: email,
    subject: 'Appointment Confirmation - Dr. Prashant',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px 8px 0 0; color: white;">
          <h2 style="margin: 0;">Appointment Confirmed ✓</h2>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Dr. Prashant's Clinic</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 0 0 8px 8px;">
          <p>Dear <strong>${name}</strong>,</p>
          
          <p>Your appointment has been successfully booked! Here are your appointment details:</p>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0;">
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Date:</strong> ${formattedDate}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p><strong>Confirmation Email:</strong> ${email}</p>
          </div>
          
          <h3>Important Information:</h3>
          <ul style="color: #666;">
            <li>Please arrive 10 minutes before your scheduled appointment time</li>
            <li>Bring any relevant medical documents or test reports</li>
            <li>If you need to reschedule, please contact us at least 24 hours in advance</li>
          </ul>
          
          <div style="background: #f0f7ff; padding: 15px; border-radius: 4px; margin: 20px 0;">
            <p style="margin: 0; color: #0066cc;">
              <strong>Need to reschedule or cancel?</strong><br/>
              Contact us via phone or reply to this email.
            </p>
          </div>
          
          <p>Thank you for choosing Dr. Prashant's Clinic. We look forward to seeing you!</p>
          
          <p style="color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            This is an automated email. Please do not reply directly. For inquiries, contact our clinic.
          </p>
        </div>
      </div>
    `,
  };

  try {
    await sendEmailWithRetry(mailOptions);
    console.log(`Confirmation email sent to ${email}`);
    return { success: true };
  } catch (error) {
    console.error('Error sending user email:', error);
    throw new Error('Failed to send confirmation email');
  }
};

// Send appointment notification to admin
export const sendAdminNotificationEmail = async (appointmentData) => {
  const { name, email, phone, service, date, time, notes } = appointmentData;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const mailOptions = {
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Appointment Booking - ${service}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px 8px 0 0; color: white;">
          <h2 style="margin: 0;">New Appointment Booking</h2>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Admin Notification</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 0 0 8px 8px;">
          <h3>Patient Information:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 10px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Email:</td>
              <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Phone:</td>
              <td style="padding: 10px;">${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Service:</td>
              <td style="padding: 10px;">${service}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Date:</td>
              <td style="padding: 10px;">${formattedDate}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Time:</td>
              <td style="padding: 10px;">${time}</td>
            </tr>
            ${
              notes
                ? `
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Notes:</td>
              <td style="padding: 10px;">${notes}</td>
            </tr>
            `
                : ''
            }
            <tr>
              <td style="padding: 10px; font-weight: bold;">Status:</td>
              <td style="padding: 10px;"><span style="background: #fff3cd; color: #856404; padding: 5px 10px; border-radius: 4px;">Pending</span></td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding: 15px; background: #e7f3ff; border-left: 4px solid #0066cc; border-radius: 4px;">
            <p style="margin: 0; color: #0066cc;"><strong>Action Required:</strong> Please review and confirm this appointment as soon as possible.</p>
          </div>
        </div>
      </div>
    `,
  };

  try {
    await sendEmailWithRetry(mailOptions);
    console.log(`Admin notification email sent to ${process.env.ADMIN_EMAIL}`);
    return { success: true };
  } catch (error) {
    console.error('Error sending admin email:', error);
    throw new Error('Failed to send admin notification');
  }
};

// Send appointment status update email to user
export const sendAppointmentStatusUpdateEmail = async (appointmentData) => {
  const { name, email, service, date, time, status } = appointmentData;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const statusLabelMap = {
    pending: 'Pending',
    confirmed: 'Confirmed',
    completed: 'Completed',
    cancelled: 'Cancelled',
  };

  const statusColorMap = {
    pending: '#856404',
    confirmed: '#0f5132',
    completed: '#0c5460',
    cancelled: '#842029',
  };

  const statusBgMap = {
    pending: '#fff3cd',
    confirmed: '#d1e7dd',
    completed: '#d1ecf1',
    cancelled: '#f8d7da',
  };

  const statusLabel = statusLabelMap[status] || status;
  const statusColor = statusColorMap[status] || '#333333';
  const statusBg = statusBgMap[status] || '#f1f1f1';

  const mailOptions = {
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
    to: email,
    subject: `Appointment Status Updated - ${statusLabel}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px 8px 0 0; color: white;">
          <h2 style="margin: 0;">Appointment Status Updated</h2>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Dr. Prashant's Clinic</p>
        </div>

        <div style="padding: 30px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 0 0 8px 8px;">
          <p>Dear <strong>${name}</strong>,</p>

          <p>Your appointment status has been updated. Please find the details below:</p>

          <div style="background: white; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0;">
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Date:</strong> ${formattedDate}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p>
              <strong>Status:</strong>
              <span style="display: inline-block; margin-left: 8px; background: ${statusBg}; color: ${statusColor}; padding: 4px 10px; border-radius: 14px; font-weight: 600;">
                ${statusLabel}
              </span>
            </p>
          </div>

          <div style="background: #f0f7ff; padding: 15px; border-radius: 4px; margin: 20px 0;">
            <p style="margin: 0; color: #0066cc;">
              <strong>Need help?</strong><br/>
              If you have any questions regarding this update, please contact our clinic.
            </p>
          </div>

          <p>Thank you for choosing Dr. Prashant's Clinic.</p>

          <p style="color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            This is an automated email. Please do not reply directly.
          </p>
        </div>
      </div>
    `,
  };

  try {
    await sendEmailWithRetry(mailOptions);
    console.log(`Status update email sent to ${email}`);
    return { success: true };
  } catch (error) {
    console.error('Error sending status update email:', error);
    throw new Error('Failed to send status update email');
  }
};

// Send contact form confirmation email to user
export const sendContactConfirmationEmail = async (contactData) => {
  const { name, email, subject, message } = contactData;

  const mailOptions = {
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
    to: email,
    subject: 'We received your message - Dr. Prashant',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px 8px 0 0; color: white;">
          <h2 style="margin: 0;">Message Received ✓</h2>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Dr. Prashant's Clinic</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 0 0 8px 8px;">
          <p>Dear <strong>${name}</strong>,</p>
          
          <p>Thank you for reaching out to us! We have successfully received your message and appreciate you contacting Dr. Prashant's Clinic.</p>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
            <p style="margin: 5px 0;"><strong>Submitted on:</strong> ${new Date().toLocaleDateString('en-IN', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}</p>
          </div>
          
          <h3 style="color: #333;">Your Message:</h3>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 4px; color: #666; line-height: 1.6;">${message}</p>
          
          <h3 style="color: #333;">What's Next?</h3>
          <ul style="color: #666; line-height: 1.8;">
            <li>Our team will review your message within 24 hours</li>
            <li>We will get back to you via email or phone</li>
            <li>For urgent matters, please call us directly at <strong>${process.env.CLINIC_PHONE || '+91 76588 74707'}</strong></li>
          </ul>
          
          <div style="background: #f0f7ff; padding: 15px; border-radius: 4px; margin: 20px 0;">
            <p style="margin: 0; color: #0066cc; font-size: 14px;">
              <strong>Clinic Hours:</strong> Mon-Fri (10 AM - 8 PM) | Sat (10 AM - 4 PM) | Sun (Emergency Only)
            </p>
          </div>
          
          <p>Thank you for choosing Dr. Prashant's Clinic. We're here to help you!</p>
          
          <p style="color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            This is an automated email. Please do not reply directly. For urgent inquiries, call us or use the contact form again.
          </p>
        </div>
      </div>
    `,
  };

  try {
    await sendEmailWithRetry(mailOptions);
    console.log(`Contact confirmation email sent to ${email}`);
    return { success: true };
  } catch (error) {
    console.error('Error sending contact confirmation email:', error);
    throw new Error('Failed to send confirmation email');
  }
};

// Send contact form notification to admin
export const sendContactAdminEmail = async (contactData) => {
  const { name, email, phone, subject, message } = contactData;

  const mailOptions = {
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Form Submission - ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px 8px 0 0; color: white;">
          <h2 style="margin: 0;">New Contact Form Submission</h2>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Admin Notification</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 0 0 8px 8px;">
          <h3>Contact Information:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 10px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Email:</td>
              <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Phone:</td>
              <td style="padding: 10px;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Subject:</td>
              <td style="padding: 10px;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Submitted:</td>
              <td style="padding: 10px;">${new Date().toLocaleDateString('en-IN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}</td>
            </tr>
          </table>
          
          <h3 style="margin-top: 20px; color: #333;">Message:</h3>
          <div style="background: white; padding: 15px; border-left: 4px solid #667eea; margin: 15px 0; border-radius: 4px;">
            <p style="color: #666; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background: #e7f3ff; border-left: 4px solid #0066cc; border-radius: 4px;">
            <p style="margin: 0; color: #0066cc;"><strong>Action Required:</strong> Please respond to this inquiry as soon as possible.</p>
          </div>
        </div>
      </div>
    `,
  };

  try {
    await sendEmailWithRetry(mailOptions);
    console.log(`Contact admin notification email sent to ${process.env.ADMIN_EMAIL}`);
    return { success: true };
  } catch (error) {
    console.error('Error sending contact admin email:', error);
    throw new Error('Failed to send admin notification');
  }
};

// Send newsletter welcome email
export const sendNewsletterWelcomeEmail = async (subscriberData) => {
  const { email } = subscriberData;

  const mailOptions = {
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
    to: email,
    subject: 'Welcome to Dr. Prashant\'s Newsletter!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px 8px 0 0; color: white;">
          <h2 style="margin: 0;">Welcome to Our Newsletter! 🎉</h2>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Dr. Prashant's Clinic</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 0 0 8px 8px;">
          <p>Dear Subscriber,</p>
          
          <p>Thank you for subscribing to Dr. Prashant's Newsletter! We're thrilled to have you on board.</p>
          
          <h3 style="color: #333; margin-top: 25px;">What You'll Get:</h3>
          <ul style="color: #666; line-height: 2;">
            <li>✓ Regular health tips and wellness articles</li>
            <li>✓ Updates on new treatments and services</li>
            <li>✓ Exclusive offers and promotions</li>
            <li>✓ Latest news from our clinic</li>
            <li>✓ Expert advice on oral health</li>
          </ul>
          
          <div style="background: #e7f3ff; padding: 15px; border-left: 4px solid #0066cc; border-radius: 4px; margin-top: 25px;">
            <p style="margin: 0; color: #0066cc;">
              <strong>Unsubscribe Anytime:</strong> We respect your inbox. You can unsubscribe from our newsletter at any time using the link in any email we send.
            </p>
          </div>
          
          <h3 style="color: #333; margin-top: 25px;">Get in Touch</h3>
          <p style="color: #666;">
            Have questions or suggestions? We'd love to hear from you!<br/>
            <strong>Email:</strong> ${process.env.FROM_EMAIL}<br/>
            <strong>Phone:</strong> ${process.env.CLINIC_PHONE || '+91 76588 74707'}<br/>
            <strong>Hours:</strong> Mon-Fri (10 AM - 8 PM) | Sat (10 AM - 4 PM)
          </p>
          
          <p style="margin-top: 30px; color: #333;">
            Thank you for choosing Dr. Prashant's Clinic. We're committed to your health and wellness!
          </p>
          
          <p style="color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            This is an automated email. Please do not reply directly. For inquiries, use the contact form or call us.
          </p>
        </div>
      </div>
    `,
  };

  try {
    await sendEmailWithRetry(mailOptions);
    console.log(`Newsletter welcome email sent to ${email}`);
    return { success: true };
  } catch (error) {
    console.error('Error sending newsletter welcome email:', error);
    throw new Error('Failed to send welcome email');
  }
};

