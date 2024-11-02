import { useEffect, useState } from "react";
import Card from "./Components/card/Card";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";

import { Fooddata, banerImag } from "./Utils/constant/data";
import Button from "./Components/button/Button";

function App() {
  const [data, setdata] = useState(Fooddata);
  const [categorys, setcategorys] = useState([]);
  const [filterdata, setfilterdata] = useState(data);
  const catageis = () => {
    const cat = [...new Set(Fooddata.map((item) => item.category))];
    setcategorys(cat);
  };
  const categorysOpt = (cat) => {
    console.log(cat);
    if (cat == "") {
      setfilterdata(data);
      console.log(filterdata);
    } else {
      const filtered = Fooddata.filter((item) => {
        return item.category == cat;
      });
    }
  };

  useEffect(() => {
    catageis();
    setdata(Fooddata);
    categorysOpt();
  }, []);

  return (
    <>
      <Header />
      <div className="searhbar">
        <div className="searh">
          <input type="text" placeholder="Search for item by title..." />
          <select onChange={(e) => categorysOpt(e.target.value)}>
            <option value="all">All</option>
            {categorys.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <Button text={"searh"} />
        </div>
      </div>
      <Banner src={banerImag.Hot} />
      <div className="cardWrapper">
        {data.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
    </>
  );
}

export default App;
