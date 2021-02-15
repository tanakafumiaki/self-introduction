import styles from 'src/components/atoms/PrimaryLink/style.module.sass';
import Link from "next/link";
import React from "react";

interface Props {
    text: string
    link: string
}

const PrimaryLink: React.VFC<Props> = ({ link, text }) => {
    return (
        <Link href={link}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}
export default PrimaryLink;
