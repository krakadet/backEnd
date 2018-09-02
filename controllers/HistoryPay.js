const models = require('../models');

function getAllHistoryPay(req, res) {
  models.HistoryPay.findAll({
    attributes: ['id', 'name'],
  })
  .then((HistoryPay) => {
    res.status(200).json(HistoryPay);
  });
}

function getHistoryPay(req, res) {
  models.HistoryPay.findAll({
    attributes: ['id', 'name'],
    where: {
      comments: req.params.id,
    },
  })
  .then((HistoryPay) => {
    res.status(200).json(HistoryPay);
  });
}

function postHistoryPay(req, res) {
  models.HistoryPay
  .create({
    comments: req.body.comments,
    card: req.body.card,
    commissionOfBank: req.body.commissionOfBank,
    date: req.body.date,
    accountSender: req.body.accountSender,
    transactionId: req.body.transactionId,
    totalSum: req.body.totalSum,
  })
  .then((HistoryPay) => {
    res.status(201).json({ id: newHistoryPay.get('id') });
  });
}

function putHistoryPay(req, res) {
  models.HistoryPay.update({
    accountSender: req.body.accountSender,
  }, {
    where: { id: req.params.id },
  }).then(() => {
    res.status(200).end();
  });
}

function deleteHistoryPay(req, res) {
  models.HistoryPay.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(204).end();
  });
}

module.exports = {
  getAllHistoryPay,
  getHistoryPay,
  postHistoryPay,
  putHistoryPay,
  deleteHistoryPay,
};
