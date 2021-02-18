import styles from "./styles.module.sass";
import {Title, PrimaryLink} from "components/atoms";
import React from "react";

const HomeTemplate: React.VFC　= () => {
    return (
        <main className={styles.main}>
            <Title
                title="WELCOME"/>

            <PrimaryLink
                text="Click"
                href="/selection"/>
        </main>
    )
}
export default HomeTemplate;
