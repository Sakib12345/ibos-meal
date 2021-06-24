import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MealTab from "./components/Home/Tab";
import { Navbar } from "react-bootstrap";
import Axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;
function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <Navbar bg="light">
        <Navbar.Brand href="#home">
          <img
            src="https://ibos.io/static/media/logo.04264bc9.svg"
            width="400"
            height="50"
            className="d-inline-block align-top"
            alt="iBos logo"
          />
        </Navbar.Brand>
      </Navbar>
      <div className="container">
        <MealTab />
      </div>
    </div>
  );
}

export default App;
