const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobTitle: { type: String, required: true },
    department: { type: String, required: true },
    jobDescription: { type: String, required: true },
    qualifications: { type: String, required: true },
    minSalary: { type: Number },
    maxSalary: { type: Number },
    jobType: { type: String, required: true },
    deadline: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Job", jobSchema);