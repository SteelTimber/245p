import "./Sidebar.css";
import { Link } from "react-router-dom";


function Sidebar() {
  return (
    <>
      <div className="sidenav">
        <Link to="/">San Joaquin Hills</Link>
        <Link to="exampledataview">Los Serranos</Link>
      </div>
    </>
  );
}

export default Sidebar;