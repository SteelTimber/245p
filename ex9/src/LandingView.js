import { MAIN_DATA } from "./data.js";
import Main from "./Main.js";
import Sidebar from "./Sidebar.js";
const LandingView = () => {
    return (
      <div>
      <Sidebar />
      <Main content={MAIN_DATA[0].content} />
    </div>
      );
}
 
export default LandingView;