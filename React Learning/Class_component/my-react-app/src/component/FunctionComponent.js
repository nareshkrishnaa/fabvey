import React from "react";

function Table(props) {
  const employeeData = props.employeeData;

  // Now you can use the variable employeeData directly
  console.log(employeeData);
  let storeData = employeeData.map((e) => {
    return (
      <tr>
        <td>{e.name}</td>
        <td>{e.experience} years</td>
        <td>{e.department}</td>
        <td>{e.rating}/10</td>
      </tr>
    );
  });

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Experience</th>
        <th>Department</th>
        <th>Rating</th>
      </tr>
      {storeData}
    </table>
  );
}

function List(props) {
  const { data } = props;

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {data.map((employee, index) => (
          <li key={index}>
            <strong>Name:</strong> {employee.name}
            <ul>
              <li>
                <strong>Experience:</strong> {employee.experience}
              </li>
              <li>
                <strong>Department:</strong> {employee.department}
              </li>
              <li>
                <strong>Rating:</strong> {employee.rating}
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Table;
export { List };
