import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "2px solid black",    
    width: "90%",
    margin: "0 auto",
    fontSize: "23px",
    textDecoration: "none",
    padding: "18px",
  };

  return (
    <header>
      {/* <h1>Dawit's Portfolio</h1> */}
      <nav style={navStyle}>
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
        <Link to="/resume">
          <div>RESUME</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;

