import React from "react";
import "../style/Bonus.css";

const Bonus = ({
  compteur,
  setcompteur,
  Name_Bonus,
  url_image,
  price_bonus,
}) => {
  let nb_Bonus = 0; //destroy
  let opacity = 0.2;

  if (compteur >= price_bonus) {
    opacity = 1;
  } else {
    console.log(compteur);
    console.log(price_bonus);
  }

  return (
    <div id = "all_bonus" style={{ opacity: opacity }}>
      <h1 className="bonus_name">
        <img src={url_image} alt="Icon Bonus 1" className="bonus_img" />
        {Name_Bonus}
      </h1>
      <h2> You have : {nb_Bonus}</h2>
      <h2> The price is {price_bonus}</h2>
    </div>
  );
};

export default Bonus;
