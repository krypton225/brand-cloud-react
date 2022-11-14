const Navbar = () => {
    return (
        <nav className="navbar" id="navbar">
            <div className="container">
                <div className="row">
                    <h1 className="navbar__logo">brand cloud</h1>

                    <ul className="navbar__list">
                        <li className="navbar__list__item">
                            <a href="/">home</a>
                        </li>

                        <li className="navbar__list__item">
                            <a href="/">about</a>
                        </li>

                        <li className="navbar__list__item">
                            <a href="/">support</a>
                        </li>

                        <li className="navbar__list__item">
                            <a href="/">platforms</a>
                        </li>

                        <li className="navbar__list__item">
                            <a href="/">pricing</a>
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