import React from 'react'

const MainButton = ({ text, url }) => {
    return (
        <>
            <a href={url} className='main-btn'>{text}</a>
        </>
    )
}

export default MainButton
