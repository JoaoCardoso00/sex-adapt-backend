export const HttpCustomMessages = {
  AUTHORIZATION: {
    LOGIN_FAILED: 'Credenciais de login inválidas',
  },
  AUTHENTICATION: {},
  RECOVER: {
    RECOVER_NOT_FOUND: 'Recuperação não encontrada',
  },
  VALIDATION: {
    EMAIL: {
      INVALID: "E-mail inválido.",
      REQUIRED: "E-mail é obrigatório.",
    },
    PASSWORD: {
      INVALID: "Senha inválida.",
      REQUIRED: "Senha é obrgatória.",
      WEAK: "Senha fraca."
    },
    NAME: {
      INVALID: "Nome inválido.",
      REQUIRED: "Nome é obrgatório.",
    },
    REVIEW: {
      GRADE: {
        INVALID: "Avaliação inválida.",
        REQUIRED: "Avalição é obrigatória.",
        LENGTH: "Avalição tem que ser entre 0 e 5."
      },
      COMMENT: {
        INVALID: "Comentário inválido.",
        REQUIRED: "Comentário é obrigatório.",
        LENGTH: "Comentário deve ser menor que 125 caracteres."
      }
    }
  }
};
