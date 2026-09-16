let students = [];
let companies = [];

const studentForm = document.getElementById("studentForm");
const companyForm = document.getElementById("companyForm");

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const student = {
        id: students.length + 1,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value,
        company: document.getElementById("company").value,
        status: document.getElementById("status").value
    };

    students.push(student);

    studentForm.reset();

    displayStudents();
    updateDashboard();
});

companyForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const company = {
        id: companies.length + 1,
        name: document.getElementById("companyName").value,
        role: document.getElementById("jobRole").value,
        salary: document.getElementById("salary").value
    };

    companies.push(company);

    companyForm.reset();

    displayCompanies();
    updateDashboard();
});

function displayStudents() {
    const studentList = document.getElementById("studentList");

    studentList.innerHTML = "";

    students.forEach(function (student) {
        studentList.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.department}</td>
                <td>${student.company || "Not Assigned"}</td>
                <td>${student.status}</td>
                <td>
                    <button class="action-btn edit-btn"
                        onclick="editStudent(${student.id})">
                        Edit
                    </button>

                    <button class="action-btn delete-btn"
                        onclick="deleteStudent(${student.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

function displayCompanies() {
    const companyList = document.getElementById("companyList");

    companyList.innerHTML = "";

    companies.forEach(function (company) {
        companyList.innerHTML += `
            <tr>
                <td>${company.id}</td>
                <td>${company.name}</td>
                <td>${company.role}</td>
                <td>${company.salary}</td>
                <td>
                    <button class="action-btn delete-btn"
                        onclick="deleteCompany(${company.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

function deleteStudent(id) {
    students = students.filter(function (student) {
        return student.id !== id;
    });

    displayStudents();
    updateDashboard();
}

function deleteCompany(id) {
    companies = companies.filter(function (company) {
        return company.id !== id;
    });

    displayCompanies();
    updateDashboard();
}

function editStudent(id) {
    const student = students.find(function (student) {
        return student.id === id;
    });

    document.getElementById("name").value = student.name;
    document.getElementById("email").value = student.email;
    document.getElementById("department").value = student.department;
    document.getElementById("company").value = student.company;
    document.getElementById("status").value = student.status;

    students = students.filter(function (student) {
        return student.id !== id;
    });

    displayStudents();
    updateDashboard();
}

function updateDashboard() {
    document.getElementById("totalStudents").innerText =
        students.length;

    document.getElementById("totalCompanies").innerText =
        companies.length;

    const placedCount = students.filter(function (student) {
        return student.status === "Placed";
    }).length;

    document.getElementById("placedStudents").innerText =
        placedCount;

    let rate = 0;

    if (students.length > 0) {
        rate = Math.round((placedCount / students.length) * 100);
    }

    document.getElementById("placementRate").innerText =
        rate + "%";
}

document.getElementById("search").addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();

    const filteredStudents = students.filter(function (student) {
        return student.name.toLowerCase().includes(searchValue);
    });

    const studentList = document.getElementById("studentList");

    studentList.innerHTML = "";

    filteredStudents.forEach(function (student) {
        studentList.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.department}</td>
                <td>${student.company || "Not Assigned"}</td>
                <td>${student.status}</td>
                <td>
                    <button class="action-btn delete-btn"
                        onclick="deleteStudent(${student.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
});
