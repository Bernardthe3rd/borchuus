import bannerHome from "../../assets/nw_banner_borchuus.jpg";
import "./Home.css";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <main className="container">
            <span className="img-wrapper">
                <img src={bannerHome} alt="banner borchuus"/>
            </span>

            <article className="container__article-top">
                <div className="article__div-top">
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
                <div className="article__div-bottom">
                    <h3>Wilt u meer weten over onze mogelijkheden?</h3>
                    <p>Kijk dan op onze <Link to="/contact">contact</Link> pagina voor onze gegevens!</p>
                </div>
            </article>

            <article className="container__article-bottom">
                <h1>"MET ELKAAR, VOOR ELKAAR"</h1>
            </article>
        </main>
    );
};

export default Home;