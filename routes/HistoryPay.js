const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../config/paramValidation');
const historyPayController = require('../controllers/HistoryPay');

const router = express.Router(); // eslint-disable-line new-cap

// return list of subcategories
router.route('/')
.get(validate(paramValidation.HistoryPay.getAll))
.get(historyPayController.getAllHistoryPay);

router.route('/:id')
.get(validate(paramValidation.HistoryPay.getAll))
.get(historyPayController.getHistoryPay);

// create new instance and return id
router.route('/')
.post(validate(paramValidation.HistoryPay.create))
.post(historyPayController.postHistoryPay);

// update instance
router.route('/:id')
.put(validate(paramValidation.HistoryPay.update))
.put(historyPayController.putHistoryPay);

// delete instance
router.route('/:id')
.delete(validate(paramValidation.HistoryPay.delete))
.delete(historyPayController.deleteHistoryPay);

module.exports = router;
