let exams = [
  { id: 1, subject: 'Math', date: '2025-04-10' }
];

routes/exams.js

router.post('/exams', (req, res) => {
  const newExam = req.body;
  exams.push(newExam);
  res.status(201).json(newExam);
});
