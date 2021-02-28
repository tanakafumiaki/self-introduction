import styles from "./styles.module.sass";
import {CommonLink, Title, TextBox} from "components/atoms";
import React from "react";

const ExperienceTemplate: React.VFC　= () => {
    return (
        <div>
            <Title
                title="Experience"/>

            <CommonLink
                text="HOME"
                href="/selection"/>

            <main className={styles.main}>
                <TextBox
                    text={
                        `
                        ▪️2019年　官公庁システム
                        保守業務、システム移行計画の立案、
                        移行ツールの作成、移行計画の実施
                        
                        ▪️2020年　銀行システム
                        開発(操作履歴の実装)、テスト(リーダー経験：５人体制)`
                    }
                />
            </main>
        </div>
    )
}
export default ExperienceTemplate;
