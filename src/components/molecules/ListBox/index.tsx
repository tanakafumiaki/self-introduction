import styles from './style.module.sass';
import React from "react";

interface Props {
    title: string
    itemList: string[]
}

const ListBox: React.VFC<Props> = ({title,itemList}) => {
    return (
        <section className={styles.section}>
            <p>{title}</p>
            <ul className={styles.skillsWrapper}>
                <div className={styles.skillsList}>
                    {itemList.map(name =>
                        <li>{name}</li>
                    )}
                </div>
            </ul>
        </section>
    )
}
export default ListBox;
