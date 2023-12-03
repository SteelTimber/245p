import React from 'react';
import LoginForm from './LoginForm';  

function App() {
  const handleSubmit = (data) => {
    console.log("Form Submitted:", JSON.stringify(data, null, 2));
  };

  return (
    <div className="App">
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
