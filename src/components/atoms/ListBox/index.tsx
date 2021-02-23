import styles from './style.module.sass';
import React from "react";

interface Props {
    title: string
    itemsList: []
}

const ListBox: React.VFC<Props> = ({title,itemsList}) => {
    return (
        <main>
            <ul className={styles.skillsWrapper}>
                {title}
                <div className={styles.skillsList}>
                    {itemsList.map(name =>
                        <li>{name}</li>
                    )}
                </div>
            </ul>
        </main>
    )
}
export default ListBox;
