let students = [
  { name: "Mehmoona", marks: 100 },
  { name: "Habiba", marks: 89 },
  { name: "Javeria", marks: 81 },
  { name: "Fatima", marks: 34 },
  { name: "Ayesha", marks: 48 }
];

let passedStudents = students.filter(student => student.marks > 50);

console.log("Students with marks greater than 50:");
for (let s of passedStudents) {
  console.log(`Name: ${s.name}, Marks: ${s.marks}`); 
}