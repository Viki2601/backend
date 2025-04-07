const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobTitle: String,
  department: String,
  jobDescription: String,
  qualifications: String,
  jobType: String,
  deadline: Date,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);
