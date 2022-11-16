const FooterColumnTitle = ({ text, isUpper }) => {
    return (
        <h5 className={`footer__col__title${isUpper ? "-upper" : ""}`}>{text}</h5>
    )
}

export default FooterColumnTitle;