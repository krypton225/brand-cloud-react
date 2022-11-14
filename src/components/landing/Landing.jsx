import LandingImage from "../../assets/images/cyber-bg.png";
import MainButton from "../button/MainButton";

const Landing = () => {
    return (
        <section className='landing'>
            <div className="container">
                <div className="row">
                    <div className="landing__intro">
                        <p className="landing__intro__desc-first">unique sequencing & production</p>
                        <h2 className="landing__intro__title">cloud management</h2>
                        <p className="landing__intro__desc-second">This is our tech brand</p>

                        <MainButton text="get started" url="#about" />
                    </div>

                    <div className="landing__pic">
                        <img src={LandingImage} alt="Landing Cyber Background" draggable="false" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing
