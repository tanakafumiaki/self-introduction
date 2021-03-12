import styles from './style.module.sass';
import React from "react";

interface Props {
    text: string
}

const TextBox: React.VFC<Props> = ({text}) => {
    return (
        <div className={styles.textBox}>
            {text}
        </div>
    )
}
export default TextBox;
