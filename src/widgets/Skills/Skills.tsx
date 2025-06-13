import { Tag, Title } from '@/src/shared/ui';

import styles from './Skills.module.css';
import { SkillsProps } from './Skills.props';

export function Skills({ skills }: SkillsProps) {
  return (
    <div>
      <Title tag='h4' size='m' color='black' className={styles.title}>
        Получаемые навыки
      </Title>
      <div className={styles.tags}>
        {skills.map((skill, i) => (
          <Tag key={i}>{skill}</Tag>
        ))}
      </div>
    </div>
  );
}
