import React from 'react';

const Card = ({title, description, tagline}) => {
    return (
      <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          <em>{tagline}</em>
        </p>
      </div>
    );
};
export default Card;