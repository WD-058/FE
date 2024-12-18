import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import LightBulb from "./components/LightBulb";
import Form from "./components/Form";

function App() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({
    fname: "",
    email: "",
    password: "",
  });
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);
  // const [count3, setCount3] = useState(0);
  // const [isOn, setIsOn] = useState(false);
  // const handleClick = () => {
  //   setIsOn((prev) => !prev);
  // };
  return (
    <>
      {/* <Counter count={count1} setCount={setCount1} />
      <Counter count={count2} setCount={setCount2} />
      <Counter count={count3} setCount={setCount3} /> */}
      {/* <button onClick={handleClick}>Switch</button>
      <LightBulb isOn={isOn} /> */}
      <Form
        fname={fname}
        setFname={setFname}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        userData={userData}
        setUserData={setUserData}
      />
    </>
  );
}

export default App;
