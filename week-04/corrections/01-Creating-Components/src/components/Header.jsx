import Navigation from "./Navigation";

function Header(props) {
  console.log(props);
  console.log(props.theme);
  console.log(props.changeTheme);

  return (
    <section className="header">
        <h1 style={{fontSize: "1rem"}}>Hello Class</h1>
        <Navigation />
        <button onClick={props.changeTheme}>{props.theme}</button>
    </section>
  )
}

export default Header;