const express = require('express');
const router = express.Router();

const examsGet = [
  { id: 1, subject: 'Math', date: '2025-04-10' },
  { id: 2, subject: 'Science', date: '2025-04-12' }
];

router.get('/exams', (req, res) => {
  res.json(exams);
});

module.exports = router;

router.put('/exams/:id', (req, res) => {
  const examId = parseInt(req.params.id);
  const updatedData = req.body;
  exams = exams.map(exam => exam.id === examId ? { ...exam, ...updatedData } : exam);
  res.json({ message: 'Exam updated' });
});

let examsPost = [
  { id: 1, subject: 'Math', date: '2025-04-10' }
];

router.post('/exams', (req, res) => {
  const newExam = req.body;
  exams.push(newExam);
  res.status(201).json(newExam);
});