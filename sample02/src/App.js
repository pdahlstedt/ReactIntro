import "./App.css";
import { Welcome } from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Petter" />
        <Welcome name="Sabine" />
        <Welcome name="Gustav" />
        <Welcome name="Sofie" />
      </header>
    </div>
  );
}

export default App;
