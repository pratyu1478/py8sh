import Nav from "./Nav";
import Container from "./Container";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>My Cloud</h1>
        <div className="flex">
          <Nav />
        </div>
      </div>
    </BrowserRouter>
  );
}
