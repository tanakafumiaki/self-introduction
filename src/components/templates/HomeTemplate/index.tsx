import styles from "./styles.module.sass";
import {Title, PrimaryLink, Head} from "components/atoms";
import React from "react";

const HomeTemplate: React.VFC　= () => {
    return (
        <div>
            <Head
                tabName="Top"
            />
            <main className={styles.main}>
                <Title
                    title="WELCOME"/>

                <PrimaryLink
                    text="Click"
                    href="/selection"/>
            </main>
        </div>
    )
}
export default HomeTemplate;
