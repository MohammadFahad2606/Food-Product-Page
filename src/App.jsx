import Card from "./Components/card/Card";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modal/Modal";
import { data } from "./Utils/constant/data";
import { useState } from "react";


function App() {
  return (
    <>
      <Header />
      
      <div  className="cardWrapper">
      {
        data.map((item)=>{
          return(
            <Card  key={item.id} data= {item}  />
          )
        })
      }
      </div>
      
    </>
  );
}

export default App;
