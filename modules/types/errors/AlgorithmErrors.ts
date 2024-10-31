namespace AlgorithmHandlers {
  export class GenericError extends Error {} // Erro genérico que não foi especificado de forma clara.
  export class InvalidParameters extends Error {} // Erro de parametros inválidos de função
  export class EmptyObject extends Error {}
}

export { AlgorithmHandlers };
