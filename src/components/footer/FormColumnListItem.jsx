const FormColumnListItem = ({ itemText }) => {
    return (
        <>
            <li className="footer__col__list__item">
                <a href="/" className='footer__col__list__item__link'>{itemText}</a>
            </li>
        </>
    )
}

export default FormColumnListItem;