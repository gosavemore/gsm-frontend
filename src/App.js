import React from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <h1>Go Save More</h1>
      <div>
        <Login />
        <Register />
      </div>
    </div>
  );
}

export default App;
