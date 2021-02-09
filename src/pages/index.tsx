import styles from '../styles/Home.module.sass';
import PrimaryButton from "../components/atoms/PrimaryButton";

export default function Home() {
  return (
      <main className={styles.main}>
        <h1 className={styles.title}>
          WELCOME
        </h1>

        <PrimaryButton
            text="Click"
            link="/selection"/>
      </main>
  )
}
