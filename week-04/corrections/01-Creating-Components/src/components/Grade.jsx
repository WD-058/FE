function Grade({ studentGpa }) {
  const gpa = studentGpa;
  let grade = "";
  if (gpa >= 90) {
    grade = "A";
  } else if (gpa >= 80) {
    grade = "B";
  } else if (gpa >= 70) {
    grade = "C";
  } else if (gpa >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  return <p> Grade: {grade}</p>;
}

export default Grade;
