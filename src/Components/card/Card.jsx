import React from "react";
import "./card.css";
import Button from "../button/Button";
const Card = (data) => {
 const {tittle,Price,disription,img} =data.data
  return (
    <div className="Card">
      <img
        src={img}
        alt=""
      />
      <h4>{tittle}</h4>
      <div className="disPara">
      <p>
        {disription}
      </p>
      </div>
      <span>Rs. {Price}</span>
      <Button text = "Add to Cart" />
    </div>
  );
};

export default Card;
