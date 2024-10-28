namespace AlgorithmHandlers {
  export class GenericError extends Error {} // Erro genérico que não foi especificado de forma clara.
  export class InvalidParameters extends Error {} // Erro de parametros inválidos de função
};

namespace ResponseHTTP {
  export class OK extends Error {}
  export class InternalServerError extends Error {}
  export class BadRequest extends Error {}
  export class Unauthorized extends Error {}
  export class NotFound extends Error {}
  export class NotImplemented extends Error {}
  export class InsufficientStorage extends Error {}
};

export { AlgorithmHandlers, ResponseHTTP };
