import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import Dashboard from "./page/admin/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}

export default App;
