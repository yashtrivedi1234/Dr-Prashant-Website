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
      port: process.env.SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
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
    await getTransporter().sendMail(mailOptions);
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
    await getTransporter().sendMail(mailOptions);
    console.log(`Admin notification email sent to ${process.env.ADMIN_EMAIL}`);
    return { success: true };
  } catch (error) {
    console.error('Error sending admin email:', error);
    throw new Error('Failed to send admin notification');
  }
};
