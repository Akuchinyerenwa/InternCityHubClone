import { Course } from "../../components/course/Course";
import "./HomePage.css";



const COURSES = [
  {title: "NoCode (WordPress)", 
    description: "Master website creation and management with WordPress, building functional and visually appealing sites without needing to code."
  },
  {title: "Frontend Development", description: "Utilize JavaScript, ReactJS, NextJS, Angular, and Vue.js to build responsive and interactive user interfaces."},
  {title: "Backend Development", description: "Develop robust server-side applications with Python, Node.js, PHP, and Go, building the backbone of modern web platforms."},
  {title: "Product Design - UX/UI", description: "Using Figma, Framer, and Webflow, dive into UX/UI design to create intuitive and engaging digital experiences."},
  {title: "Product Management", description: "Understand Agile methodologies and tools like Excel, Asana, Jira, and Trello to efficiently manage product development lifecycles."},
  {title: "Virtual Assistance", description: "Enhance productivity with Google Workspace, Trello, and AI tools, mastering remote administrative and support skills."},
  {title: "Data Analysis", description: "Analyze data using Excel, SQL, Python, and Tableau to uncover insights and make data-driven decisions."},
  {title: "Digital Marketing & Copywriting", description: "Gain expertise in social media and digital platforms, including Facebook, TikTok, Google, LinkedIn, and Instagram, to drive engagement and craft compelling copy."},
  {title: "Project Management", description: "Coordinate projects and resources using Trello, Excel, Asana, and Jira, mastering key project management techniques."},
]


export const HomePage = () => {

  return(
    <div className="home-page-root">
      <h1>Turning Skills Into Experience, Dreams Into Career!</h1>
      <div className="courses">
        {
          COURSES.map((course)=> <Course key={course.title}  {...course}/>)
        }
      </div>
    </div>
  )
}