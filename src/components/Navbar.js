import React from "react";
import Bonus from "./Bonus";
import "../style/navbar.css";

const Navbar = ({ compteur, setcompteur }) => {
  return (
    <div id="navbar_bonus">
      <Bonus
        id="bonus_1"
        compteur={compteur}
        setcompteur={setcompteur}
        Name_Bonus={"Bonus#0"}
        url_image="https://img.icons8.com/external-icongeek26-flat-icongeek26/128/external-scroll-war-icongeek26-flat-icongeek26.png"
        price_bonus={25}
      />
      <Bonus
        compteur={compteur}
        setcompteur={setcompteur}
        Name_Bonus={"Bonus#3"}
        url_image="https://img.icons8.com/external-icongeek26-flat-icongeek26/128/external-scroll-war-icongeek26-flat-icongeek26.png"
        price_bonus={5}
      />
    </div>
  );
};

export default Navbar;
