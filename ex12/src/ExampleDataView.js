import { MAIN_DATA } from "./data.js";
import Main from "./Main.js";
import Sidebar from "./Sidebar.js";

function ExampleDataView() {
  return (
    <div>
      <Sidebar />
      <Main content={MAIN_DATA[1].content} />
    </div>
  );
}

export default ExampleDataView;