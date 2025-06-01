import "./img-card.css"

interface ImgCardProps {
    link: string;
    img: string;
    altText: string;
}

const ImgCard = ({link, img, altText} : ImgCardProps) => {
    return (
        <li className="img-card">
            <a href={link} target="_blank">
                <img src={img} alt={altText}/>
            </a>
        </li>
);
};

export default ImgCard;