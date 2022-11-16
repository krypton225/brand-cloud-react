import React from 'react'

const FormInput = ({ inputType, inputName, myPlaceHolder, completeInType }) => {
    return (
        <input type={inputType} name={inputName} className="footer__col__form__container__email"
            placeholder={myPlaceHolder} autoComplete={`${completeInType ? "" : "new-password"}`} />
    )
}

export default FormInput;