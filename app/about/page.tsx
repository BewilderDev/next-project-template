import styles from './page.module.scss';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About This Template</h1>
      <p className={styles.description}>
        This is a simple Next.js template that includes:
      </p>
      <ul className={styles.features}>
        <li>Docker support for easy deployment</li>
        <li>TypeScript for type safety</li>
        <li>Sass/SCSS for styling</li>
        <li>Basic routing setup</li>
        <li>Responsive navigation bar</li>
      </ul>
    </div>
  );
} 