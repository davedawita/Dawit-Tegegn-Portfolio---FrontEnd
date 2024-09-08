import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  // const navStyle = {
  //   display: "flex",
  //   justifyContent: "space-around",
  //   border: "3px solid beige",    
  //   width: "90%",
  //   margin: "0 auto",
  //   fontSize: "23px",
  //   textDecoration: "none",
  //   backgroundColor: "#5DB3D5",
  //   padding: "18px",
  //   color: "white",
  
  // };

  return (
    <header>      
      <nav className="header">
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

