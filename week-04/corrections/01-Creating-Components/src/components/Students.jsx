import Student from "./Student";

function Students({ students }) {
  return (
    <div className="flex">
      {students.map((student) => (
        <Student studentData={student} key={student.id} />
      ))}
    </div>
  );
}

export default Students;
