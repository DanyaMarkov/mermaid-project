import React from "react";
import { Route, Routes } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import css from "./App.css";

const App = () => {
    const MainPage = React.lazy(() => import("../pages/MainPage/MainPage"));

    return (
        <div className={css.app}>
            <Header />
            <main>
                <React.Suspense fallback={<h1>Loading..</h1>}>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                    </Routes>
                </React.Suspense>
            </main>

            <Footer />
        </div>
    );
};

export default App;
