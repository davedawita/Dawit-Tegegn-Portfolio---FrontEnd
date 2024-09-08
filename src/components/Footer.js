import { Link } from "react-router-dom";

function Footer(props) {
  //inline style for the nav tag
  const navStylefooter = {
    display: "flex",
    justifyContent: "space-around",
    border: "2px solid beige",
    padding: "18px",
    width: "90%",
    margin: "0 0 20px 73px",
    fontSize: "23px",
    backgroundColor: "#EFC262",    
    textColor: "white",
    
  };

  return (
    <footer>      
      <nav style={navStylefooter}>
        <a href="https://github.com/davedawita" target='_blank'>Github</a>         
        <a href="https://www.linkedin.com/in/dawitabrtegegn/" target='_blank'>LinkedIn</a>
      </nav>
    </footer>
  );
}

export default Footer
