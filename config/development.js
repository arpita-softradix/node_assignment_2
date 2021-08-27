import db from './db';

module.exports = {
  port: 3005,
  db: db.development,
  logger: {
    maxSize: 512000,
    maxFiles: 100,
  },
  secretKey: '@ppT0PT!pPeR',
  saltKey: '@$#W@N!)%!@',
  apiKey: ')%!@@$#W@N!',
  saltRounds: 2,
};
