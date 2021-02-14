import styles from 'src/styles/Home.module.sass';
import {PrimaryButton} from "src/components/atoms";
import React from "react";

const Home　= () => {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                WELCOME
            </h1>

            <PrimaryButton
                text="Click"
                link="/selection"/>
        </main>
    )
}
export default Home
