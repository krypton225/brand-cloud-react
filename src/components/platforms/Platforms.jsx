import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { BsCheck2 } from "react-icons/bs";

import PlatformsCards from "../../data/PlatformsCards";

const Platforms = () => {
    useEffect(() => {
        AOS.init({
            duration: 900
        });
    }, []);

    return (
        <div className="platforms">
            <h2 className="platforms__title">all-in-one platform</h2>

            <p className="platforms__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorum cupiditate necessitatibus deleniti. Voluptatem, tempore.
            </p>

            <div className="container">
                <div className="row">
                    {
                        PlatformsCards.map((oneRow, index) => (
                            <div className="platforms__cols" key={index}>
                                {
                                    oneRow.map(({ id, cardTitle, cardDesc }) => (
                                        <div className="platforms__cols__card" key={id} data-aos="zoom-in">
                                            <h4 className="platforms__cols__card__title">
                                                <BsCheck2 className="platforms__cols__card__title__icon" />
                                                <span className="platforms__cols__card__title__txt">{cardTitle}</span>
                                            </h4>
                                            <p className="platforms__cols__card__desc">{cardDesc}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Platforms;