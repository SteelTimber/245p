import { MAIN_DATA } from "./data.js";
import Main from "./Main.js";
import LoginForm from './LoginForm';  

function ContactView() {
  const handleSubmit = (data) => {
    console.log("Form Submitted:", JSON.stringify(data, null, 2));
  };

  return (
    <div className="App">
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default ContactView;