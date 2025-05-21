import Image from "next/image";

import { Button, Title } from "@/src/shared/ui";

import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <header className={styles.header}>
        <Title size="xl" tag="h1">
          OWL top - лучший рейтинг курсов
        </Title>
      </header>
      <div className={styles.middle}>
        <div className={styles.middleText}>
          <Title tag="h2" appearance="bold" size="l">
            Тысячи курсов — один идеальный для вас!
          </Title>
          <p>
            Откройте мир знаний с нами! Выбирайте из сотен курсов, улучшайте
            навыки и достигайте новых высот с гибким обучением в удобное для вас
            время.
          </p>
          <div className={styles.actions}>
            <Button>О проекте</Button>
            <Button
              appearance="ghost"
              typeOf="a"
              href="https://github.com/EBUSYGIN"
            >
              GitHub разработчика
            </Button>
          </div>
        </div>
        <Image
          src={"/home-image.jpg"}
          width={550}
          height={498}
          alt="Изображение ноутбука на главной страницу приложения"
          className={styles.homeImage}
        />
        <Image
          src={"/home-image-mobile.jpg"}
          width={300}
          height={268}
          alt="Изображение ноутбука на главной страницу приложения"
          className={styles.homeImageMobile}
        />
      </div>
    </>
  );
}
