
import picture from '../ProfilePicture.jpg'

function Home(props) {
  return(
    <div>
      <h1 className='welcome'>Welcome to my Portfolio</h1>
      
      <img src={picture} alt="Photo" className='profilepicture'/>
    

      <h2 className='homepage'>Hi, I'm Dawit Tegegn!</h2>
      <h2 className='homepage'>Software Engineer</h2>
      <h2 className='homepage'>Here, you will see my profile, the projects I have completed, access my Github repositories, view and download my resume, and connect with me via LinkedIn. </h2>
      <h3 className='note'>Note: All projects have both front-end and back-end Github repositories except "DT Market Place" & "Kick-at-moving-goal" that were built only on front-end.</h3> 
    </div>
  ) 
  
}

export default Home;
