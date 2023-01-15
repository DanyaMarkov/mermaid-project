import { Route, Routes } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainPage from "../pages/MainPage/MainPage";
import css from "./App.css";

const App = () => {
    return (
        <div className={css.app}>
            <header>
                <Header />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default App;
