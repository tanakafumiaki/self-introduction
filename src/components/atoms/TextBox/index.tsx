import styles from './style.module.sass';
import React from "react";

const TextBox: React.VFC = () => {
    return (
        <main>
            <div className={styles.selfIntroduction}>
                <p>
                    田中史彬(たなかふみあき)です。<br/>
                    2018年よりシステムエンジニアとして働いています。<br/>
                    趣味は自転車です。<br/>
                    最近の悩みは運動不足です。<br/>
                    よろしくお願いいたします！<br/><br/>
                    email: fumiakishodai@gmail.com
                </p>
            </div>
        </main>
    )
}
export default TextBox;
