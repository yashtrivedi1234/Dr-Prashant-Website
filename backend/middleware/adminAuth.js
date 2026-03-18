import jwt from 'jsonwebtoken';

export const adminAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No token provided. Please login to access this resource',
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'your_jwt_secret_key'
    );

    req.admin = decoded;
    next();
  } catch (error) {
    console.error('Auth error:', error);
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token. Please login again',
    });
  }
};

export const adminAuthOptional = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || 'your_jwt_secret_key'
      );
      req.admin = decoded;
    }
  } catch (error) {
    console.error('Optional auth error:', error);
    // Continue without authentication
  }

  next();
};
