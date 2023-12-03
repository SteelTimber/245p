import { MAIN_DATA } from "./data.js";
import Main from "./Main.js";

function AboutView() {
  return (
    <div>
      <Main content={MAIN_DATA[3].content} />
    </div>
  );
}

export default AboutView;