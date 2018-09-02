const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../config/paramValidation');
const personController = require('../controllers/Person');

const router = express.Router(); // eslint-disable-line new-cap

// return list of products
router.route('/:id')
.get(validate(paramValidation.Person.getPage))
.get(personController.getAllPersons);

// create new instance and return id and accountSender
router.route('/')
.post(validate(paramValidation.Person.create))
.post(personController.postPerson);

// update instance
router.route('/:id')
.put(validate(paramValidation.Person.update))
.put(personController.putPerson);

// delete instance
router.route('/:id')
.delete(validate(paramValidation.Person.delete))
.delete(personController.deletePerson);

module.exports = router;
