import React, { useState } from "react";
import ButtonInc from "./ButtonInc";
import Barre from "./Barre";
import Cookies from "js-cookie";
import Navbar from "./Navbar";

const TodoList = () => {
  const [compteur, setcompteur] = useState(
    parseInt(Cookies.get("cookie")) || 0
  );
  const [vie, setvie] = useState(parseInt(Cookies.get("healt")) || 125);
  const [maxVie, setMaxVie] = useState(
    parseInt(Cookies.get("maxHealt")) || 125
  );

  return (
    <div>
      <Navbar compteur={compteur} setcompteur={setcompteur} />
      <div className="Main">
        <h1>My clicker</h1>

        <Barre
          healt={vie}
          sethealt={setvie}
          maxHealt={maxVie}
          setMaxHealt={setMaxVie}
        />
        <h1>{compteur}</h1>
        <ButtonInc
          title={compteur}
          compteur={compteur}
          setcompteur={setcompteur}
          cb={30}
          healt={vie}
          sethealt={setvie}
        />
      </div>
    </div>
  );
};

export default TodoList;
