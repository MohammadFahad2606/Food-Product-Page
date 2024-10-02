import React, { useState } from "react";
import "./card.css";
import Button from "../button/Button";
import Modal from "../Modal/Modal";
import { Fooddata } from "../../Utils/constant/data";
const Card = (data) => {
  const { tittle, Price, disription, img, id } = data.data;
  const [modal, setmodal] = useState(false);

  const mymodal = () => {
    setmodal(true);
  };
  const filterdata = Fooddata.find((item) => {
    return item.id == id;
  });
  return (
    <>
      {modal && <Modal modalData={filterdata} setmodal={setmodal} />}
      <div onClick={mymodal} className="Card">
        <img src={img} alt="" />
        <h4>{tittle}</h4>
        {/* <h4>{key}</h4> */}
        <div className="disPara">
          <p>{disription}</p>
          {/* <p>{id}</p> */}
        </div>
        <span>Rs. {Price}</span>
        <Button text="Add to Cart" />
      </div>
    </>
  );
};

export default Card;
