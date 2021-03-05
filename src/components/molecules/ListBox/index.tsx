import styles from './style.module.sass';
import React from "react";

interface Props {
    title: string
    itemList: string[]
}

const ListBox: React.VFC<Props> = ({title,itemList}) => {
    return (
        <section className={styles.section}>
            <p className={styles.title}>{title}</p>
            <ul className={styles.skillsList}>
                {itemList.map(name =>
                    <li className={styles.li}>{name}</li>
                )}
            </ul>
        </section>
    )
}
export default ListBox;
