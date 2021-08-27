import { RESPONSE_CODES } from '../../config/constants';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { jwtToken, saltRounds } = require('../../config/keys');

const extractToken = (authToken) => {
  if (authToken) {
    const split = authToken.split(' ');
    if (split.length > 1) {
      return split[1];
    }
    return authToken;
  }
  return authToken;
};

export const verifyToken = (reqToken, userId = null) => {
  const response = {};
  try {
    const token = extractToken(reqToken);
    const user = jwt.verify(token, jwtToken);

    if (userId) {
      if (user.userId !== userId) {
        response.status = 0;
        response.code = RESPONSE_CODES.UNAUTHORIZED;
        response.message = 'Authorization token is invalid.';
        return response;
      }
    }
    return user;
  } catch (err) {
    response.status = 0;
    response.code = RESPONSE_CODES.UNAUTHORIZED;
    response.message = 'Authorization token is invalid.';
    return response;
  }
};

export const refreshToken = (payload) => jwt.sign(payload, jwtToken);

export const setResponseToken = (res, token) => res.set('authorization', token);

export const generateHash = async (text) => {
  const hash = await bcrypt.hash(text, saltRounds);
  return hash;
};
