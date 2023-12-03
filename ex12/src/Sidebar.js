import "./Sidebar.css";
import { Link } from "react-router-dom";


function Sidebar() {
  return (
    <>
      <div className="sidenav">
        <Link to="/">Tesla Car Price</Link>
        <Link to="exampledataview">Gas Price</Link>
      </div>
    </>
  );
}

export default Sidebar;