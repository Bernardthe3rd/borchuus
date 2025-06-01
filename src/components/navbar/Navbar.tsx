import './navbar.css';
import NavbarLink from "../navbar-link/NavbarLink.tsx";

const Navbar = () => {

    return (
        <nav className="container">
            <ul className="nav__big">
                <NavbarLink path={"/"} text="Home"/>
                <NavbarLink path={"/ruimtes"} text="Ruimtes"/>
                <NavbarLink path={"/activiteiten"} text="Activiteiten"/>
                <NavbarLink path={"/verenigingen"} text="Verenigingen"/>
                <NavbarLink path={"/bedrijven"} text="Borchuus voor bedrijven"/>
                <NavbarLink path={"/contact"} text="Contact"/>
            </ul>
        </nav>
    );
};

export default Navbar;