// const PersonController = require('../controllers/person.controller');

const { create, message } = require("../controllers/product.controller");

const express = require("express");
const projectRouter = express.Router();

// module.exports = function(app){
//     app.get('/api', PersonController.index);
// }
projectRouter
  .route("/")
  .get(message);

projectRouter
  .route("/projects")
  .post(create);

module.exports = projectRouter;
