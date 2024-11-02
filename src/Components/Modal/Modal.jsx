import React, { useState } from "react";
import "./Modal.css";
import Button from "../button/Button";

const Modal = ({ setmodal, modalData }) => {
  const { tittle, Price, disription, category, images } = modalData;
  const [filter, setfiler] = useState(images[0].img);
  const filterImg = (id) => {
    const filted = images.find((item) => {
      return item.id == id;
    });
    setfiler(filted.img);
  };
  return (
    <div className="ModalShow">
      <div className="mymodal">
        <div className="leftbox">
          <img src={filter} alt="" />
        </div>
        <div className="rightbox">
          <img
            onClick={() => setmodal(false)}
            className="ModalcloseBtn"
            src="./assets/images/close-svgr.svg"
            alt=""
          />
          <h3>{tittle}</h3>
          <h5>{category}</h5>
          <h3>Rs. {Price}</h3>
          <p>{disription}</p>
          {images.length != 1 && (
            <div className="imgrow">
              {images.map((item) => {
                return (
                  <div
                    className="modal-imges"
                    onClick={() => filterImg(item.id)}
                    key={item.id}
                  >
                    <img src={item.img} alt="" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
