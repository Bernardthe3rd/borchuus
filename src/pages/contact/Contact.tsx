import "./contact.css"
import ArticleCard from "../../components/card-article/ArticleCard.tsx";

const Contact = () => {
    return (
        <main className="container">
            <div className="container__div-contact">
                <h1>Contact</h1>
                <ArticleCard
                    title="TEAM BORCHUUS"
                    text={<>Voor zaalverhuur, reserveringen, een arrangement op maat of andere informatie kunt u terecht bij TEAM Borchuus. <br/>
                        A: Kerkplein 3, 7051 CX Varsseveld <br/>
                        T: 06 57 56 86 57 <br/>
                        E: <a href="team@borchuus.nl">team@borchuus.nl</a> <br/>
                        KVK: 09191325
                    </>}
                    link="mailto:team@borchuus.nl"
                    linkText="link voor email Team Borchuus"
                />
                <ArticleCard
                    title="BURO BORCHUUS"
                    text={<>Voor financiële en administratieve zaken kunt u contact opnemen met de administratie. <br/>
                        A: Borchgraven 5, 7051 CW Varsseveld <br/>
                        T: 0315 - 24 88 91 <br/>
                        E: <a href="administratie@borchuus.nl">administratie@borchuus.nl</a> <br/>
                        KVK: 09191325
                    </>}
                    link="mailto:administratie@borchuus.nl"
                    linkText="link voor email Buro Borchuus"
                />
                <ArticleCard
                    title="SECRETARIAAT BORCHUUS"
                    text={<>Voor bestuurszaken en vragen aan het secretariaat kunt op contact opnemen met de secretaris van het bestuur. <br/>
                        E: <a href="secretariaat@borchuus.nl">secretariaat@borchuus.nl</a> <br/>
                        St Borchuus beheer - KVK 09213515 - Rabobank 1466.82.750 <br/>
                        St Borchuus Kulturhus - KVK 09191325 - Rabobank NL91RABO0117043176
                    </>}
                    link="mailto:secretariaat@borchuus.nl"
                    linkText="link voor email Secretariaat Borchuus"
                />
            </div>

        </main>
    );
};

export default Contact;