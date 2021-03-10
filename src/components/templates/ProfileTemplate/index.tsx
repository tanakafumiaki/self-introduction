import styles from "./styles.module.sass";
import {CommonLink, Title, ImageBox, TextBox, Head} from "components/atoms";
import React from "react";

const ProfileTemplate: React.VFC　= () => {
    return (
        <div>
            <Head
                tabName="Profile"/>

            <Title
                title="Profile"/>

            <CommonLink
                text="HOME"
                href="/selection"/>

            <main className={styles.main}>
                <ImageBox/>

                <TextBox
                    text={
                        `
                        田中史彬(たなかふみあき)です。
                        2018年よりシステムエンジニアとして働いています。
                        趣味は自転車です。最近の悩みは運動不足です。
                        よろしくお願いいたします！
                        email: fumiakishodai@gmail.com`
                    }
                />
            </main>
        </div>
    )
}
export default ProfileTemplate;
