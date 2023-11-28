import React from "react";

function Table(props) {
  console.log("=======props=======");
  console.log(props);

  let { tableData } = props;

  // const storeUserData = userData.map((e) => {
  //   return (
  //     <tr>
  //       <td>{e.name}</td>
  //       <td>{e.department}</td>
  //       <td>{e.experience} yrs</td>
  //       <td>{e.rating}/10</td>
  //     </tr>
  //   );
  // });

  const storeData = tableData.map((e) => {
    console.log("--check--");
    console.log(e);
    return (
      <tr>
        <td>{e.name}</td>
        <td>{e.department}</td>
        <td>{e.experience} yrs</td>
        <td>{e.rating}/10</td>{" "}
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Experience</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{storeData}</tbody>
      </table>
    </div>
  );
}

export default Table;
