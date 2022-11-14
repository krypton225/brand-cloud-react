const Navbar = () => {
    return (
        <nav className="navbar" id="navbar">
            <div className="container">
                <div className="row">
                    <h1 className="navbar__logo">
                        <a href="/" className="navbar__logo__link">brand cloud</a>
                    </h1>

                    <ul className="navbar__list">
                        <li className="navbar__list__item">
                            <a href="/" className="navbar__list__item__link">home</a>
                        </li>

                        <li className="navbar__list__item">
                            <a href="/" className="navbar__list__item__link">about</a>
                        </li>

                        <li className="navbar__list__item">
                            <a href="/" className="navbar__list__item__link">support</a>
                        </li>

                        <li className="navbar__list__item">
                            <a href="/" className="navbar__list__item__link">platforms</a>
                        </li>

                        <li className="navbar__list__item">
                            <a href="/" className="navbar__list__item__link">pricing</a>
                        </li>
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