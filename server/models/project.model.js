const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    Title: String,
    // isComplete: Boolean,
    Price: String,
    Description: String,
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;