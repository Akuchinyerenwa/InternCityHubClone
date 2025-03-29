import { Button } from "../general/button/Button";
import "./Header.css";
import { Logo } from "./logo/Logo";
import { Nav } from "./nav/Nav";

export const Header = () => {


  return (
    <div className="header-root">
      <Logo />
      <div className="header-links">
        <Nav />
        <Button title="Apply Now"/>
      </div>
    </div>
  )
}