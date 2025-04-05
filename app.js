// app.js
const express = require('express');
const app = express();
const examRoutes = require('./routes/exams');

app.use(express.json());

// Base route
app.get('/exam-group', (req, res) => {
  res.json({ message: 'Group <your_group> API' });
});

// Use exam routes
app.use('/', examRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
