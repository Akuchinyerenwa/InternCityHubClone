import { Button } from "../general/button/Button";
import "./Course.css";

export const Course = ({title, description}) => {


  return (
    <div className="course-root">
      <h3>{title}</h3>
      <p>{description}</p>
      <Button title="Apply" link={`#/register?name=${title.toLowerCase()}`}/>
    </div>
  )
}