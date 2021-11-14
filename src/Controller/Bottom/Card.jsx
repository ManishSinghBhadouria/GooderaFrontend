import React from "react";
import styles from "./Bottom.module.css";

const Card = ({ el }) => {
  return (
    <div className={styles.cardDiv}>
      <div>
        <img src={el.image} alt={el.title} />
      </div>
      <div>
        <h2>{el.title}</h2>
        <p>{el.description}</p>
        <button>View Details</button>
      </div>
    </div>
  );
};

export default Card;
