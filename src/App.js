import React from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Register2 from './components/Resister2'

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <h1>Go Save More</h1>
      <Register />
      <div>
        <Register2 />
        </div>
    </div>
  );
}

export default App;
