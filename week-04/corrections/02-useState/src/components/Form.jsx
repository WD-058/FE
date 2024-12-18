function Form({ userData, setUserData }) {
  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(userData));
    setUserData({
      fname: "",
      email: "",
      password: "",
    });
  };
  console.log("userData", userData);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fname">First Name</label>
        <input
          value={userData.fname}
          onChange={handleChange}
          type="text"
          name="fname"
          id="fname"
        />

        <label htmlFor="email">Email</label>
        <input
          value={userData.email}
          onChange={handleChange}
          type="text"
          name="email"
          id="email"
        />

        <label htmlFor="password">Password</label>
        <input
          value={userData.password}
          onChange={handleChange}
          type="password"
          name="password"
          id="password"
        />
      </div>
      <button type="submit">send</button>
    </form>
  );
}

export default Form;
