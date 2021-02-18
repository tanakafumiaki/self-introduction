import styles from "components/templates/HomeTemplate/styles.module.sass";
import {PrimaryLink} from "components/atoms";
import React from "react";

const SelectionTemplate: React.VFC　= () => {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                WELCOME
            </h1>

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
    )
}
export default SelectionTemplate;