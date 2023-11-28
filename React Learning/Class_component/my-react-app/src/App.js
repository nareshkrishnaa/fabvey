import logo from "./logo.svg";
import "./App.css";
import Table from "./component/FunctionComponent";
import { List } from "./component/FunctionComponent";
import TableClassComponent from "./component/ClassComponent";
import { ListClassComponent } from "./component/ClassComponent";

function App() {
  let employeeData = [
    { name: "Mike", experience: 5, department: "HR", rating: 6.5 },
    { name: "Joe", experience: 6, department: "Sales", rating: 7 },
    { name: "George", experience: 10, department: "Production", rating: 9 },
  ];
  let arr = ["Item 1", "item 2", "item 3"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Table employeeData={employeeData} />
      <div>
        <List data={employeeData} />
      </div>

      <div id="list-in-class-component">
        <TableClassComponent data={employeeData} />
        <ListClassComponent data={employeeData} />
      </div>
    </div>
  );
}

export default App;
