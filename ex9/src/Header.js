import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="header">
        <a href="#default" className="logo">
          CompanyLogo
        </a>
        <div className="headerRight">
          <a className="active" href="#home"><Link to="/">Home</Link></a>
          <a href="#contact"><Link to="ContactView">Contact</Link></a>
          <a href="#about"><Link to="AboutView">About</Link></a>
        </div>
      </div>
    </>
  );
}

export default Header;


  