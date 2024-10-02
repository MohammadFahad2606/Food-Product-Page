import React from "react";
import "./Modal.css";
import Button from "../button/Button";

const Modal = ({ setmodal, modalData }) => {
  const { tittle, Price, disription, img } = modalData;
  return (
    <div className="ModalShow">
      <div className="mymodal">
        <div className="leftbox">
          <img src={img} alt="" />
        </div>
        <div className="rightbox">
          <img
            onClick={() => setmodal(false)}
            className="ModalcloseBtn"
            src="./assets/images/close-svgr.svg"
            alt=""
          />
          <h3>{tittle}</h3>
          <h3>Rs. {Price}</h3>
          <p>{disription}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
