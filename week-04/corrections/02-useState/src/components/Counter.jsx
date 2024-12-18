function Counter({ count, setCount }) {
  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);
  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <h2>{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}

export default Counter;
