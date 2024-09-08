import { useState, useEffect } from "react"

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null)

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "projects")
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setProjects(data)
  }

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {getProjectsData()}, [])

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project) => (
      
        <ul className="projectlist"> 
          <li>
            <div className="projectimage">
              <h1 className="welcome">Project Name: {project.name}</h1>
                <img style={{ width: 700, height: 350 }} src={project.image} alt="image" />
                  <div className="projlinks">
                    <a href={project.gitFrontEnd} target='_blank' >
                    <button className="linksbutton">Github-Front-End</button>
                    </a>
                    <a href={project.gitBackEnd} target='_blank' >
                      <button className="linksbutton">Github-Back-End</button>
                    </a>
                    <a href={project.live} target='_blank' >
                    <b><button className="linksbutton">live site</button></b>
                    </a>
                  </div>                
            </div>          
          </li>             
        </ul>
      
      
    ))
  }

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;

