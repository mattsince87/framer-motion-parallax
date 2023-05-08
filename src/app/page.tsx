import Box from "./components/Box";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <Box classes="left" speed={2} />
        <Box classes="mid" speed={-1.8} />
        <Box classes="right" speed={2.6} />
      </section>
      <section className={styles.section}>
        <Box classes="left" speed={2} />
        <Box classes="mid" speed={-1.8} />
        <Box classes="right" speed={2.6} />
      </section>
    </main>
  );
}
