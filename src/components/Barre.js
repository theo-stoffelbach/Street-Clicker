import React from "react";
import "../style/Bar.css";
import Cookies from "js-cookie";

const Barre = (props) => {
  let sethealt = props.sethealt;
  let healt = props.healt;
  let maxHealt = props.maxHealt;
  let setMaxHealt = props.setMaxHealt;

  Cookies.set("healt", parseInt(healt));
  Cookies.set("maxHealt", parseInt(maxHealt));

  if (healt <= 0) {
    setMaxHealt(maxHealt * 1.5);
    sethealt(maxHealt * 1.5);
  }

  let pourcentage_life = String((healt / maxHealt) * 100);

  // document.getElementsByClassName("Filling")[0].style.width = pourcentage_life;

  return (
    <div>
      <div className="bar_container">
        <div className="center">
          <p>
            {healt} / {maxHealt}
          </p>
        </div>
        <div
          className="Filling"
          style={{ width: pourcentage_life + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default Barre;
