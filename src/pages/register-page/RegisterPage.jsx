import { Button } from "../../components/general/button/Button";
import { Input } from "../../components/general/input/Input";
import "./RegisterPage.css";

export const RegisterPage = () => {


  return (
    <div className="register-page-root">
      <h1>Register page</h1>
      <form>
        <div className="double-item-container">
          <Input type="text" name="firstName" title="First Name" onChange={(value)=>{console.log({value})}}/>
          <Input type="text" name="lastName" title="Last Name" onChange={(value)=>{console.log({value})}}/>
        </div>

        <div className="double-item-container">
          <Input type="text" name="track" title="Track" onChange={(value)=>{console.log({value})}}/>
          <Input type="text" name="userName" title="Username" onChange={(value)=>{console.log({value})}}/>
        </div>

        <div className="double-item-container">
          <Input type="email" name="email" title="Email" onChange={(value)=>{console.log({value})}}/>
          <Input type="tel" name="phoneNumber" title="Phone Number" onChange={(value)=>{console.log({value})}}/>
        </div>
        <Button title="Submit"/>
      </form>
    </div>
  )
}