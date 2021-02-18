import styles from './style.module.sass';
import React from "react";

interface Props {
    title: string
}

const Title: React.VFC<Props> = ({ title }) => {
    return (
        <h1 className={styles.title}>
            {title}
        </h1>
    )
}
export default Title;
