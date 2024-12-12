import React from "react";
import styles from "./MainPage.module.css";
import Header from "../components/header/Header";
import Footer from "@/components/footer/Footer";
import WelcomeSection from "../components/welcome/WelcomeSection";


const MainPage: React.FC = () => {
    return (
        <div>
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className={styles.main}>
                <WelcomeSection/>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default MainPage;
