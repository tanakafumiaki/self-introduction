import styles from "./styles.module.sass";
import {PrimaryLink, Title, Head} from "components/atoms";
import React from "react";

const SelectionTemplate: React.VFC　= () => {
    return (
        <div>
            <Head
                tabName="Home"/>

            <main className={styles.main}>
                <Title
                    title="WELCOME"/>

                <div className={styles.selectionContainer}>
                    <PrimaryLink
                        text="Profile"
                        href="/profile"/>

                    <PrimaryLink
                        text="Skills"
                        href="/skills"/>

                    <PrimaryLink
                        text="Products"
                        href="/products"/>

                    <PrimaryLink
                        text="Experience"
                        href="/experience"/>
                </div>
            </main>
        </div>
    )
}
export default SelectionTemplate;
