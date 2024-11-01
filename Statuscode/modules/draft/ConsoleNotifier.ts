import { isObjectEmpty } from "./functions/Algorithm";
import { ConsoleNotifierTypes, HTTPStatus } from "./enum";
import { Response } from "express";

class ConsoleNotifier {
  notifyServerSide(msg: string): void {
    console.info(ConsoleNotifierTypes.DefaultLabel.SERVER_SIDE + `[${msg}]`);
  }

  notifyClientSide(
    res: Response,
    object: object,
    statusCode: HTTPStatus
  ): void {
    try {
      // Verifique se o objeto está vazio
      if (isObjectEmpty(object)) {
        // Supondo que isObjectEmpty seja uma função que verifica se o objeto está vazio
        throw new Error("O objeto está vazio.");
      }
      res.status(statusCode).send(object).end(); // Enviando o objeto diretamente
    } catch (err) {
      if (err instanceof Error) {
        this.notifyServerSide(err.message);
      }
    }
  }
}

export { ConsoleNotifier };
