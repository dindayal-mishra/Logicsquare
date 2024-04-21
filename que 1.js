function generateStudentMarkSheets(students, details) {
    const studentsMarkSheets = [];
    
    for (let student of students) {
        let studentDetails = { name: student.name, Roll: student.Roll };
        let totalMarks = 0;
        
        let studentDetail = details.find(detail => detail.Roll === student.Roll);
        if (studentDetail) {
           
            for (let subject in studentDetail.subjects) {
                // Add subject marks to student's details
                studentDetails[subject] = studentDetail.subjects[subject];
                totalMarks += studentDetail.subjects[subject];
            }
        }
        studentDetails.total = totalMarks;
        studentDetails.status = totalMarks >= 200 ? "pass" : "fail";
        studentsMarkSheets.push(studentDetails);
    }
    
    return studentsMarkSheets;
}

const students = [
    { name: "Dhishan Debnath", Roll: 1 },
    { name: "Animesh Gupta", Roll: 2 },
    { name: "Tapas Sen", Roll: 3 },
    { name: "Misti Dutta", Roll: 4 },
    { name: "Chini Misra", Roll: 5 }
];
const details = [
    { Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
    { Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
    { Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
    { Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
    { Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } }
];
const studentsMarkSheets = generateStudentMarkSheets(students, details);
console.log(studentsMarkSheets);
