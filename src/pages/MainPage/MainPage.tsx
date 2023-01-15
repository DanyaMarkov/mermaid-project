import Products from "../../components/Products/Products";
import VideoBlock from "../../components/VideoBlock/VideoBlock";
import css from "./MainPage.module.css";

const MainPage = () => {
    return (
        <div className={css.mainPage}>
            <VideoBlock />
            <Products />
        </div>
    );
};

export default MainPage;
