const students = [];
const companies = [];

function addStudent(student) {
    students.push(student);
    return student;
}

function getStudents() {
    return students;
}

function deleteStudent(id) {
    const index = students.findIndex(function (student) {
        return student.id === Number(id);
    });

    if (index !== -1) {
        students.splice(index, 1);
        return true;
    }

    return false;
}

function addCompany(company) {
    companies.push(company);
    return company;
}

function getCompanies() {
    return companies;
}

function deleteCompany(id) {
    const index = companies.findIndex(function (company) {
        return company.id === Number(id);
    });

    if (index !== -1) {
        companies.splice(index, 1);
        return true;
    }

    return false;
}

module.exports = {
    addStudent,
    getStudents,
    deleteStudent,
    addCompany,
    getCompanies,
    deleteCompany
};
