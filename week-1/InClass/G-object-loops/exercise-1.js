// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
};


const studentGradesKeys = Object.keys(studentGrades.filter(studentGrade => studentGrade.value > 18));

studentGradesKeys.forEach((key) => {
  console.log(`${key} - ${studentGrades[key]}`);
});



for (let key in flowers) {
  console.log('${flowers[key]}')
}

  // Prints
  // TOM - 20
  // ABDUL - 19