import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

import LandingImage from "../../assets/images/cyber-bg.png";

import MainButton from "../button/MainButton";
import GoToTop from "../go-to-top/GoToTop";

const Landing = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    return (
        <>
            <GoToTop />

            <section className='landing'>
                <div className="container">
                    <div className="row">
                        <div className="landing__intro" data-aos="fade-left">
                            <p className="landing__intro__desc-first">unique sequencing & production</p>
                            <h2 className="landing__intro__title">cloud management</h2>
                            <p className="landing__intro__desc-second">This is our tech brand</p>

                            <MainButton text="get started" url="about" />
                        </div>

                        <div className="landing__pic">
                            <LazyLoadImage src={LandingImage} alt="Landing Cyber Background" draggable="false" effect="blur" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing
