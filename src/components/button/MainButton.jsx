import { Link } from 'react-router-dom'

const MainButton = ({ text, url }) => {
    return (
        <>
            <Link to={url} className='main-btn'>{text}</Link>
        </>
    )
}

export default MainButton;