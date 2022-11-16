import FooterColumnTitle from "./FooterColumnTitle"
import FormFooter from "./FormFooter"
import Copyright from "./Copyright"
import FormColumnList from "./FormColumnList"
import { MyItemsArray } from "../../data/FooterListItems"

const Footer = () => {
    return (
        <footer className='footer' id='footer'>
            <div className="container">
                <div className="row">
                    {
                        MyItemsArray.map((col, index) => (
                            <div className="footer__col" key={index}>
                                <FooterColumnTitle text={`solutions`} isUpper={false} />
                                <FormColumnList list={col} />
                            </div>
                        ))
                    }

                    <div className="footer__col">
                        <FooterColumnTitle text={`subscribe for newsletter`} isUpper={true} />
                        <p className="footer__col__desc">The latest news, articles and resources, sent to your inbox weekly.</p>
                        <FormFooter />
                    </div>
                </div>
            </div>

            <Copyright text={`2022 Khaled Mohamed. All rights reserved.`} />
        </footer>
    )
}

export default Footer;