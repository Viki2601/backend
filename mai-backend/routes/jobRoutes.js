const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.post('/jobs', async (req, res) => {
    console.log(req.body)
    try {
        const newJob = new Job(req.body);
        await newJob.save();
        res.status(201).json({ message: "Job Posted Successfully", Job: newJob });
    } catch (error) {
        res.status(500).json({ error: "Failed to post job", details: error.message });
    }
});

module.exports = router;