import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {

    const [goToTopBtn, setGoToTopBtn] = useState(false);

    const handleTop = () => {
        window.scrollTo(0, 0);
    };

    const handleWhenScroll = () => {
        if (document.body.scrollTo > 10 || document.documentElement.scrollTop > 10) {
            setGoToTopBtn(true);
        } else {
            setGoToTopBtn(false);
        }
    }

    window.addEventListener("scroll", handleWhenScroll);

    return (
        <a className={`go-to-top ${goToTopBtn ? "active" : ""}`} id='go-to-top' onClick={handleTop}>
            <FaArrowUp />
        </a>
    )
}

export default GoToTop
