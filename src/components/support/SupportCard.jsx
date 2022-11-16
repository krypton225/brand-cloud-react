import { BsCheck2 } from "react-icons/bs";

const SupportCard = ({ idCard, cardTitle, cardDesc, animationName }) => {
    return (
        <div className="platforms__cols__card" key={idCard} data-aos={animationName}>
            <h4 className="platforms__cols__card__title">
                <BsCheck2 className="platforms__cols__card__title__icon" />
                <span className="platforms__cols__card__title__txt">{cardTitle}</span>
            </h4>

            <p className="platforms__cols__card__desc">{cardDesc}</p>
        </div>
    )
}

export default SupportCard;