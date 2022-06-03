import React, { useState } from "react";
import ButtonInc from "./ButtonInc";
import Barre from "./Barre";
import Shop from "./Shop";
import Cookies from "js-cookie";

const TodoList = () => {
  const [compteur, setcompteur] = useState(
    parseInt(Cookies.get("cookie")) || 0
  );
  const [vie, setvie] = useState(parseInt(Cookies.get("healt")) || 125);
  const [maxVie, setMaxVie] = useState(
    parseInt(Cookies.get("maxHealt")) || 125
  );

  console.log(" Je suis " + maxVie);

  console.log(Cookies.get("cookie"));

  return (
    <div className="Main">
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

      <Shop compteur={compteur} setcompteur={setcompteur} />
    </div>
  );
};

export default TodoList;
