import styles from '../styles/Home.module.scss';
import Link from "next/link";

export default function Home() {
  return (
      <main className={styles.main}>
        <h1 className={styles.title}>
          WELCOME
        </h1>

        <button className={styles.button}>
          <Link href="/selection">
            <a>Click</a>
          </Link>
        </button>
      </main>
  )
}
