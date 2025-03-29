import { Input } from "../../components/general/input/Input";
import "./RegisterPage.css";

export const RegisterPage = () => {


  return (
    <div className="register-page-root">
      <h3>Register page</h3>
      <form>
        <Input type="text" name="firstName" title="First Name" onChange={(value)=>{console.log({value})}}/>
      </form>
    </div>
  )
}