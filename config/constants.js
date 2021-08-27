export const accessRoles = {
  Tipper: 1,
  Service_provider: 2,
  Admin: 3,
};

export const RESPONSE_CODES = {
  GET: 200,
  POST: 201,
  DELETE: 204,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

export const REQUEST_TYPE = {
  SENT_REQUEST: 1,
  ACCEPT_CONNECTION_REQUEST: 2,
  TIP_PAID: 3,
  REJECT_CONNECTION_REQUEST: 4,
};

export const emailCredientials = {
  key: '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',
  username: 'simranjeet.kaur@softradix.in',
};
export const aws = {
  ACCESS_KEY_ID: process.env.AWS_BUCKET_ACCESS_KEY_UD,
  SECRET_ACCESS_KEY: process.env.AWS_BUCKET_SECRET_ACCESS_KEY,
  bucketName: process.env.AWS_BUCKET_NAME,
  region: process.env.AWS_REGION,
};

export const smsCredientials = {
  ACCOUNT_SID : 'AC7ab0c46d2ea9920be38a934d270bd4e1',
  AUTH_TOKEN: 'bc3b720df06abed8878a12d55f749493',
  SMS_FROM: '+18582276255'
};
