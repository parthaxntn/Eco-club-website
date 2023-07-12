import { useState } from "react";
import DevelopingCalling from "./DevelopingCalling.jsx";
import "./Developers.css";
import Eighteene from "./Eighteene.js";

const Developers = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="developers-container">
      <h3 className="title">Developers</h3>
      <div className="dev-list">
        {Eighteene.map((data, key) => (
          <DevelopingCalling data={data} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Developers;