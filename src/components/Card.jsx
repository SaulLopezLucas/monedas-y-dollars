import React from "react";

const Card = ({ title, description, tagline, icon, link}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <i className={`bi ${icon}`}></i>
      <p>
        <em>{tagline}</em>
      </p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="btn">Watch Video</button>
      </a>
    </div>
  );
};

export default Card;
