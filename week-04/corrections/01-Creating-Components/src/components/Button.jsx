function Button({ content, className, handleClick }) {
  return (
    <button className={className} onClick={handleClick}>
      {content}
    </button>
  );
}

export default Button;
