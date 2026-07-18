import Admin from '../models/Admin.js';

/** Warns if no admin exists — credentials must live in MongoDB, not env. */
export const seedAdmin = async () => {
  const count = await Admin.countDocuments();
  if (count > 0) return;

  console.warn('⚠️  No admin in DB. Insert one into the admins collection to enable login.');
};
