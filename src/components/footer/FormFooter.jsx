import FormInput from "./FormInput";

const FormFooter = () => {
    return (
        <form className="footer__col__form" autoComplete='off'>
            <div className='footer__col__form__container'>
                <FormInput inputType="email" inputName="email" myPlaceHolder="enter your email" completeInType={false} />
                <input type="submit" className='footer__col__form__container__submit' value="subscribe" />
            </div>
        </form>
    )
}

export default FormFooter;