import { Link } from "react-router-dom";

const Logo = ({ nameOfClass, logoText }) => {
    return (
        <>
            <h1 className="navbar__logo">
                <Link to="/" className={`${nameOfClass}__logo__link`}>{logoText}</Link>
            </h1>
        </>
    )
}

export default Logo
