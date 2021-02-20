import styles from "./styles.module.sass";
import {PrimaryLink, Title} from "components/atoms";
import React from "react";

const ProfileTemplate: React.VFC　= () => {
    return (
        <main className={styles.main}>
            <Title
                title="Profile"/>
        </main>
    )
}
export default ProfileTemplate;
