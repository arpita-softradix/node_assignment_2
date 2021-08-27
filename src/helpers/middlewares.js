import { RESPONSE_CODES } from '../../config/constants';
import { verifyToken } from './jwt';
import Logger from './logger';

const authMiddleWare = async (req, res, next) => {
  try {
    const logger = new Logger();
    await logger.init();
    const ignorePaths = [
      '/',
      '/api-docs',
      '/auth/signup',
      '/auth/otp-verification',
      '/auth/resend-otp',
      '/auth/login',
    ];
    const { method, headers, originalUrl } = req;

    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const logObj = {
      ip,
      headers: req.headers,
      method: req.method,
      url: req.originalUrl,
      timestamp: Date.now(),
    };

    if (
      (method === 'POST' && originalUrl === '/user')
      || (method === 'GET' && originalUrl.includes('?page='))
      || (method === 'GET' && originalUrl.includes('redirectionlink?m='))
      || (method === 'GET' && originalUrl.includes('/api-docs/'))
    ) {
      logger.logInfo('Activity Log: ', logObj);
      // ignoring register URL
      return next();
    }

    const ignoreIndex = ignorePaths.findIndex((item) => item === originalUrl);
    if (ignoreIndex > -1) {
      logger.logInfo('Activity Log: ', logObj);
      return next();
    }

    if (!headers.authorization) {
      logger.logInfo('Activity Log: ', logObj);
      return res.status(RESPONSE_CODES.UNAUTHORIZED).json({
        status: 0,
        message: 'Authorization token is missing.',
        code: RESPONSE_CODES.UNAUTHORIZED,
      });
    }

    logObj.user = verifyToken(headers.authorization);
    if (logObj.user.status === 0) {
      return res.send(logObj.user);
    }
    req.user = logObj.user;
    return next();
  } catch (error) {
    return res.status(RESPONSE_CODES.UNAUTHORIZED).json({
      status: 0,
      message: error,
      code: RESPONSE_CODES.ERROR,
    });
  }
};

export default authMiddleWare;
