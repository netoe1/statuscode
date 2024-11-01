import { StatusCode } from "../../../StatusCode";

namespace HTTPResponse {
  export class OK extends StatusCode {}
  export class InternalServerError extends StatusCode {}
  export class BadRequest extends StatusCode {}
  export class Unauthorized extends StatusCode {}
  export class NotFound extends StatusCode {}
  export class NotImplemented extends StatusCode {}
  export class InsufficientStorage extends StatusCode {}
}

export { HTTPResponse };
