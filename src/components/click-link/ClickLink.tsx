import "./click-link.css"
import {Link} from "react-router-dom";

interface ClickLinkProps {
    path: string;
    text: string;
}

const ClickLink = ({path, text} : ClickLinkProps) => {
    return (
        <Link to={path} className="click-link">
            {text}
        </Link>
    );
};

export default ClickLink;