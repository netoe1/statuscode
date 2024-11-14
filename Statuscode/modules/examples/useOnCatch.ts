//These are the sample codes to use: Put them right in the catch, and then do the functions that you use.

// if(err instanceof HTTPReponses.OK) {}
// if(err instanceof HTTPResponses.InternalServerError) {}
// if(err instanceof HTTPResponses.BadRequest) {}
// if(err instanceof HTTPResponses.Unauthorized) {}
// if(err instanceof HTTPResponses.NotFound) {}
// if(err instanceof HTTPResponses.NotImplemented) {}
// if(err instanceof HTTPResponses.InsufficientStorage) {}
// if(err instanceof ConsoleError) {}
// if(err instanceof ConsoleInfo) {}
// if(err instanceof ConsoleLog) {}
// if(err instanceof ConsoleSuccess) {}
// if(err instanceof GenericError) {}
// if(err instanceof InvalidParameters) {}
// if(err instanceof EmptyObject) {}

// // Exemplos
// if (err instanceof HTTPResponse.BadRequest) {
//   res.status(err.statuscode).send(err.object).end(),
//     console.error(err.errMessage);
// }
// if (err instanceof HTTPResponse.InternalServerError) {
//   res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(err.object).end(),
//     console.error(err.errMessage);
// }
// if (err instanceof PrismaClient) {
//   res
//     .status(HTTPStatus.INTERNAL_SERVER_ERROR)
//     .send({
//       msg: "Erro na consulta dos dados.",
//     })
//     .end(),
//     console.error(
//       ConsoleNotifier.notifyToString(
//         getUserInParamsToServer,
//         HTTPStatus.INTERNAL_SERVER_ERROR,
//         "Erro na consulta de dados."
//       )
//     );
// }
// if (err instanceof Error) {
//   res
//     .status(HTTPStatus.INTERNAL_SERVER_ERROR)
//     .send({
//       msg: "Erro interno no servidor, por favor, reporte!",
//     })
//     .end(),
//     console.error(
//       ConsoleNotifier.notifyToString(
//         getUserInParamsToServer,
//         HTTPStatus.INTERNAL_SERVER_ERROR,
//         "Erro interno no servidor:" + err.message
//       )
//     );
// }
/*
throw new HTTPResponse.InternalServerError(
          {
            msg: "Não foi possível criar uma nova role!",
          },
          ConsoleNotifier.notifyToString(
            createNewRole,
            HTTPStatus.INTERNAL_SERVER_ERROR,
            "Erro ao criar uma role."
          )
        );


         throw new HTTPResponse.BadRequest(
          { msg: "A requisição foi feita faltando dados." },
          ConsoleNotifier.notifyToString(
            createNewRole,
            HTTPStatus.BAD_REQUEST,
            "Algum campo obrigatório para a requisição foi feito de forma equivocada!"
          )
        );
*/
