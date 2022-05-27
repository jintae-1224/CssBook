import classNames from "classnames/bind";
import styles from "./Css1.module.css";

const cx = classNames.bind(styles);

const Css1 = () => {
    return(
        <div className={cx("Menu_hover1")}>
            <ul>
                <li className={cx("N6")}><a href="#">Home</a></li>
                <li className={cx("N5")}><a href="#">About</a></li>
                <li className={cx("N4")}><a href="#">Services</a></li>
                <li className={cx("N3")}><a href="#">Portfolio</a></li>
                <li className={cx("N2")}><a href="#">Our Team</a></li>
                <li className={cx("N1")}><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Css1