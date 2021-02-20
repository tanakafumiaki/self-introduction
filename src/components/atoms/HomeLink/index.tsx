import styles from './style.module.sass';
import Link from "next/link";
import React from "react";

interface Props {
    href: string
}

const HomeLink: React.VFC<Props> = ({ href }) => {
    return (
        <Link href={href}>
            <a className={styles.link}>Home</a>
        </Link>
    )
}
export default HomeLink;
