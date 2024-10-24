enum HTTPStatus {
  // 1xx Informational
  INFO_CONTINUE = 100,
  INFO_SWITCHING_PROTOCOLS = 101,

  // 2xx Success
  SUCCESS_OK = 200,
  SUCCESS_CREATED = 201,
  SUCCESS_ACCEPTED = 202,
  SUCCESS_NON_AUTHORITATIVE_INFORMATION = 203,
  SUCCESS_NO_CONTENT = 204,
  SUCCESS_RESET_CONTENT = 205,
  SUCCESS_PARTIAL_CONTENT = 206,

  // 3xx Redirection
  REDIRECT_MULTIPLE_CHOICES = 300,
  REDIRECT_MOVED_PERMANENTLY = 301,
  REDIRECT_FOUND = 302,
  REDIRECT_SEE_OTHER = 303,
  REDIRECT_NOT_MODIFIED = 304,
  REDIRECT_USE_PROXY = 305,
  REDIRECT_TEMPORARY_REDIRECT = 307,
  REDIRECT_PERMANENT_REDIRECT = 308,

  // 4xx Client Error
  CLIERR_BAD_REQUEST = 400,
  CLIERR_UNAUTHORIZED = 401,
  CLIERR_PAYMENT_REQUIRED = 402,
  CLIERR_FORBIDDEN = 403,
  CLIERR_NOT_FOUND = 404,
  CLIERR_METHOD_NOT_ALLOWED = 405,
  CLIERR_NOT_ACCEPTABLE = 406,
  CLIERR_PROXY_AUTHENTICATION_REQUIRED = 407,
  CLIERR_REQUEST_TIMEOUT = 408,
  CLIERR_CONFLICT = 409,
  CLIERR_GONE = 410,
  CLIERR_LENGTH_REQUIRED = 411,
  CLIERR_PRECONDITION_FAILED = 412,
  CLIERR_PAYLOAD_TOO_LARGE = 413,
  CLIERR_URI_TOO_LONG = 414,
  CLIERR_UNSUPPORTED_MEDIA_TYPE = 415,
  CLIERR_RANGE_NOT_SATISFIABLE = 416,
  CLIERR_EXPECTATION_FAILED = 417,
  CLIERR_IM_A_TEAPOT = 418, // Um easter egg RFC
  CLIERR_MISDIRECTED_REQUEST = 421,
  CLIERR_UNPROCESSABLE_ENTITY = 422,
  CLIERR_LOCKED = 423,
  FAILED_DEPENDENCY = 424,
  CLIERR_TOO_EARLY = 425,
  CLIERR_UPGRADE_REQUIRED = 426,
  CLIERR_PRECONDITION_REQUIRED = 428,
  CLIERR_TOO_MANY_REQUESTS = 429,
  CLIERR_REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  CLIERR_UNAVAILABLE_FOR_LEGAL_REASONS = 451,

  // 5xx Server Error
  SERVERERR_INTERNAL_SERVER_ERROR = 500,
  SERVERERR_NOT_IMPLEMENTED = 501,
  SERVERERR_BAD_GATEWAY = 502,
  SERVERERR_SERVICE_UNAVAILABLE = 503,
  SERVERERR_GATEWAY_TIMEOUT = 504,
  SERVERERR_HTTP_VERSION_NOT_SUPPORTED = 505,
  SERVERERR_VARIANT_ALSO_NEGOTIATES = 506,
  SERVERERR_INSUFFICIENT_STORAGE = 507,
  SERVERERR_LOOP_DETECTED = 508,
  SERVERERR_NOT_EXTENDED = 510,
  SERVERERR_NETWORK_AUTHENTICATION_REQUIRED = 511,
}

// const STATUSCODES_JSON = {
//   informational: [
//     {
//       code: 100,
//       status: "Continue",
//       description:
//         "The server has received the request headers, and the client should proceed to send the request body.",
//     },
//     {
//       code: 101,
//       status: "Switching Protocols",
//       description:
//         "The requester has asked the server to switch protocols, and the server has agreed to do so.",
//     },
//   ],
//   success: [
//     { code: 200, status: "OK", description: "The request was successful." },
//     {
//       code: 201,
//       status: "Created",
//       description: "The resource was successfully created.",
//     },
//     {
//       code: 202,
//       status: "Accepted",
//       description:
//         "The request has been accepted for processing, but the processing has not been completed.",
//     },
//     {
//       code: 204,
//       status: "No Content",
//       description:
//         "The request was successful, but there is no content to return.",
//     },
//   ],
//   redirection: [
//     {
//       code: 301,
//       status: "Moved Permanently",
//       description: "The resource has been permanently moved to a new URL.",
//     },
//     {
//       code: 302,
//       status: "Found",
//       description:
//         "The resource was found, but it is temporarily located at a different URL.",
//     },
//     {
//       code: 304,
//       status: "Not Modified",
//       description: "The resource has not been modified since the last request.",
//     },
//   ],
//   clientError: [
//     {
//       code: 400,
//       status: "Bad Request",
//       description:
//         "The server could not understand the request due to invalid syntax.",
//     },
//     {
//       code: 401,
//       status: "Unauthorized",
//       description:
//         "Authentication is required and has failed or has not yet been provided.",
//     },
//     {
//       code: 403,
//       status: "Forbidden",
//       description: "The client does not have access rights to the content.",
//     },
//     {
//       code: 404,
//       status: "Not Found",
//       description: "The server can not find the requested resource.",
//     },
//     {
//       code: 405,
//       status: "Method Not Allowed",
//       description:
//         "The request method is known by the server but has been disabled and cannot be used.",
//     },
//   ],
//   serverError: [
//     {
//       code: 500,
//       status: "Internal Server Error",
//       description:
//         "The server encountered an unexpected condition that prevented it from fulfilling the request.",
//     },
//     {
//       code: 502,
//       status: "Bad Gateway",
//       description:
//         "The server, while acting as a gateway or proxy, received an invalid response from the upstream server.",
//     },
//     {
//       code: 503,
//       status: "Service Unavailable",
//       description:
//         "The server is not ready to handle the request, usually due to maintenance or overload.",
//     },
//     {
//       code: 504,
//       status: "Gateway Timeout",
//       description:
//         "The server is acting as a gateway and cannot get a response in time from the upstream server.",
//     },
//   ],
// };

class ServerStatus {
  private sendResponse(
    req: Request,
    res: Response,
    msg: JSON,
    code: HTTPStatus
  ) {}
}

export { HTTPStatus };
