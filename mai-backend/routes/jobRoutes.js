const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Posting Jobs
router.post('/jobs', async (req, res) => {
    try {
        const newJob = new Job(req.body);
        await newJob.save();
        res.status(201).json({ message: "Job Posted Successfully", Job: newJob });
    } catch (error) {
        res.status(500).json({ error: "Failed to post job", details: error.message });
    }
});

// Get All Jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update Job Posting
router.put('/update/:id', async (req, res) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedJob);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete Job Posting
router.delete('/delete/:id', async (req, res) => {
    try {
        await Job.findByIdAndDelete(req.params.id);
        console.log("first")
        res.json({ message: "Job Deleted Successfully" });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;