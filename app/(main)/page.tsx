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
      <section className={styles.middle}>
        <div className={styles.middleText}>
          <Title tag="h2" size="l">
            Тысячи курсов — один идеальный для вас!
          </Title>
          <p>
            Откройте мир знаний с нами! Выбирайте из сотен курсов, улучшайте
            навыки и достигайте новых высот с гибким обучением в удобное для вас
            время.
          </p>
        </div>
        <Image
          src={"/home-image.jpg"}
          width={450}
          height={398}
          alt="Изображение ноутбука на главной страницу приложения"
          className={styles.homeImage}
          priority
        />
      </section>
      <section className={styles.aboutSection}>
        <div className={styles.aboutText}>
          <Title tag="h2" size="l">
            О проекте
          </Title>
          <p className={styles.aboutText}>
            OWL Top — проект для целеустремленных людей. Платформа агрегирует
            курсы по любым направлениям: от программирования до бухгалтерии,
            помогая выбрать лучшее через систему рейтингов и отзывов. Здесь нет
            навязанной рекламы — только честные оценки пользователей и фильтры
            по цене, качеству и уровню сложности.
          </p>
          <div className={styles.actions}>
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
          src={"/about-image.jpg"}
          width={550}
          height={498}
          alt="Изображение ноутбука на главной страницу приложения"
          className={styles.aboutImage}
          priority
        />
      </section>
    </>
  );
}
