import styles from "components/templates/SelectionTemplate/styles.module.sass";
import {PrimaryLink, Title} from "components/atoms";
import React from "react";

const SelectionTemplate: React.VFC　= () => {
    return (
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
    )
}
export default SelectionTemplate;
