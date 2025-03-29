import { Course } from "../../components/course/Course";
import "./HomePage.css";


export const HomePage = () => {

  return(
    <div className="home-page-root">
      <Course title="Front-End" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis autem veniam nemo dolorum, vitae, deserunt repellendus ipsam sed veritatis odit aliquam ut pariatur tempora asperiores quaerat nobis aspernatur commodi. Fuga." />

      <Course title="Back-End" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis autem veniam nemo dolorum, vitae, deserunt repellendus ipsam sed veritatis odit aliquam ut pariatur tempora asperiores quaerat nobis aspernatur commodi. Fuga." />

      <Course title="Design" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis autem veniam nemo dolorum, vitae, deserunt repellendus ipsam sed veritatis odit aliquam ut pariatur tempora asperiores quaerat nobis aspernatur commodi. Fuga." />
    </div>
  )
}