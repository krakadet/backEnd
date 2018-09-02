const models = require('../models');

function getAllPersons(req, res) {
  models.Person.findAll({
    attributes: ['first_name', 'last_name', 'IPN', 'phone', 'avatar', 'email'],

  }).then((Person) => {
    res.status(200).json(Person);
  });
}

function postPerson(req, res) {
  models.Person
  .create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    phone: req.body.phone,
    email: req.body.email,
    IPN: req.body.IPN,
    avatar: req.body.commisionOfBank })
  .then((newPerson) => {
    res.status(201).json({ id: newPerson.get('id') });
  });
}

function putPerson(req, res) {
  models.Person.update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    IPN: req.body.IPN,
  }, {
    where: { id: req.params.id },
  }).then(() => {
    res.status(200).end();
  });
}

function deletePerson(req, res) {
  models.Person.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(204).end();
  });
}

module.exports = {
  getAllPersons,
  postPerson,
  putPerson,
  deletePerson,
};
