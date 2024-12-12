import React from "react";
import styles from "./WelcomeSection.module.css";

const WelcomeSection: React.FC = () => {
    return (
        <section className={styles.welcomeSection}>
            <div className={styles.textContent}>
                <h1 className={styles.title}>Welcome to My Personal Website</h1>
                <p className={styles.description}>
                    Hi, I'm Ellen. This is where I showcase my work, hobbies, and daily progress.
                </p>
                <nav>
                    <ul className={styles.linkList}>
                        <li>
                            <a href="/resume" className={styles.link}>
                                Resume
                            </a>
                        </li>
                        <li>
                            <a href="/projects" className={styles.link}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="/photography" className={styles.link}>
                                Photography
                            </a>
                        </li>
                        <li>
                            <a href="/leetcode" className={styles.link}>
                                LeetCode Practice
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Image */}
            <div className={styles.imageContainer}>
                <div className={styles.imagePlaceholder}></div>
            </div>
        </section>
    );
};

export default WelcomeSection;
