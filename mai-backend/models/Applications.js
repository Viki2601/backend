const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    name: String,
    email: String,
    phone: String,
    message: String,
    resumePath: String, // File path to the uploaded resume
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
