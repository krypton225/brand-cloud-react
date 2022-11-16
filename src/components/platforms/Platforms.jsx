import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import PlatformsCards from "../../data/PlatformsCards";
import SupportCard from "../support/SupportCard";

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
                                        <SupportCard key={id} cardTitle={cardTitle} cardDesc={cardDesc} animationName={"zoom-in"} />
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