import React from "react";
import Card from "./Card";

const Bottom = ({ data1 }) => {
  console.log(data1, "kkkkkkk");
  return (
    <div>
      {data1.map((el) => {
        return <Card el={el} />;
      })}
    </div>
  );
};

export default Bottom;
