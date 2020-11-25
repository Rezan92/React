import React from "react";
import "./assets/style/Guarantee.css";

const Guarantee = ({ services }) => {
  const { img, title, description , icon} = services;
console.log(services);
  return (
    <div className="services-content">
      <img src={img} alt={`${icon} icon`} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Guarantee;
