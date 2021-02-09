import styles from './style.module.sass'
import Link from "next/link";

interface PrimaryButtonProps {
    text: string
    link: string
}

export default function PrimaryButton(props: PrimaryButtonProps) {
    return (
        <button className={styles.button}>
            <Link href={props.link}>
                <a>{props.text}</a>
            </Link>
        </button>
    );
}
