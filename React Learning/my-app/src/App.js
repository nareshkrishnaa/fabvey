import logo from "./logo.svg";
import "./App.css";
import { Greet, Car, Garage } from "./Greet";
import Table from "./component/Table";

function App() {
  let tableData = [
    {
      name: "Joe",
      department: "HR",
      experience: 4,
      rating: 5.5,
    },
    {
      name: "George",
      department: "Sales",
      experience: 20,
      rating: 7.2,
    },
    {
      name: "Abraham",
      department: "Security",
      experience: 8,
      rating: 8.3,
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Para tag</p>
        <Greet />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <p>Importing Car class</p>
      <Car model="Mustang" />

      <p>-------------------------------</p>
      <p>Component inside a component</p>
      <p>-------------------------------</p>

      <Garage />
      <Table tableData={tableData} />
    </div>
  );
}

export default App;
