import {useEffect, useState} from "react"


function Resume (props) {
  //Create state to hold resume data
  const[resume, setResume] = useState(null)

  //Create function to make API call:
  const getResume = async() => {
    //make api call and get response
    const response = await fetch(props.URL + 'resume')
    //change data to javascript object
    const data = await response.json()
    //set the projects state to data
    setResume(data)
  }

  //make an initial call inside useEfffect

  useEffect(() => getResume(), [])

  //define a function that will return the JSX needed once we get the data:
  const Loaded = () => {
    return resume.map((resume) => (
      <div>
        <a href={resume.resume}>
          <button>Resume</button>
        </a>
  
      </div>
    ))
  }

  return resume ? Loaded() : <h1>Loading...</h1>
  
}
export default Resume