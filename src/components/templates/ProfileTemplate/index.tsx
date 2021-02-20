import styles from "./styles.module.sass";
import {HomeLink, Title, ImageBox} from "components/atoms";
import React from "react";

const ProfileTemplate: React.VFC　= () => {
    return (
        <main className={styles.main}>
            <Title
                title="Profile"/>

            <HomeLink
                href="/selection"/>

            <ImageBox/>
        </main>
    )
}
export default ProfileTemplate;
