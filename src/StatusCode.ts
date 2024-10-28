import { Request, Response } from "express";
import { HTTPStatus } from "./modules/enum";
import { ConsoleNotifier } from "./modules/ConsoleNotifier";

class StatusCode extends ConsoleNotifier {
  #status_code: HTTPStatus;
  #object: Object;
  #errMessage: string;

  constructor(
    status_code: HTTPStatus,
    object: Object,
    errMessage: string | null
  ) {
    // Chama o construtor da classe pai
    super();

    if (status_code == null || object == null) {
      throw new Error(
        "[statuscode-constructor-err]: [status_code ou object não pode ser nulo]"
      );
    }

    this.#status_code = status_code;
    this.#object = object;
    this.#errMessage = errMessage ?? "not defined"; // Usando o operador nullish coalescing
  }

  get getStatusCode(): HTTPStatus {
    return this.#status_code;
  }

  get getObject(): Object {
    return this.#object;
  }

  get getErrMessage(): Object {
    return this.#errMessage;
  }
}

export { StatusCode };
