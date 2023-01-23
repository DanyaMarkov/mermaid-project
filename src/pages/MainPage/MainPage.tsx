import React from "react";
import AdvantagesTable from "../../components/AdvantagesTable/AdvantagesTable";
import BriefStatistic from "../../components/BriefStatistic/BriefStatistic";
import PhoneWidget from "../../components/PhoneWidget/PhoneWidget";
import Products from "../../components/Products/Products";
import Reviews from "../../components/Reviews/Reviews";
import css from "./MainPage.module.css";

const MainPage = () => {
    const VideoBlock = React.lazy(() => import("../../components/VideoBlock/VideoBlock"));

    return (
        <div className={css.mainPage}>
            <React.Suspense fallback={<h1>Loading..</h1>}>
                <VideoBlock />
            </React.Suspense>
            {/* <div style={{ backgroundColor: "purple", height: 50 }}></div> */}
            <Products />
            <AdvantagesTable />
            <BriefStatistic />

            <PhoneWidget />
            <Reviews />
        </div>
    );
};

export default MainPage;
