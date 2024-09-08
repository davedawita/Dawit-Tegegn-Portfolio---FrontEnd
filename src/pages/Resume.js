import {useEffect, useState} from "react"


function Resume (props) {
  //Create state to hold resume data
  const[resumes, setResume] = useState(null)

  //Create function to make API call:
  const getResume = async() => {
    //make api call and get response
    const response = await fetch(props.URL + "resume")
    //change data to javascript object
    const data = await response.json()
    //set the projects state to data
    setResume(data)
  }

  //make an initial call inside useEfffect

  useEffect(() => {getResume()}, [])

  //define a function that will return the JSX needed once we get the data:
  const loaded = () => (
    <div>      
      <h1>Resume</h1>
      <button><a href={resumes.resume} download="Dawit's Resume" target='_blank'>Download Resume</a></button>
        
    </div>

  )
    
      
    
  

  return resumes ? loaded() : <h1>Loading...</h1>
  
}
export default Resume