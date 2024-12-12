import React from "react";
import styles from "./Footer.module.css"; // Import the CSS module

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Social Links */}
                <ul className={styles.socialList}>
                    {/* Email */}
                    <li>
                        <a href="mailto:your-email@example.com" className={styles.link}>
                            <img src="/icons/email.svg" alt="Email" className={styles.icon}/>
                            Email
                        </a>
                    </li>
                    {/* Instagram */}
                    <li>
                    <a
                            href="https://www.instagram.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            <img
                                src="/icons/instagram.svg"
                                alt="Instagram"
                                className={styles.icon}
                            />
                            Instagram
                        </a>
                    </li>
                    {/* Twitter */}
                    <li>
                        <a
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            <img
                                src="/icons/twitter.svg"
                                alt="Twitter"
                                className={styles.icon}
                            />
                            Twitter
                        </a>
                    </li>
                    {/* LinkedIn */}
                    <li>
                        <a
                            href="https://www.linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            <img
                                src="/icons/linkedin.svg"
                                alt="LinkedIn"
                                className={styles.icon}
                            />
                            LinkedIn
                        </a>
                    </li>
                    {/* Little Red Book */}
                    <li>
                        <a
                            href="https://www.xiaohongshu.com/user/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            <img
                                src="/icons/youtube.svg"
                                alt="YouTube"
                                className={styles.icon}
                            />
                            Little Red Book
                        </a>
                    </li>
                </ul>
            </div>
            {/* Copyright Section */}
            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} Ellen Xin Ning. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
