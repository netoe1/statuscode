
import { Request, Response } from "express";

//#region ENUM_REGION
enum HTTPStatus {
  // 1xx Informational
  INFO_CONTINUE = 100,
  INFO_SWITCHING_PROTOCOLS = 101,

  // 2xx Success
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NON_AUTHORITATIVE_INFORMATION = 203,
  NO_CONTENT = 204,
  RESET_CONTENT = 205,
  PARTIAL_CONTENT = 206,

  // 3xx Redirection
  MULTIPLE_CHOICES = 300,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
  USE_PROXY = 305,
  TEMPORARY_REDIRECT = 307,
  PERMANENT_REDIRECT = 308,

  // 4xx Client Error
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  PROXY_AUTHENTICATION_REQUIRED = 407,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  LENGTH_REQUIRED = 411,
  PRECONDITION_FAILED = 412,
  PAYLOAD_TOO_LARGE = 413,
  URI_TOO_LONG = 414,
  UNSUPPORTED_MEDIA_TYPE = 415,
  RANGE_NOT_SATISFIABLE = 416,
  EXPECTATION_FAILED = 417,
  IM_A_TEAPOT = 418, // Um easter egg RFC
  MISDIRECTED_REQUEST = 421,
  UNPROCESSABLE_ENTITY = 422,
  LOCKED = 423,
  FAILED_DEPENDENCY = 424,
  TOO_EARLY = 425,
  UPGRADE_REQUIRED = 426,
  PRECONDITION_REQUIRED = 428,
  TOO_MANY_REQUESTS = 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,

  // 5xx Server Error
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  HTTP_VERSION_NOT_SUPPORTED = 505,
  VARIANT_ALSO_NEGOTIATES = 506,
  INSUFFICIENT_STORAGE = 507,
  LOOP_DETECTED = 508,
  NOT_EXTENDED = 510,
  NETWORK_AUTHENTICATION_REQUIRED = 511,
}
//#endregion ENUM_REGION
//#region COMMENTARY_REGION
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

//#endregion COMMENTARY_REGION

//#region CLASS_REGION

class StatusCode {
  #status_code;
  #JSON;
  #errMessage;

  constructor(status_code: HTTPStatus, JSON: Object, errMessage: string) {
    if (errMessage == null) {
      this.#errMessage = "not defined";
    }
    if (status_code != null || JSON != null) {
      this.#JSON = JSON;
      this.#status_code = status_code;
      this.#errMessage = errMessage;
      return;
    }

    throw new Error(
      "[statuscode-constructor-err]: [Erro ao usar o construtor]"
    );
  }

  get statuscode() {
    return this.#status_code;
  }

  get json() {
    return this.#JSON;
  }
  get errMessage() {
    return this.#errMessage;
  }

  notifySvByTerminal(msg: string) {
    return console.info("[Server-side]" + "[" + msg + "]");
  }

  notifySvByResponse(res: Response, info: StatusCode) {
    return res.status(this.#errMessage).send(this.json).end();
  }

  notifyBoth(res: Response, info: StatusCode) {
    res.status(this.#errMessage).send(this.json).end();
    return console.info("[Server-side]:" + "[" + info.json + "]");
  }
}

//#endregion CLASS_REGION
export { HTTPStatus, StatusCode };
