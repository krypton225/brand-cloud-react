import FooterColumnTitle from "./FooterColumnTitle"
import FormFooter from "./FormFooter"
import Copyright from "./Copyright"
import FormColumnList from "./FormColumnList"
import { ListItemSolutions, ListItemSupport, ListItemCompany, ListItemLegal } from "../../data/FooterListItems"

const Footer = () => {
    return (
        <footer className='footer' id='footer'>
            <div className="container">
                <div className="row">
                    <div className="footer__col">
                        <FooterColumnTitle text={`solutions`} isUpper={false} />
                        <FormColumnList list={ListItemSolutions} />
                    </div>

                    <div className="footer__col">
                        <FooterColumnTitle text={`support`} isUpper={false} />
                        <FormColumnList list={ListItemSupport} />
                    </div>

                    <div className="footer__col">
                        <FooterColumnTitle text={`company`} isUpper={false} />
                        <FormColumnList list={ListItemCompany} />
                    </div>

                    <div className="footer__col">
                        <FooterColumnTitle text={`legal`} isUpper={false} />
                        <FormColumnList list={ListItemLegal} />
                    </div>

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