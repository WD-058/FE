import Grade from "./Grade";

function Student({ studentData }) {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={studentData.picture}
          alt={`${studentData.firstName} ${studentData.lastName}`}
        />
      </div>
      <div className="card-text">
        <h3>
          {studentData.firstName} {studentData.lastName}
        </h3>
        <p>{studentData.age} years old</p>
        <p>{studentData.course}</p>
        <p>{studentData.city}</p>
        <Grade studentGpa={studentData.gpa} />
        <p>{studentData.graduate ? "Graduate" : "Student"}</p>
      </div>
    </div>
  );
}

export default Student;
