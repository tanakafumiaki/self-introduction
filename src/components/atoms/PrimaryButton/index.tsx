import styles from 'src/components/atoms/PrimaryButton/style.module.sass';
import Link from "next/link";
import React from "react";

interface Props {
    text: string
    link: string
}

const PrimaryButton: React.VFC<Props> = ({ link, text }) => {
    return (
        <button className={styles.button}>
            <Link href={link}>
                <a>{text}</a>
            </Link>
        </button>
    )
}
export default PrimaryButton
