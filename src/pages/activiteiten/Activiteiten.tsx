import "./activiteiten.css"
import ArticleCard from "../../components/card-article/ArticleCard.tsx";

const Activiteiten = () => {
    return (
        <main className="container">
            <div className="container__div-activiteiten">
                <h1>Activiteiten in het Borchuus</h1>
                <ArticleCard
                    title="REPAIR CAFÉ"
                    text="Heeft u ook een elektrisch apparaat dat hapert? Of een broek met een kapotte zak? Maar u vindt weggooien zonde?
                    Kom dan naar het Repair Café Varsseveld! Elke laatste zaterdag van de maand zitten deskundigen voor u klaar om u te helpen met het repareren van allerhande spullen. Minder weggooien is beter voor het milieu en uw portemonnee."
                    link="http://www.repaircafevarsseveld.nl/"
                    linkText="Meer info vindt u op de website van het Repair Café"
                />
                <ArticleCard
                    title="RIJBEWIJSKEURING CBR"
                    text={<>Al ruim 20 jaar vindt in de Achterhoek een betaalbare rijbewijskeuring plaats.
                        De opbrengsten van de keuring komen ten goede aan een gezondheidsproject in Afrika.
                        Aanmelding keuring en/of digitale ondersteuning (bij voorkeur per mail):
                        Voor regio Oude IJsselstreek: <a href="mailto:rijbewijskeuringvarsseveld@gmail.com">rijbewijskeuringvarsseveld@gmail.com</a> of telefonisch: <strong>06 – 38 96 78 75</strong>.
                            <br/><br/>
                            Voor de afspraak bij de keuringsarts moet u meenemen:
                            - Papieren CBR: Brief met ZD code (s) t.b.v. digitaal insturen of het Keuringsverslag arts
                            - Ochtendurine indien u geen diabetes heeft of jaarlijkse bloedcheck bij de huisarts
                            - Rijbewijs
                            - Lijstje van eventueel gebruikte medicijnen
                            Check uw ziektekostenverzekering voor vergoeding, dan krijgt u een nota mee!!
                            <br/><br/>
                            Locatie van de keuring:
                            Het Borchuus, Kerkplein 3
                            7051 CW Varsseveld
                            <br/><br/>
                        Ontvangt u na de keuring nog vragen van het CBR, dan kunt u de keuringsarts rechtstreeks bereiken via: <a href="mailto:rbk@kpnmail.nl">rbk@kpnmail.nl</a> N.B.
                        Voor categorieën CDE beneden de 75 jaar kunt u alleen terecht bij een Arbodienst.
                    </>}
                    link=""
                    linkText=""
                />
            </div>
        </main>
    );
};

export default Activiteiten;