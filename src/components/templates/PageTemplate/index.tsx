import styles from "src/components/templates/PageTemplate/styles.module.sass";
import {PrimaryLink} from "src/components/atoms";
import React from "react";

const HomeTemplate: React.VFC　= () => {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                WELCOME
            </h1>

            <PrimaryLink
                text="Click"
                href="/selection"/>
        </main>
    )
}
export default HomeTemplate;
