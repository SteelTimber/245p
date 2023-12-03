import { MAIN_DATA } from "./data.js";
import Main from "./Main.js";
import Sidebar from "./Sidebar.js";
const LandingView = () => {
    return (
      <div>
      <Sidebar />
        <div className="main">
          {/* <img src="./images/dog.png" alt=""></img> */}
          <h2>Tesla Price Trends Analysis</h2>
          
          <img src="images/Price.png" alt="Price" class="image-max-size"></img>
          
        </div>
    </div>
      );
}
 
export default LandingView;