import React from "react";
import "./Modal.css";
import Button from "../button/Button";

const Modal = () => {
  return (
    <div className="ModalShow">
      
     <div className="mymodal">
        <div className="leftbox">
          <img
            src="https://mandihouse.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1711410434-Hummus.webp%3Fq%3D10&w=640&q=75"
            alt=""
          />
        </div>
        <div className="rightbox">
       <img className="ModalcloseBtn" src="./assets/images/close-svgr.svg" alt="" />
          <h3>Mutton Madbee</h3>
          <h3>Rs. 2430</h3>
          <p>
            Spicy charcoal grilled meat marinated in our special blend of zesty
            spices with topping of our renowned madbee sauce
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
