const models = require('../models');

function getAllAccount(req, res) {
  models.Account.findAll({
    attributes: ['id', 'name'],
  })
  .then((Accounts) => {
    res.status(200).json(Accounts);
  });
}

function postAccount(req, res) {
  models.Account
  .create({
    card: req.body.card,
    PersonId: req.body.PersonId,
    lastDayUse: req.body.lastDayUse,
    balance: req.body.balance,
    CVV: req.body.CVV,
    commissionOfBank: req.body.commisionOfBank,
  })
  .then((newAccount) => {
    res.status(201).json({ id: newAccount.get('id') });
  });
}

function putAccount(req, res) {
  models.Account.update({
    accountSender: req.body.accountSender,
  }, {
    where: { id: req.params.id },
  }).then(() => {
    res.status(200).end();
  });
}

function deleteAccount(req, res) {
  models.Account.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(204).end();
  });
}

module.exports = {
  getAllAccount,
  postAccount,
  putAccount,
  deleteAccount,
};
