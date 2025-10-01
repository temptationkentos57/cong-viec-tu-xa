const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Đăng tuyển việc làm
router.post('/', async (req, res) => {
  const job = new Job(req.body);
  try {
    await job.save();
    res.status(201).send(job);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Lấy danh sách việc làm
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.send(jobs);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
