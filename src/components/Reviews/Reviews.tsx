import css from "./Reviews.module.css";
import cn from "classnames";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";

const Reviews = () => {
    return (
        <div className={css.reviews}>
            <div className={css.reviews__title}>Отзывы о нашей продукции</div>
            <div className={cn(css.reviews__video, css.video)}>
                <YoutubeVideo videoCode="kHwB5qnl-Nw" />
            </div>
            <div className={cn(css.reviews__content, css.content)}>
                <div className={css.content__button}></div>
                <div className={css.content__review}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime facilis saepe beatae at ad odit.
                    Error rerum voluptas eveniet animi laudantium molestiae explicabo magnam delectus. Ipsam dignissimos
                    nulla consequuntur corporis!
                </div>
                <div className={css.content__button}></div>
            </div>
        </div>
    );
};

export default Reviews;
