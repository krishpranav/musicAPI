const base = require('./base');

const userString = "./json/users.json"

exports.findAllUsers = () => {
  return base.findAll(userString);
};

exports.findUserById = (id) => {
  return base.findById(userString, id);
};

exports.createUser = (user) => {
  return base.create(userString, user);
};

exports.updateUser = (id, user) => {
  return base.update(userString, id, user);
};

exports.deleteUser = (id) => {
  return base.deleteRecord(userString, id);
};