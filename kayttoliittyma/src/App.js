import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tietoa from "./components/pages/Tietoa";
import LisaaUrheilija from "./components/LisaaUrheilija";
import MuokkaaUrheilijaa from "./components/MuokkaaUrheilijaa";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalState from "./context/GlobalState";
import Ylatunniste from "./components/Ylatunniste";
import Urheilijatiedot from "./components/Urheilijatiedot";
import "./components/components.css";

function App() {
  return (
    <GlobalState>
      <Router>
        <div className="App">
          <Ylatunniste versio="1.0" />
          <div className="container">
            <Routes>
              <Route path="/" element={<Urheilijatiedot />} />
              <Route path="/lisaa" element={<LisaaUrheilija />} />
              <Route path="/muokkaa/:id" element={<MuokkaaUrheilijaa />} />
              <Route path="/tietoa" element={<Tietoa />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
