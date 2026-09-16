const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let students = [];
let companies = [];

// Home route
app.get("/", function (req, res) {
    res.send("Placement Management System Backend is Running");
});

// Get all students
app.get("/students", function (req, res) {
    res.json(students);
});

// Add student
app.post("/students", function (req, res) {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        email: req.body.email,
        department: req.body.department,
        company: req.body.company,
        status: req.body.status
    };

    students.push(student);

    res.status(201).json({
        message: "Student added successfully",
        student: student
    });
});

// Delete student
app.delete("/students/:id", function (req, res) {
    const id = Number(req.params.id);

    students = students.filter(function (student) {
        return student.id !== id;
    });

    res.json({
        message: "Student deleted successfully"
    });
});

// Get all companies
app.get("/companies", function (req, res) {
    res.json(companies);
});

// Add company
app.post("/companies", function (req, res) {
    const company = {
        id: companies.length + 1,
        name: req.body.name,
        role: req.body.role,
        salary: req.body.salary
    };

    companies.push(company);

    res.status(201).json({
        message: "Company added successfully",
        company: company
    });
});

// Delete company
app.delete("/companies/:id", function (req, res) {
    const id = Number(req.params.id);

    companies = companies.filter(function (company) {
        return company.id !== id;
    });

    res.json({
        message: "Company deleted successfully"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`);
});
