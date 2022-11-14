import { useState } from "react";

import { Link } from "react-router-dom";

import Logo from "../logo/Logo";

import NavbarDataItems from "../../data/NavbarDataItems";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    const handleClickListItem = () => setToggle(false);

    return (
        <nav className="navbar" id="navbar">
            <div className="container">
                <div className="row">
                    <Logo nameOfClass="navbar" logoText="brand cloud" />

                    <ul className={`navbar__list ${toggle ? "active" : ""}`}>
                        {
                            NavbarDataItems.map(({ id, linkText, url }) => (
                                <li key={id} className="navbar__list__item">
                                    <Link to={url} className="navbar__list__item__link" onClick={handleClickListItem}>{linkText}</Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className={`navbar__toggler ${toggle ? "active" : ""}`} onClick={handleToggle}>
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