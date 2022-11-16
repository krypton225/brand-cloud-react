const FormColumnList = ({ list = [] }) => {
    console.log(list);

    return (
        <ul className="footer__col__list">
            {
                list.map(({ id, itemText }) => (
                    <li className="footer__col__list__item" key={id}>
                        <a href="/" className='footer__col__list__item__link'>{itemText}</a>
                    </li>
                ))
            }
        </ul>
    )
}

export default FormColumnList;