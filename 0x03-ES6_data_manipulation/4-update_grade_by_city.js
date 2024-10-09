function updateStudentGradeByCity(students, city, newGrades) {
    if (!Array.isArray(students) || !Array.isArray(newGrades) || typeof city !== 'string') {
        return [];
    }

    // Create a map for quick access to new grades
    const gradesMap = newGrades.reduce((acc, { studentId, grade }) => {
        acc[studentId] = grade;
        return acc;
    }, {});

    return students
        .filter(student => student.location === city) // Filter by city
        .map(student => ({
            id: student.id,
            firstName: student.firstName,
            location: student.location,
            grade: gradesMap[student.id] !== undefined ? gradesMap[student.id] : 'N/A', // Get the grade or 'N/A'
        }));
}

export default updateStudentGradeByCity;
