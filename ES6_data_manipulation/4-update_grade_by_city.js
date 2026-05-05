export default function updateStudentGradeByCity(arr, city, newGrades) {
	if (!Array.isArray(arr) || !Array.isArray(newGrades)) {
		return [];
	}
	return arr.map((student) => {
		if (student.location === city) {
			const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
			if (gradeObj) {
				return { ...student, grade: gradeObj.grade };
			}
		}
		return student;
	});
}
