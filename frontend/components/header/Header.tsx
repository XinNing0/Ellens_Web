"use client"; // Ensure this component works on the client side

import React, { useState } from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Site Title */}
                <div className={styles.siteTitle}>Ellen's Space</div>

                {/* Hamburger Menu Button for Small Screens */}
                <button
                    className={styles.menuButton}
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    ☰
                </button>

                {/* Navigation Links */}
                <nav
                    className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
                    aria-expanded={isMenuOpen}
                >
                    <ul className={styles.navList}>
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
                            <a href="/leetcode" className={styles.link}>
                                LeetCode
                            </a>
                        </li>
                        <li>
                            <a href="/photography" className={styles.link}>
                                Photography
                            </a>
                        </li>
                        <li>
                            <a href="/travel" className={styles.link}>
                                Travel
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
