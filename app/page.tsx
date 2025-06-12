import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Next.js Template</h1>
      <p className={styles.description}>
        A simple Next.js project with Docker support and basic UI components.
      </p>
    </div>
  );
} 