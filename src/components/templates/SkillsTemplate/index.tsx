import styles from "./styles.module.sass";
import {CommonLink, Title, ListBox} from "components/atoms";
import React from "react";

const ProfileTemplate: React.VFC　= () => {
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
                    itemsList={[
                        'JavaScript',
                        'React.js',
                        'TypeScript',
                        'Next.js'
                    ]}
                />
                <ListBox
                    title="Backend"
                    itemsList={[
                        'Ruby',
                        'Rails',
                        'Java',
                        'Spring'
                    ]}
                />
                <ListBox
                    title="Other"
                    itemsList={[
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
export default ProfileTemplate;
