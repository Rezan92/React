import "./assets/style/App.css";
import React from "react";
import services from "./services";
import HoppyList from "./HobbyList";
import Guarantee from "./Guarantee";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <HoppyList />
      <div className="services-container">
        {services.map((service, index) => {
          return <Guarantee key={index} services={service} />;
        })}
      </div>
      <Counter />
    </div>
  );
}

export default App;
