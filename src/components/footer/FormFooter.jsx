import FormInput from "./FormInput";
import FormSubmit from "./FormSubmit";

const FormFooter = () => {
    return (
        <form className="footer__col__form" autoComplete='off'>
            <div className='footer__col__form__container'>
                <FormInput inputType="email" inputName="email" myPlaceHolder="enter your email" completeInType={false} />
                <FormSubmit valueText={"subscribe"} />
            </div>
        </form>
    )
}

export default FormFooter;