import FormColumnListItem from "./FormColumnListItem";

const FormColumnList = ({ list }) => {
    let listed = Array.from(list);

    return (
        <ul className="footer__col__list">
            {
                listed.map(({ id, itemText }) => (
                    <FormColumnListItem itemText={itemText} key={id} />
                ))
            }
        </ul>
    )
}

export default FormColumnList;