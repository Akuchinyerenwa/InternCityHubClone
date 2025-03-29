import { useSearchParams } from "react-router";
import { Button } from "../../components/general/button/Button";
import { Input } from "../../components/general/input/Input";
import "./RegisterPage.css";

export const RegisterPage = () => {

  const [searchParams] = useSearchParams();

  return (
    <div className="register-page-root">
      <h1>Register page</h1>
      <form>
        <div className="double-item-container">
          <Input type="text" name="firstName" title="First Name" onChange={(value)=>{}}/>
          <Input type="text" name="lastName" title="Last Name" onChange={(value)=>{}}/>
        </div>

        <div className="double-item-container">
          <Input type="text" defaultValue={searchParams.get("name")} name="track" title="Track" onChange={(value)=>{}}/>
          <Input type="text" name="userName" title="Username" onChange={(value)=>{}}/>
        </div>

        <div className="double-item-container">
          <Input type="email" name="email" title="Email" onChange={(value)=>{}}/>
          <Input type="tel" name="phoneNumber" title="Phone Number" onChange={(value)=>{}}/>
        </div>
        <Button title="Submit"/>
      </form>
    </div>
  )
}