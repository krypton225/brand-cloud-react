import AboutDataCards from '../../data/AboutDataCards';

const About = () => {
    return (
        <section className='about' id='about'>
            <div className="container">
                <div className="row">
                    <h2 className="about__title">Trusted by developers across the world</h2>

                    <p className="about__desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione distinctio odio id ducimus debitis.
                    </p>

                    <div className="about__cards">
                        {
                            AboutDataCards.map(({ id, itemNum, itemName }) => (
                                <div key={id} className="about__cards__item">
                                    <h3 className="about__cards__item__num">{itemNum}</h3>
                                    <p className="about__cards__item__name">{itemName}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
