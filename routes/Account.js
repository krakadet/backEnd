const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../config/paramValidation');
const accountController = require('../controllers/Account');

const router = express.Router(); // eslint-disable-line new-cap

// return list of categories
router.route('/')
.get(validate(paramValidation.Account.getAll))
.get(accountController.getAllAccount);

// create new instance and return id
router.route('/')
.post(validate(paramValidation.Account.create))
.post(accountController.postAccount);

// update instance
router.route('/:id')
.put(validate(paramValidation.Account.update))
.put(accountController.putAccount);

// delete instance
router.route('/:id')
.delete(validate(paramValidation.Account.delete))
.delete(accountController.deleteAccount);

module.exports = router;
