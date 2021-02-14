import styles from 'src/styles/Home.module.sass';
import PrimaryButton from "src/components/atoms/PrimaryButton";

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
