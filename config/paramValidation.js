const Joi = require('joi');

module.exports = {
  Person: {
    getPage: {
      query: {
        page: Joi.number().integer().min(1),
      },
      params: {
        id: Joi.number().integer().min(1),
      },
      options: {
        allowUnknownBody: false,
        allowUnknownHeaders: false,
        allowUnknownQuery: false,
        allowUnknownParams: false,
      },
    },
    create: {
      body: {
        first_name: Joi.string().min(2).required(),
        last_name: Joi.string().min(2).required(),
        password: Joi.string().min(8).required(),
        phone: Joi.string().min(8).required(),
        // IPN: Joi.number().integer().min(1).required,
        email: Joi.string().email().required(),
        avatar: Joi.string().min(1).optional(),
      },
      options: {
        allowUnknownBody: false,
        allowUnknownHeaders: false,
        allowUnknownQuery: false,
        allowUnknownParams: false,
      },
    },
    update: {
      params: {
        id: Joi.number().min(1).required(),
      },
      body: {
        first_name: Joi.string().min(2).required(),
        last_name: Joi.string().min(2).required(),
        password: Joi.string().min(8).required(),
        phone: Joi.string().min(8).required(),
        // IPN: Joi.number().integer().min(1).required,
        email: Joi.string().email().required(),
        avatar: Joi.string().min(1).optional(),
      },
      options: {
        allowUnknownBody: false,
        allowUnknownHeaders: false,
        allowUnknownQuery: false,
        allowUnknownParams: false,
      },
    },
    delete: {
      params: {
        id: Joi.number().min(1).required(),
      },
      options: {
        allowUnknownBody: false,
        allowUnknownHeaders: false,
        allowUnknownQuery: false,
        allowUnknownParams: false,
      },
    },
  },
  Account: {
    getAll: {
      options: {
        allowUnknownBody: false,
        allowUnknownHeaders: false,
        allowUnknownQuery: false,
        allowUnknownParams: false,
      },
    },
    create: {
      body: {
        accNumber: Joi.number().min(1).required(),
        card: Joi.number().min(2).optional(),
        balance: Joi.number().optional(),
        CVV: Joi.number().min(3).required(),
        commissionOfCard: Joi.number().required(),
        lastDayUse: Joi.number().min(4).required(),
      },
      options: {
        allowUnknownBody: false,
        allowUnknownHeaders: false,
        allowUnknownQuery: false,
        allowUnknownParams: false,
      },
    },
    update: {
      params: {
        id: Joi.number().min(1).required(),
      },
      body: {
        accNumber: Joi.number().min(1).required(),
        card: Joi.number().min(2).optional(),
        balance: Joi.number().optional(),
        CVV: Joi.number().min(3).required(),
        commissionOfCard: Joi.number().required(),
        lastDayUse: Joi.number().min(4).required(),
      },
      options: {
        allowUnknownBody: false,
        allowUnknownHeaders: false,
        allowUnknownQuery: false,
        allowUnknownParams: false,
      },
    },
    delete: {
      params: {
        id: Joi.number().min(1).required(),
      },
      options: {
        allowUnknownBody: false,
        allowUnknownHeaders: false,
        allowUnknownQuery: false,
        allowUnknownParams: false,
      },
    },
  },
  HistoryPay: {
    getAll: {
      options: {
        allowUnknownBody: false,
        allowUnknownHeaders: false,
        allowUnknownQuery: false,
        allowUnknownParams: false,
      },
    },
    get: {
      params: {
        comments: Joi.number().integer().min(1).required(),
      },
      options: {
        allowUnknownBody: false,
        allowUnknownHeaders: false,
        allowUnknownQuery: false,
        allowUnknownParams: false,
      },
    },
    create: {
      body: {
        comments: Joi.string().min(10),
        card: Joi.string().min(8).required(),
        commissionOfBank: Joi.number().required(),
        date: Joi.string().required(),
        accountSender: Joi.number().min(1).required(),
        transactionId: Joi.number().min(1).required(),
        totalSum: Joi.number().required(),
      },
      options: {
        allowUnknownBody: false,
        allowUnknownHeaders: false,
        allowUnknownQuery: false,
        allowUnknownParams: false,
      },
    },
    update: {
      params: {
        id: Joi.number().min(1).required(),
      },
      body: {
        comments: Joi.string().min(10),
        card: Joi.string().min(8).required(),
        commissionOfBank: Joi.number().required(),
        date: Joi.string().optional(),
        accountSender: Joi.number().min(1).required(),
        transactionId: Joi.number().min(1).required(),
        totalSum: Joi.number().required(),
      },
      options: {
        allowUnknownBody: false,
        allowUnknownHeaders: false,
        allowUnknownQuery: false,
        allowUnknownParams: false,
      },
    },
    delete: {
      params: {
        id: Joi.number().min(1).required(),
      },
      options: {
        allowUnknownBody: false,
        allowUnknownHeaders: false,
        allowUnknownQuery: false,
        allowUnknownParams: false,
      },
    },
  },
};
