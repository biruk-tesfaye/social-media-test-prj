import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles['footer']}>
      <span>{new Date().getFullYear()} &copy;</span>
    </div>
  );
}
