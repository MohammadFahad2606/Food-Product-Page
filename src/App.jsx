import Card from "./Components/card/Card";
import Header from "./Components/Header/Header";

import { Fooddata } from "./Utils/constant/data";

function App() {
  return (
    <>
      <Header />

      <div className="cardWrapper">
        {Fooddata.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
    </>
  );
}

export default App;
