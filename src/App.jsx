import { Star } from "./star";
import { star2 } from "./star2";
import "./App.css";

export default function App() {
  const hello = () => {
    console.log("Hi");
    return "hello Hi";
  };
  
  return (
    <div className="hello" style={{
      marginLeft: "10px",
      marginTop: "20px",
      margin: "0px 20px",
      border: "1px solid green"
    }}>
      <h1>Root component {hello()}</h1>
      <img src="/vite.svg" alt="" />
      {
        [1,2,3].map((i)=> <Star key={i} text={hello()}/>)
      }
    </div>
  );
}


export const Hello = () => {}

export const Hello1 = () => {}