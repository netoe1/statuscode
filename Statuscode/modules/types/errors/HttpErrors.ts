import { StatusCode } from "../../class/StatusCode";
import { HTTPStatus } from "../../enums/HTTPCodes";
// namespace HTTPResponse {
//   export class OK extends StatusCode {}
//   export class Created extends StatusCode {}
//   export class Accepted extends StatusCode {}
//   export class NoContent extends StatusCode {}
//   export class ResetContent extends StatusCode {}
//   export class PartialContent extends StatusCode {}
//   export class BadRequest extends StatusCode {}
//   export class Unauthorized extends StatusCode {}
//   export class PaymentRequired extends StatusCode {}
//   export class Forbidden extends StatusCode {}
//   export class NotFound extends StatusCode {}
//   export class MethodNotAllowed extends StatusCode {}
//   export class NotAcceptable extends StatusCode {}
//   export class ProxyAuthenticationRequired extends StatusCode {}
//   export class RequestTimeout extends StatusCode {}
//   export class Conflict extends StatusCode {}
//   export class Gone extends StatusCode {}
//   export class LengthRequired extends StatusCode {}
//   export class PreconditionFailed extends StatusCode {}
//   export class PayloadTooLarge extends StatusCode {}
//   export class URITooLong extends StatusCode {}
//   export class UnsupportedMediaType extends StatusCode {}
//   export class RangeNotSatisfiable extends StatusCode {}
//   export class ExpectationFailed extends StatusCode {}
//   export class ImATeapot extends StatusCode {}
//   export class MisdirectedRequest extends StatusCode {}
//   export class UnprocessableEntity extends StatusCode {}
//   export class Locked extends StatusCode {}
//   export class FailedDependency extends StatusCode {}
//   export class UpgradeRequired extends StatusCode {}
//   export class PreconditionRequired extends StatusCode {}
//   export class TooManyRequests extends StatusCode {}
//   export class RequestHeaderFieldsTooLarge extends StatusCode {}
//   export class UnavailableForLegalReasons extends StatusCode {}
//   export class InternalServerError extends StatusCode {}
//   export class NotImplemented extends StatusCode {}
//   export class BadGateway extends StatusCode {}
//   export class ServiceUnavailable extends StatusCode {}
//   export class GatewayTimeout extends StatusCode {}
//   export class HTTPVersionNotSupported extends StatusCode {}
//   export class VariantAlsoNegotiates extends StatusCode {}
//   export class InsufficientStorage extends StatusCode {}
//   export class LoopDetected extends StatusCode {}
//   export class NotExtended extends StatusCode {}
//   export class NetworkAuthenticationRequired extends StatusCode {}
// }

namespace HTTPResponse {
  export class OK extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.OK;
    }
  }

  export class Created extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.CREATED;
    }
  }

  export class Accepted extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.ACCEPTED;
    }
  }

  export class NoContent extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.NO_CONTENT;
    }
  }

  export class ResetContent extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.RESET_CONTENT;
    }
  }

  export class PartialContent extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.PARTIAL_CONTENT;
    }
  }

  export class BadRequest extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.BAD_REQUEST;
    }
  }

  export class Unauthorized extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.UNAUTHORIZED;
    }
  }

  export class PaymentRequired extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.PAYMENT_REQUIRED;
    }
  }

  export class Forbidden extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.FORBIDDEN;
    }
  }

  export class NotFound extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.NOT_FOUND;
    }
  }

  export class MethodNotAllowed extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.METHOD_NOT_ALLOWED;
    }
  }

  export class NotAcceptable extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.NOT_ACCEPTABLE;
    }
  }

  export class ProxyAuthenticationRequired extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.PROXY_AUTHENTICATION_REQUIRED;
    }
  }

  export class RequestTimeout extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.REQUEST_TIMEOUT;
    }
  }

  export class Conflict extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.CONFLICT;
    }
  }

  export class Gone extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.GONE;
    }
  }

  export class LengthRequired extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.LENGTH_REQUIRED;
    }
  }

  export class PreconditionFailed extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.PRECONDITION_FAILED;
    }
  }

  export class PayloadTooLarge extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.PAYLOAD_TOO_LARGE;
    }
  }

  export class URITooLong extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.URI_TOO_LONG;
    }
  }

  export class UnsupportedMediaType extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.UNSUPPORTED_MEDIA_TYPE;
    }
  }

  export class RangeNotSatisfiable extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.RANGE_NOT_SATISFIABLE;
    }
  }

  export class ExpectationFailed extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.EXPECTATION_FAILED;
    }
  }

  export class ImATeapot extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.IM_A_TEAPOT;
    }
  }

  export class MisdirectedRequest extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.MISDIRECTED_REQUEST;
    }
  }

  export class UnprocessableEntity extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.UNPROCESSABLE_ENTITY;
    }
  }

  export class Locked extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.LOCKED;
    }
  }

  export class FailedDependency extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.FAILED_DEPENDENCY;
    }
  }

  export class UpgradeRequired extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.UPGRADE_REQUIRED;
    }
  }

  export class PreconditionRequired extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.PRECONDITION_REQUIRED;
    }
  }

  export class TooManyRequests extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.TOO_MANY_REQUESTS;
    }
  }

  export class RequestHeaderFieldsTooLarge extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.REQUEST_HEADER_FIELDS_TOO_LARGE;
    }
  }

  export class UnavailableForLegalReasons extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.UNAVAILABLE_FOR_LEGAL_REASONS;
    }
  }

  export class InternalServerError extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.INTERNAL_SERVER_ERROR;
    }
  }

  export class NotImplemented extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.NOT_IMPLEMENTED;
    }
  }

  export class BadGateway extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.BAD_GATEWAY;
    }
  }

  export class ServiceUnavailable extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.SERVICE_UNAVAILABLE;
    }
  }

  export class GatewayTimeout extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.GATEWAY_TIMEOUT;
    }
  }

  export class HTTPVersionNotSupported extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.HTTP_VERSION_NOT_SUPPORTED;
    }
  }

  export class VariantAlsoNegotiates extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.VARIANT_ALSO_NEGOTIATES;
    }
  }

  export class InsufficientStorage extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.INSUFFICIENT_STORAGE;
    }
  }

  export class LoopDetected extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.LOOP_DETECTED;
    }
  }

  export class NotExtended extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.NOT_EXTENDED;
    }
  }

  export class NetworkAuthenticationRequired extends StatusCode {
    get statuscode(): number {
      return HTTPStatus.NETWORK_AUTHENTICATION_REQUIRED;
    }
  }
}

export { HTTPResponse };
