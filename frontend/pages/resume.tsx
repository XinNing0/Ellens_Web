// pages/resume.tsx

import React from 'react';
import type { NextPage } from 'next';
import styles from "./resume.module.css"

const Resume: NextPage = () => {
    return (
        <div>
            <header>
                <h1>Ellen Xin Ning</h1>
                <p>Software Developer | Full-Stack Expert</p>
                <p>Email: ningellenx@gmail.com | Phone: +1 (518) 961-6652</p>
                <p>LinkedIn: <a href="https://linkedin.com/in/xining" target="_blank">linkedin.com/in/xining</a></p>
                <p>GitHub: <a href="https://github.com/XinNing0" target="_blank">github.com/XinNing0</a></p>
            </header>

            <section>
                <h2>Summary</h2>
                <p>Full Stack Software Developer with experience in developing web applications using technologies like React, Node.js, and Python. Proficient in designing and implementing RESTful APIs, developing CI/CD pipelines, and creating efficient database schemas.</p>
            </section>

            <section>
                <h2>Experience</h2>
                <div>
                    <h3>Full Stack Software Developer</h3>
                    <p>March 2024 - Present | E-commerce website project, Memphis, TN</p>
                    <ul>
                        <li>Developed an e-commerce platform using React for the frontend and Node.js for the backend.</li>
                        <li>Integrated online payment systems, including PayPal and Stripe.</li>
                        <li>Designed and managed MySQL databases using TypeORM.</li>
                    </ul>
                </div>
                <div>
                    <h3>Software Engineer Intern</h3>
                    <p>March 2023 - November 2023 | ArcLight Software, Chino Hills, CA</p>
                    <ul>
                        <li>Enhanced website functionality by adding new features and improving load times.</li>
                        <li>Managed relational databases and optimized API efficiency.</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2>Education</h2>
                <p>Master of Science, Information Technology - Rensselaer Polytechnic Institute</p>
                <p>Bachelor of Art, Journalism and Finance - Guangdong University of Foreign Studies</p>
            </section>

            <section>
                <h2>Projects</h2>
                <p>Spring and Spring Boot Developer Training - in28Minutes Online Learning Platform</p>
            </section>

            <section>
                <h2>Skills</h2>
                <ul>
                    <li>Programming Languages: Python, JavaScript, TypeScript, HTML, CSS, C#</li>
                    <li>Web Development: React, Redux, D3.js, Angular, Node.js, RESTful APIs</li>
                    <li>Databases: MySQL, PostgreSQL, MSSQL</li>
                    <li>Cloud Platforms: AWS, Google Cloud</li>
                    <li>DevOps Tools: Docker, CI/CD pipelines, Git</li>
                </ul>
            </section>
        </div>
    );
};

export default Resume;
