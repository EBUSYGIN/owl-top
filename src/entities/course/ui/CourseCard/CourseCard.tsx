"use client";
import cn from "classnames";

import { useState } from "react";
import Image from "next/image";

import {
  Button,
  Card,
  CourseDetails,
  DottedLine,
  Icon,
  PriceInfo,
  StaticRating,
  Tag,
  Title,
} from "@/src/shared/ui";

import { CourseCardProps } from "./CourseCard.props";

import styles from "./CourseCard.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { ReviewList } from "@/src/entities/review/ui/ReviewList/ReviewList";

export const CourseCard = motion.create(function CourseCard({
  course,
}: CourseCardProps) {
  const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);

  return (
    <motion.div layout>
      <Card>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <Image
              src={course.image}
              alt="Иконка курса"
              width={70}
              height={70}
              className={styles.image}
            />
            <div className={styles.info}>
              <Title tag="h3" size="m" color="black">
                {course.title}
              </Title>
              <div className={styles.categories}>
                {course.categories?.map((category, i) => (
                  <Tag size="m" color="ghost" key={i}>
                    {category}
                  </Tag>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.topRight}>
            <PriceInfo
              price={course.price}
              oldPrice={course.oldPrice}
              blockName="Цена"
            />
            <PriceInfo
              price={course.credit}
              blockName="Кредит"
              additionalPriceInfo="/мес"
            />
            <StaticRating
              initialRating={course.initialRating}
              reviewCount={course.reviewCount}
            />
          </div>
        </div>
        <div className={styles.middle}>
          <p className={styles.description}>{course.description}</p>
          <div className={styles.characteristics}>
            <div>
              {course.characteristics.map((characteristic, i) => (
                <DottedLine key={i} {...characteristic} />
              ))}
              <div className={styles.tags}>
                {course.tags.map((tag, i) => (
                  <Tag key={i} size="m" color="ghost">
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
            <CourseDetails
              adv={course.advantages}
              disadv={course.disAdvantages}
            />
          </div>
        </div>
        <div className={styles.actions}>
          <Button size="m">Узнать подробнее</Button>
          <Button
            size="m"
            appearance="ghost"
            onClick={() => setIsReviewOpen((prevState) => !prevState)}
          >
            Читать отзывы
            <Icon.Arrow
              className={cn(styles.arrow, {
                [styles.arrowActive]: isReviewOpen,
              })}
            />
          </Button>
        </div>
      </Card>
      <AnimatePresence>
        {isReviewOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: {
                height: { duration: 0.3, ease: "easeOut" },
                opacity: { duration: 0.2, ease: "linear" },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                height: { duration: 0.25, ease: "easeIn" },
                opacity: { duration: 0.15, ease: "linear" },
              },
            }}
            transition={{ duration: 0.3 }}
          >
            <ReviewList reviews={course.reviews} courseId={course._id} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
