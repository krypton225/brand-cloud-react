const Footer = () => {
    return (
        <footer className='footer' id='footer'>
            <div className="container">
                <div className="row">
                    <div className="footer__col">
                        <h5 className="footer__col__title">solutions</h5>

                        <ul className="footer__col__list">
                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>marketing</a>
                            </li>

                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>analytics</a>
                            </li>

                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>commerce</a>
                            </li>

                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>data</a>
                            </li>

                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>cloud</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h5 className="footer__col__title">support</h5>

                        <ul className="footer__col__list">
                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>pricing</a>
                            </li>

                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>documentation</a>
                            </li>

                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>guides</a>
                            </li>

                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>API status</a>
                            </li>

                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>fixes</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h5 className="footer__col__title">company</h5>

                        <ul className="footer__col__list">
                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>about</a>
                            </li>

                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>blog</a>
                            </li>

                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>jobs</a>
                            </li>

                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>press</a>
                            </li>

                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>partners</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h5 className="footer__col__title">legal</h5>

                        <ul className="footer__col__list">
                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>chain</a>
                            </li>

                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>private</a>
                            </li>

                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>public</a>
                            </li>

                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>policies</a>
                            </li>

                            <li className="footer__col__list__item">
                                <a href="/" className='footer__col__list__item__link'>terms</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h5 className="footer__col__title-upper">subscribe for newsletter</h5>

                        <p className="footer__col__desc">
                            The latest news, articles and resources, sent to your inbox weekly.
                        </p>

                        <form className="footer__col__form" autoComplete='off'>
                            <div className='footer__col__form__container'>
                                <input type="email" name="email" className="footer__col__form__container__email" placeholder='enter your email' autoComplete="new-password" />
                                <input type="submit" className='footer__col__form__container__submit' value="subscribe" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer__copyright">
                <p className="footer__copyright__text">
                    &copy; 2022 Khaled Mohamed. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
