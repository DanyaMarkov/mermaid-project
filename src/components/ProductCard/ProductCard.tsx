import css from "./ProductCard.module.css";

type ProductCardProps = {
    title: string;
    text: string;
    backgroundImage: string;
};

export const ProductCard = (props: ProductCardProps) => {
    return (
        <div className={css.productCard} style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            <div className={css.productCard__title}>{props.title}</div>
            <div className={css.productCard__text}>{props.text}</div>
        </div>
    );
};

export default ProductCard;
