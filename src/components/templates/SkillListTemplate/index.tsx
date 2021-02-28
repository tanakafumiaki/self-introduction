import styles from "./styles.module.sass";
import {CommonLink, Title} from "components/atoms";
import {ListBox} from "components/molecules";
import React from "react";

const SkillListTemplate: React.VFC　= () => {
    return (
        <div>
            <Title
                title="Skills"/>

            <CommonLink
                text="HOME"
                href="/selection"/>

            <main className={styles.main}>
                <ListBox
                    title="Frontend"
                    itemList={[
                        'JavaScript',
                        'React.js',
                        'TypeScript',
                        'Next.js'
                    ]}
                />
                <ListBox
                    title="Backend"
                    itemList={[
                        'Ruby',
                        'Rails',
                        'Java',
                        'Spring'
                    ]}
                />
                <ListBox
                    title="Other"
                    itemList={[
                        'GitHub',
                        'Slack',
                        'JP1',
                        'SystemWalker'
                    ]}
                />
            </main>
        </div>
    )
}
export default SkillListTemplate;
