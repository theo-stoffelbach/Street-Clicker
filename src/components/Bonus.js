import React from "react";

const Bonus = ({ Name_Bonus, nb_Name_Bonus }) => {
  return (
    <div>
      <h1>{Name_Bonus}</h1>
      <h2> You have : {nb_Name_Bonus}</h2>
    </div>
  );
};

export default Bonus;
