import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [img, setImg] = useState("https://picsum.photos/200/300");
  const [name, setName] = useState("");
  const [todos, setTods] = useState([]);
  
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleImage = () => {
    setImg(
      "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
    );
  };

  return (
    <>
      <h1>Vite useState</h1>
      <div className="card">
        <img src={img} alt="image" />
        <button onClick={handleImage}>change image</button>
        <button onClick={handleClick}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
