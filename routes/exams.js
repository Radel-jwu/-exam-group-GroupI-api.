const express = require('express');
const router = express.Router();

routes/exams.js

const exams = [
  { id: 1, subject: 'Math', date: '2025-04-10' },
  { id: 2, subject: 'Science', date: '2025-04-12' }
];

router.get('/exams', (req, res) => {
  res.json(exams);
});

module.exports = router;