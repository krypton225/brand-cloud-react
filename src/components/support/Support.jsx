import { Link } from "react-router-dom";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { AiOutlineArrowRight } from "react-icons/ai";

import SupportCardData from "../../data/SupportCardData";

const Support = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
        AOS.refresh();
    }, []);

    return (
        <section className="support" id="support">
            <div className="container">
                <div className="row">
                    <h2 className="support__title">finding the right team</h2>

                    <p className="support__desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, error? Fugiat, recusandae debitis saepe quod optio illum eligendi totam facere.
                    </p>

                    <div className="support__cards">
                        {
                            SupportCardData.map(({ id, itemIcon, itemTitle, itemDesc, animateName }) => (
                                <div className="support__cards__item" key={id} data-aos={animateName} data-aos-delay={id * 205}>
                                    <div className="support__cards__item__icon">
                                        {itemIcon}
                                    </div>

                                    <h4 className="support__cards__item__title">{itemTitle}</h4>

                                    <p className="support__cards__item__desc">{itemDesc}</p>

                                    <div className="support__cards__item__btn">
                                        <Link to="/" className="support__cards__item__btn__link">contact us</Link>
                                        <AiOutlineArrowRight />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support
