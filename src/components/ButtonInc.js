import React from "react";
import Cookies from "js-cookie";

const ButtonInc = ({ title, compteur, setcompteur, cb, healt, sethealt }) => {
  const numberInc = () => {
    setcompteur(compteur + cb);
    Cookies.set("cookie", parseInt(compteur + cb));
    sethealt(healt - cb);
  };

  return (
    <div>
      <button onClick={numberInc}> +{cb} </button>
    </div>
  );
};

export default ButtonInc;
