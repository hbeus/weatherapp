// 1xx – Informational response

// 2xx – Successful

const OK = 200;
const CREATED = 201;

// 3xx – Redirection

// 4xx – Client error

const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;
const METHOD_NOT_ALLOWED = 405;

// 5xx – Server error

const INTERNAL_SERVER_ERROR = 500;

export default {
  OK,
  CREATED,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  METHOD_NOT_ALLOWED,
  INTERNAL_SERVER_ERROR,
};
