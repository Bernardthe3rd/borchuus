import "./verenigingen.css"
import ImgCard from "../../components/card-img/ImgCard.tsx";
import imgVerenigingOne from "../../assets/img-vvf.png"

const Verenigingen = () => {
    return (
        <main className="container">
            <div className="container__div-verenigingen">
                <h1>Verenigingen</h1>
                <p>Kijk op de website van de verenigingen die in het Borchuus samenkomen. <br/>
                    Zit uw logo en link er niet bij? Neem dan contact met ons op</p>

                <ul className="list__img-card">
                    <ImgCard
                        link="https://www.varsseveldsevolksfeesten.nl/"
                        img={imgVerenigingOne}
                        altText="logo vvf"
                    />
                    <ImgCard
                        link="https://www.varsseveldsevolksfeesten.nl/"
                        img={imgVerenigingOne}
                        altText="logo vvf"
                    />
                    <ImgCard
                        link="https://www.varsseveldsevolksfeesten.nl/"
                        img={imgVerenigingOne}
                        altText="logo vvf"
                    />
                    <ImgCard
                        link="https://www.varsseveldsevolksfeesten.nl/"
                        img={imgVerenigingOne}
                        altText="logo vvf"
                    />
                    <ImgCard
                        link="https://www.varsseveldsevolksfeesten.nl/"
                        img={imgVerenigingOne}
                        altText="logo vvf"
                    />
                    <ImgCard
                        link="https://www.varsseveldsevolksfeesten.nl/"
                        img={imgVerenigingOne}
                        altText="logo vvf"
                    />
                </ul>
            </div>
        </main>
    );
};

export default Verenigingen;