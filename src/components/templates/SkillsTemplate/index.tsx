import styles from "./styles.module.sass";
import {CommonLink, Title, TextBox} from "components/atoms";
import React from "react";

const ProfileTemplate: React.VFC　= () => {
    return (
        <div>
            <Title
                title="Skills"/>

            <CommonLink
                text="HOME"
                href="/selection"/>

            <main className={styles.main}>
                <ul className={styles.skillsWrapper}>
                    Frontend
                    <div className={styles.skillsList}>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>TypeScript</li>
                        <li>Next.js</li>
                    </div>
                </ul>
                <ul className={styles.skillsWrapper}>
                    Backend
                    <div className={styles.skillsList}>
                        <li>Ruby</li>
                        <li>Rails</li>
                        <li>Java</li>
                        <li>Spring</li>
                    </div>
                </ul>
                <ul className={styles.skillsWrapper}>
                    Other
                    <div className={styles.skillsList}>
                        <li>GitHub</li>
                        <li>slack</li>
                        <li>JP1</li>
                        <li>SystemWalker</li>
                    </div>
                </ul>
            </main>
        </div>
    )
}
export default ProfileTemplate;
