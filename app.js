const express = require('express');
const router = express.Router();
const examRoutes = require('./routes/exams')

router.get('/exam-group', (req, res) => {
  res.json({ message: 'Group <GROUP I> API' });
});

module.exports = router;

//app.js

const app = express();
const examGroupRoutes = require('./routes/examGroup');

app.use('/', examsRoutes);
app.use(express.json());
app.use('/', examGroupRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
