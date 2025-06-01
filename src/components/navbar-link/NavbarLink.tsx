import "./navbar-link.css"
import {NavLink} from "react-router-dom";

interface NavbarLinkProps {
    path: string;
    text: string;
}

const NavbarLink = ({path, text} : NavbarLinkProps) => {
    return (
        <li>
            <NavLink to={path} className={({isActive}) => isActive ? "navbarlink-active" : "navbarlink-default"}>
                {text}
            </NavLink>
        </li>
    );
};

export default NavbarLink;