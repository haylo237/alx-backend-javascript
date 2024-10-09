function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades) || typeof city !== 'string') {
    return [];
  }

  const gradesMap = newGrades.reduce((acc, { studentId, grade }) => {
    acc[studentId] = grade;
    return acc;
  }, {});

  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: gradesMap[student.id] !== undefined ? gradesMap[student.id] : 'N/A',
    }));
}

export default updateStudentGradeByCity;
