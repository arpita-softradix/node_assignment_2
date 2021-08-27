import db from './db';

module.exports = {
  port: 3030,
  db: db.staging,
  logger: {
    maxSize: 512000,
    maxFiles: 100,
  },
  secretKey: '@ppT0PT!pPeR',
  saltKey: '@$#W@N!)%!@',
  apiKey: ')%!@@$#W@N!',
  saltRounds: 2,
};
