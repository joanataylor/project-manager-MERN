const Project = require('../models/project.model');

const message = (req, res) => {
  res.json("Hello World");
};

const create = (req, res) => {
  Project.create(req.body)
  .then(project => res.status(201).json(project))
  .catch(err => res.status(400).json(err));
};

module.exports = { message, create };