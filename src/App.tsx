import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Activiteiten from "./pages/Activiteiten.tsx";
import Ruimtes from "./pages/Ruimtes.tsx";
import Verenigingen from "./pages/Verenigingen.tsx";
import Bedrijven from "./pages/Bedrijven.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

function App() {


  return (
    <>
      <nav className="container">
        <ul className="nav__big">
            <li>Home</li>
            <li>Ruimtes</li>
            <li>Activiteiten</li>
            <li>Verenigingen</li>
            <li>Borchuus voor bedrijven</li>
            <li>Contact</li>
        </ul>
      </nav>
      <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/ruimtes"} element={<Ruimtes/>}/>
          <Route path={"/activiteiten"} element={<Activiteiten/>}/>
          <Route path={"/verenigingen"} element={<Verenigingen/>}/>
          <Route path={"/bedrijven"} element={<Bedrijven/>}/>
          <Route path={"/contact"} element={<Contact/>}/>
          <Route path={"*"} element={<NotFound />}/>
      </Routes>

      <footer className="container">
          <div className="footer">
              <p>© 2024 Kulturhus Borchuus Varsseveld - Alle rechten voorbehouden - Disclaimer - Privacy verklaring - webdesign: Web & Print</p>
          </div>
      </footer>
    </>
  )
}

export default App
