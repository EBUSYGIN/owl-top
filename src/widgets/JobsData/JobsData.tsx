import { JobCountCard, JobDataCard } from '@/src/entities/page/ui';
import { Card, Tag, Title } from '@/src/shared/ui';

import { JobsDataProps } from './JobsData.props';
import styles from './JobsData.module.css';

export function JobsData({ data, category }: JobsDataProps) {
  if (data === null || category === null) return <p>Не найдено</p>;

  return (
    <div className={styles.jobData}>
      <div className={styles.titleWrapper}>
        <Title tag='h4' size='m' color='black'>
          Вакансии - {category}
        </Title>
        <Tag size='m' color='red'>
          hh.ru
        </Tag>
      </div>
      <div className={styles.infoWrapper}>
        <JobCountCard count={data.count} />

        <JobDataCard
          salary={data.juniorSalary}
          countOfActiveStars={1}
          title='Начальный'
        />

        <JobDataCard
          salary={data.middleSalary}
          countOfActiveStars={2}
          title='Средний'
        />

        <JobDataCard
          salary={data.seniorSalary}
          countOfActiveStars={3}
          title='Профессионал'
        />
      </div>
    </div>
  );
}
