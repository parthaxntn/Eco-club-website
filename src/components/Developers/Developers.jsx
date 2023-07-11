import { useState } from "react";
import DevelopingCalling from "./DevelopingCalling.jsx";
import "./Developers.css";
import Eighteene from "./Eighteene.js";

const Developers = () => {
  const year = ["2018-2019"];
  const [active, setActive] = useState(year[0]);

  return (
    <div className="developers-container">
      <h3 className="title">Developers</h3>
      <div className="activeYear">
        {year.map((item) => (
          <div
            key={item}
            onClick={() => setActive(item)}
            className={`${active === item && "active"}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="dev-list">
        {active === year[0] &&
          Eighteene.map((data, key) => <DevelopingCalling data={data} key={key} />)}
      </div>
    </div>
  );
};

export default Developers;
