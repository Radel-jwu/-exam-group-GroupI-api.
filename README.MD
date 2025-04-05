# API Documentation

## Contributors:
LocayLocay: Added GET /exams endpoint
Pagente 2: Added POST /exams endpoint
Munoz 3: Added PUT /exams/:id endpoint

# Endpoints:

# GET /exam-group
- Response: { "message": "Group <GROUP-I> API" }

# GET /exams
- Response: A list of exams, e.g., [ { id: 1, name: "Semi-final Exam" }, { id: 2, name: "Final Exam" }]

# POST /exams
- Request Body: { "name": "INTPROG Exam" }
- Response: A newly added exam, e.g., { id: 3, name: "INTPROG Exam" }

# PUT /exams/:id
- Request Body: { "name": "Updated Exam" }
Response: The updated exam object.
Sent