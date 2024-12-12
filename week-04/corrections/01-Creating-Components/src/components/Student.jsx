function Student({ studentData }) {
//   console.log(props);

  //   const { studentData } = props;
  //   const studentData = {
  //     firstName: "Testy",
  //     lastName: "McTest",
  //     age: 42,
  //     course: "Web Development",
  //     city: "Berlin",
  //     picture: "https://randomuser.me/api/portraits/men/1.jpg",
  //   };
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
      </div>
    </div>
  );
}

export default Student;
