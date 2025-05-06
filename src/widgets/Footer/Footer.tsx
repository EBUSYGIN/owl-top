import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>OwlTop &copy; 2020 - 2021 Все права защищены</p>
      <div className={styles.footerRight}>
        <p>Пользовательское соглашение</p>
        <p>Политика конфиденциальности</p>
      </div>
    </footer>
  );
}
