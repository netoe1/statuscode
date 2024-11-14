import { HTTPStatus, HTTPStatusDictionary } from "../enums/HTTPCodes";
import { NotifyTypes } from "../enums/ConsoleNotifier";
class StatusCode {
  // #status_code: HTTPStatus;
  #object: Object;
  #errMessage: string;

  constructor(
    // status_code: HTTPStatus,
    object: Object,
    errMessage: string | null
  ) {
    // Chama o construtor da classe pai

    if (/*status_code == null || */ object == null) {
      throw new Error(
        "[statuscode-constructor-err]: [status_code ou object não pode ser nulo]"
      );
    }

    // this.#status_code = status_code;
    this.#object = object;
    this.#errMessage = errMessage ?? "not defined"; // Usando o operador nullish coalescing
  }

  // get statusCode(): HTTPStatus {
  //   return this.#status_code;
  // }

  get object(): Object {
    return this.#object;
  }

  get errMessage(): Object {
    return this.#errMessage;
  }
}

class ConsoleNotifier {
  private static parseStatus(status: HTTPStatus): string {
    return HTTPStatusDictionary[status];
  }
  static notifyToString(fnObject: Function, status: HTTPStatus, msg: string) {
    return `[${fnObject.name}()][${this.parseStatus(status)}]:${msg}`;
  }
  static notifyInConsole(
    notifyType: NotifyTypes,
    fnObject: Function,
    status: HTTPStatus,
    msg: string
  ) {
    const buffer = `[${fnObject.name}()][${this.parseStatus(status)}]:${msg}`;

    switch (notifyType) {
      case NotifyTypes.WARNING:
        console.warn(buffer);
        break;
      case NotifyTypes.INFO:
        console.info(buffer);
        break;

      case NotifyTypes.ERROR:
        console.error(buffer);
        break;
      default:
        throw new Error("[notifyInConsole][err]:Invalid type.");
    }
    return console;
  }
}

export { StatusCode, ConsoleNotifier };
