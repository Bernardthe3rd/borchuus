import "./article-card.css"
import type {ReactNode} from "react";

interface ArticleCardProps {
    title: string;
    text: string | ReactNode;
    link: string;
    linkText: string;
}

const ArticleCard = ({title, text, link, linkText} : ArticleCardProps) => {
    return (
        <article className="article-card">
            <h3>{title}</h3>
            <p>{text}</p>
            <a href={link} target="_blank">{linkText}</a>
        </article>
    );
};

export default ArticleCard;