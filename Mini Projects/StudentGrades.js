let students = [];

function addStudent(name) {
  let student = { name, grades: [] };
  students.push(student);
}

function addGrade(name, grade) {
  let student = students.find(student => student.name === name);
  if (student) {
    student.grades.push(grade);
  } else {
    console.log('Student not found');
  }
}

function calculateAverage(name) {
  let student = students.find(student => student.name === name);
  if (student) {
    let total = student.grades.reduce((sum, grade) => sum + grade, 0);
    let average = total / student.grades.length;
    console.log(`${student.name}'s Average Grade: ${average.toFixed(2)}`);
  } else {
    console.log('Student not found');
  }
}

// Test the functions
addStudent('Alice');
addStudent('Bob');
addGrade('Alice', 85);
addGrade('Alice', 90);
addGrade('Bob', 78);
addGrade('Bob', 82);
calculateAverage('Alice');
calculateAverage('Bob');
