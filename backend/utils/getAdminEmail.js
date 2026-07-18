import Admin from '../models/Admin.js';

export const getAdminEmail = async () => {
  const admin = await Admin.findOne().select('email').lean();
  if (!admin?.email) {
    throw new Error('No admin found in database');
  }
  return admin.email;
};
