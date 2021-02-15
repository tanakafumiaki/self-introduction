import styles from "src/components/templates/PageTemplate/styles.module.sass";
import {PrimaryLink} from "src/components/atoms";
import React from "react";

const HomeTemplate　= () => {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                WELCOME
            </h1>

            <PrimaryLink
                text="Click"
                link="/selection"/>
        </main>
    )
}
export default HomeTemplate;
