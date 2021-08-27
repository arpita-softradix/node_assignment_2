import db from './db';

module.exports = {
  port: 3003,
  db: db.production,
  logger: {
    maxSize: 5120000,
    maxFiles: 200,
  },
  secretKey: '@ppT0PT!pPeR',
  saltKey: '@$#W@N!)%!@',
  apiKey: ')%!@@$#W@N!',
  saltRounds: 2,
};
