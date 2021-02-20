import styles from "./styles.module.sass";
import {HomeLink, Title, ImageBox, TextBox} from "components/atoms";
import React from "react";

const ProfileTemplate: React.VFC　= () => {
    return (
        <div>
            <Title
                title="Profile"/>

            <HomeLink
                href="/selection"/>

            <main className={styles.main}>
                <ImageBox/>

                <TextBox/>
            </main>
        </div>
    )
}
export default ProfileTemplate;
