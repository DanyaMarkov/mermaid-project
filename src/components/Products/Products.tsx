import css from "./Products.module.css";
import cn from "classnames";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
    return (
        <div className={css.products}>
            <div className={cn(css.products__header, css.header)}>
                <div className={css.header__title}> Нагреватели</div>
                <div className={css.header__text}>
                    Profesyonel ekibimiz sizi ziyaret ederek talepleriniz doğrultusunda kalite, estetik ve konfordan
                    ödün vermeden en doğru seçimi yapmanıza yardımcı olur.
                </div>
            </div>
            <div className={cn(css.products__cards, css.cards)}>
                <ProductCard
                    title="Печки"
                    text="Hava kaynak pompalar hem ilk kurulum maliyeti adan hemde toprak kaynak ve su kaynakl gibi ekstra masraf gerektirmeyenbir çözümdür"
                    backgroundImage="https://ae04.alicdn.com/kf/H8dc24d02f7984d5e818f764bc4460283e/-.jpg"
                />
                <ProductCard
                    title="Печки"
                    text="Hava kaynak pompalar hem ilk kurulum maliyeti adan hemde toprak kaynak ve su kaynakl gibi ekstra masraf gerektirmeyenbir çözümdür"
                    backgroundImage="https://ae04.alicdn.com/kf/H8dc24d02f7984d5e818f764bc4460283e/-.jpg"
                />
                <ProductCard
                    title="Печки"
                    text="Hava kaynak pompalar hem ilk kurulum maliyeti adan hemde toprak kaynak ve su kaynakl gibi ekstra masraf gerektirmeyenbir çözümdür"
                    backgroundImage="https://ae04.alicdn.com/kf/H8dc24d02f7984d5e818f764bc4460283e/-.jpg"
                />
                <ProductCard
                    title="Печки"
                    text="Hava kaynak pompalar hem ilk kurulum maliyeti adan hemde toprak kaynak ve su kaynakl gibi ekstra masraf gerektirmeyenbir çözümdür"
                    backgroundImage="https://ae04.alicdn.com/kf/H8dc24d02f7984d5e818f764bc4460283e/-.jpg"
                />
            </div>
        </div>
    );
};

export default Products;
