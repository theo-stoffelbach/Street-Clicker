import React from "react";
import Bonus from "./Bonus";

const Shop = ({ compteur, setcompteur }) => {
  return (
    <div>
      <Bonus
        compteur={compteur}
        setcompteur={setcompteur}
        Name_Bonus={"Bonus#1"}
        url_image="https://tse1.mm.bing.net/th?id=OIP.E1UZGzo1xa45eBZC0aby3wHaHa&pid=Api"
        price_bonus={20}
      />
    </div>
  );
};

export default Shop;
