import { Controller, SubmitHandler, useForm } from "react-hook-form";

import {
  Button,
  DynamicRating,
  Input,
  SubmitNotification,
  Textarea,
} from "@/src/shared/ui";
import { ReviewFormProps } from "./ReviewForm.props";
import { CourseReviewForm } from "@/src/entities/course/types";

import styles from "./ReviewForm.module.css";
import { courseHandler } from "@/src/entities/course/handler";
import { useState } from "react";

export function ReviewForm({ courseId }: ReviewFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CourseReviewForm>();
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean | null>(
    null
  );

  const submitReview: SubmitHandler<CourseReviewForm> = async (review) => {
    const data = await courseHandler.createReview({
      ...review,
      productId: courseId,
    });

    if (!data?.ok) setIsSubmitSuccessful(false);

    if (data?.ok) setIsSubmitSuccessful(true);
  };

  return (
    <form onSubmit={handleSubmit(submitReview)}>
      <div className={styles.top}>
        <Input
          placeholder="Имя"
          {...register("name", { required: "Заполните имя" })}
          error={errors.name?.message}
        />
        <Input
          placeholder="Заголовок отзыва"
          {...register("title", { required: "Заполните заголовок" })}
          error={errors.title?.message}
        />
        <Controller
          control={control}
          rules={{ required: "Поставьте оценку" }}
          name="rating"
          render={({ field: { onChange, value } }) => (
            <DynamicRating
              className={styles.reviewRating}
              onChange={onChange}
              rating={value}
              error={errors.rating?.message}
            />
          )}
        />
      </div>

      <Textarea
        placeholder="Текст отзыва"
        {...register("description", { required: "Напишите текст отзыва" })}
        error={errors.description?.message}
      />
      <div className={styles.submit}>
        <Button size="l">Отправить</Button>
        <p className={styles.info}>
          *Перед публикацией отзыв пройдет предварительную модерацию и проверку
        </p>
      </div>
      {isSubmitSuccessful && (
        <SubmitNotification
          changeSubmitStatus={setIsSubmitSuccessful}
          color={"green"}
          title={"Ваш отзыв отправлен"}
          info={
            "Спасибо, ваш отзыв отправлен и будет опубликован после проверки"
          }
        />
      )}
      {isSubmitSuccessful === false ? (
        <SubmitNotification
          changeSubmitStatus={setIsSubmitSuccessful}
          color={"red"}
          title={"Произошла ошибка"}
          info={"Произошла ошибка, попробуйте позже"}
        />
      ) : null}
    </form>
  );
}
