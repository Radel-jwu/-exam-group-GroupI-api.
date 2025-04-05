routes/exams.js
router.put('/exams/:id', (req, res) => {
  const examId = parseInt(req.params.id);
  const updatedData = req.body;
  exams = exams.map(exam => exam.id === examId ? { ...exam, ...updatedData } : exam);
  res.json({ message: 'Exam updated' });
});
