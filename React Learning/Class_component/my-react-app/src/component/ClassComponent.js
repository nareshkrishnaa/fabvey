import React from "react";

class TableClassComponent extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h2>Employee Table using Class components</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Experience</th>
              <th>Department</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.experience}</td>
                <td>{employee.department}</td>
                <td>{employee.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class ListClassComponent extends React.Component {
  render() {
    const { data } = this.props;

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
}

export default TableClassComponent;
export { ListClassComponent };
