import { Button } from '@/shared/ui';

import type { StageProps } from '../model/types';

import styles from './Stage2.module.css';

export const Stage2 = ({ onPrev, onNext }: StageProps) => {
  return (
    <div className={styles.root}>
      <div>ANIMATION HERE...</div>

      <Button onClick={onPrev}>Prev</Button>
      <Button onClick={onNext}>Next</Button>
    </div>
  );
};
