import React, { useState } from "react";
import "../style/Bonus.css";

const Bonus = ({
  compteur,
  setcompteur,
  Name_Bonus,
  url_image,
  price_bonus,
}) => {
  const [nb_bonus, set_nb_bonus] = useState(0)
  let opacity = 0.2;

  if (compteur >= price_bonus) {
    opacity = 1;
  } else {
    console.log(compteur);
    console.log(price_bonus);
  }
  function bonusAdd(counter, price, nb_bonus) {
    if (counter >= price) {
      console.log(nb_bonus) //
      set_nb_bonus(nb_bonus + 1)
      setcompteur( compteur - price)
    } else {
      alert("No enought");
    }
  }
  return (
    <div id = "all_bonus" style={{ opacity: opacity }}>
      <h1 className="bonus_name">
        <img 
        onClick={() => bonusAdd(compteur, price_bonus, nb_bonus)} 
        src={url_image} 
        alt="Icon Bonus 1" 
        className="bonus_img"
        />
        {Name_Bonus}
      </h1>
      <h2> You have : {nb_bonus}</h2>
      <h2> The price is {price_bonus}</h2>
    </div>
  );
};

export default Bonus;
