import css from "./Header.module.css";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import logo from "../../static/logo.png";

const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.header__logo}>
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                    <span> Mermaid </span>
                </NavLink>
            </div>
            <div className={cn(css.header__menu, css.menu)}>
                <div className={css.menu__el}>Главная</div>
                <div className={css.menu__el}>Продукция</div>
                <div className={css.menu__el}>Контакты</div>
                <div className={css.menu__el}>Контакты</div>
            </div>
            <div className={cn(css.header__checkoutButton, css.checkoutButton)}>
                <a href="/" target="_blank">
                    <span>Оформить сейчас</span>
                    <span>{">"}</span>
                </a>
            </div>
        </div>
    );
};

export default Header;
