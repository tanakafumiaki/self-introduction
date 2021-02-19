import styles from './style.module.sass';
import Link from "next/link";
import React from "react";

interface Props {
    text: string
    href: string
}

const PrimaryLink: React.VFC<Props> = ({ href, text }) => {
    return (
        <Link href={href}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}
export default PrimaryLink;
