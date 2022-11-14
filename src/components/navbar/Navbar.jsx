import { Link } from "react-router-dom";
import NavbarDataItems from "../../data/NavbarDataItems";

const Navbar = () => {
    return (
        <nav className="navbar" id="navbar">
            <div className="container">
                <div className="row">
                    <h1 className="navbar__logo">
                        <Link to="/" className="navbar__logo__link">brand cloud</Link>
                    </h1>

                    <ul className="navbar__list">
                        {
                            NavbarDataItems.map(({ id, linkText, url }) => (
                                <li key={id} className="navbar__list__item">
                                    <Link to={url} className="navbar__list__item__link">{linkText}</Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="navbar__toggler">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;