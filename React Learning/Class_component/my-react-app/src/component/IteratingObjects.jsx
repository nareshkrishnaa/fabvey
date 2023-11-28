import React from "react";

function IteratingObjects() {
  const employee = [
    {
      name: "Alex",
      skills: [
        { name: "ReactJS", type: "Frontend" },
        { name: "nodeJS", type: "Backend" },
      ],
    },
    {
      name: "Anna",
      skills: [
        { name: "Angular", type: "Frontend" },
        { name: "Python", type: "Backend" },
      ],
    },
  ];

  employee.map((e) => {
    let arrOfKey = Object.keys(e);
  });
  return <div></div>;
}
export default IteratingObjects;
