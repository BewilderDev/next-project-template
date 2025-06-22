import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Next.js</h1>
      <p className={styles.description}>
        This is the home page. Visit <a href="/about">About</a> to learn more.
      </p>
    </div>
  );
} 