var present_student = [];
var absent_students =[];

var no_of_students = Number(prompt("enter the number of students"));


for(var i = 0;i < no_of_students;i++){
    var input_name = prompt(`Enter the name of student(${i + 1})`);
    var attendance = prompt(`Enter whether student ${input_name} Present or Absent`);
}
if (attendance === "Present") {
    present_student.push(input_name);
} else if (attendance === "Absent") {
    absent_students.push(input_name);
}
var numberOfPresentStudents = present_student.length;
var numberOfAbsentStudents = absent_students.length;

alert(`Total Students Present: ${numberOfPresentStudents}\nPresent Students List:${present_student}\nAbsent Students: ${numberOfAbsentStudents}\nAbsent Students List:${absent_students}`);
