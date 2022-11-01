export const HttpCustomMessages = {
  AUTHORIZATION: {
    LOGIN_FAILED: 'Credenciais de login inválidas.'
  },
  AUTHENTICATION: {},
  USER: {
    NOT_FOUND: 'Usuário não encontrado.'
  },
  RECOVER: {
    NOT_FOUND: 'Recuperação não encontrada.',
    IN_PROGRESS: 'Recuperação em andamento.',
    PENDING_CONFIRMATION: 'Por favor confirme o código enviado para seu email.',
    TOKEN: {
      INVALID: 'Token de recuperação inválido.',
      NOT_FOUND: 'Token de recupeção não encontrado.'
    }
  },
  VALIDATION: {
    EMAIL: {
      INVALID: 'E-mail inválido.',
      REQUIRED: 'E-mail é obrigatório.'
    },
    PASSWORD: {
      INVALID: 'Senha inválida.',
      REQUIRED: 'Senha é obrgatória.',
      WEAK: 'Senha fraca.'
    },
    NAME: {
      INVALID: 'Nome inválido.',
      REQUIRED: 'Nome é obrgatório.'
    },
    REVIEW: {
      GRADE: {
        INVALID: 'Avaliação inválida.',
        REQUIRED: 'Avalição é obrigatória.',
        LENGTH: 'Avalição tem que ser entre 0 e 5.'
      },
      COMMENT: {
        INVALID: 'Comentário inválido.',
        REQUIRED: 'Comentário é obrigatório.',
        LENGTH: 'Comentário deve ser menor que 125 caracteres.'
      }
    }
  }
};
