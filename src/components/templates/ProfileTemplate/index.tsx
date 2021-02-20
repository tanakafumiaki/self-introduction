import styles from "./styles.module.sass";
import {HomeLink, Title} from "components/atoms";
import React from "react";

const ProfileTemplate: React.VFC　= () => {
    return (
        <main className={styles.main}>
            <Title
                title="Profile"/>

            <HomeLink
                href="/selection"/>
        </main>
    )
}
export default ProfileTemplate;
