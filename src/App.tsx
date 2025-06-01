import './App.css'
import bannerHome from "./assets/nw_banner_borchuus.jpg"
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";

function App() {


  return (
    <>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"*"} element={"<NotFound />"}/>
        </Routes>

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

      <span className="img-wrapper">
        <img src={bannerHome} alt="banner borchuus"/>
      </span>

      <article className="container">
        <div>

        </div>
        <div>
          <h1>WELKOM BIJ HET BORCHUUS</h1>
          <p>
            Het Borchuus ligt midden in het mooie dorp Varsseveld, uitstekend gelegen aan de A18 / N18 en beschikt over ruime parkeergelegenheid in de buurt.
            <br/><br/>
            Als Achterhoeks Kulturhus werken wij aan een gastvrije en gemoedelijke uitstraling. Elke week ontvangen wij 600 tot 700 verschillende bezoekers en het worden er steeds meer: verenigingen, koren, muzikanten en bedrijven die hun vergaderingen, scholingen en andere bijeenkomsten in het Borchuus organiseren.
            <br/><br/>
            Het gebouw is hiervoor uitstekend geschikt omdat er veel zalen zijn die afzonderlijk en in combinatie gebruikt kunnen worden. Voor het leveren van een passende ondersteuning is alles aanwezig: van audiovisuele apparatuur tot en met een professionele keuken.
            <br/><br/>
            Het Borchuus is dé ontmoetingsplek van Varsseveld!
            <br/><br/>
            Voor activiteiten: <a href="https://borchuus.eventgoose.com/" target="_blank">KAARTEN TE KOOP DOOR HIER TE KLIKKEN</a>
          </p>
        </div>
      </article>

      <article className="container">
        <h1>MET ELKAAR, VOOR ELKAAR</h1>
      </article>

      <footer className="container">
        <p>© 2024 Kulturhus Borchuus Varsseveld - Alle rechten voorbehouden - Disclaimer - Privacy verklaring - webdesign: Web & Print</p>
      </footer>
    </>
  )
}

export default App
