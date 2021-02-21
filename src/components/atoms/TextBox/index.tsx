import styles from './style.module.sass';
import React from "react";

interface Props {
    text: string
}

const TextBox: React.VFC<Props> = ({text}) => {
    return (
        <main>
            <div className={styles.textBox}>
                {text.split(',').map(str => {
                    return(<p>{str}</p>)
                })}
            </div>
        </main>
    )
}
export default TextBox;
