import FormColumnListItem from "./FormColumnListItem";

const FormColumnList = ({ list = [] }) => {
    return (
        <ul className="footer__col__list">
            {
                list.map(({ id, itemText }) => (
                    <FormColumnListItem itemText={itemText} key={id} />
                ))
            }
        </ul>
    )
}

export default FormColumnList;