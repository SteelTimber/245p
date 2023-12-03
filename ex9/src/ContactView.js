import { MAIN_DATA } from "./data.js";
import Main from "./Main.js";

function ContactView() {
  return (
    <div>
      <Main content={MAIN_DATA[2].content} />
    </div>
  );
}

export default ContactView;