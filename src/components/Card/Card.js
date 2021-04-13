import React from "react";
import "./Card.css";

const Card = ({ title, description, students, comments, backgroundColor }) => {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      <div className={`card__values ${backgroundColor}`}>
        <p>{students} Students</p>
        <p>{comments} Coments</p>
      </div>
    </div>
  );
};

export default Card;
