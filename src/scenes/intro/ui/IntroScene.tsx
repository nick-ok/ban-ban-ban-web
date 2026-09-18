import { useState } from 'react';

import { AnimatePresence, motion } from 'motion/react';

import {
  GameSettingsContent,
  useGameSettingsStore,
} from '@/entities/game-settings';
import { useNavigationStore } from '@/entities/navigation';
import { useTranslation } from '@/features/i18n';
import { Button } from '@/shared/ui';

import { Stage1 } from './Stage1';
import { Stage2 } from './Stage2';
import { Stage3 } from './Stage3';
import { Stage4 } from './Stage4';
import { Stage5 } from './Stage5';

import styles from './IntroScene.module.css';

export const IntroScene = () => {
  const { t } = useTranslation();

  const [currentStage, setCurrentStage] = useState<number>(1);

  const { setIntroSkipped } = useGameSettingsStore();
  const { setScene } = useNavigationStore();

  const handleNext = () => {
    if (currentStage < 5) {
      setCurrentStage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStage > 1) {
      setCurrentStage((prev) => prev - 1);
    }
  };

  const handleFinish = () => {
    setIntroSkipped(true);
    setScene('lobby');
  };

  const renderStage = () => {
    switch (currentStage) {
      case 1:
        return <Stage1 onNext={handleNext} />;
      case 2:
        return <Stage2 onNext={handleNext} onPrev={handlePrev} />;
      case 3:
        return <Stage3 onNext={handleNext} onPrev={handlePrev} />;
      case 4:
        return <Stage4 onNext={handleNext} onPrev={handlePrev} />;
      case 5:
        return <Stage5 onPrev={handlePrev} onFinish={handleFinish} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.gameSettings}>
        <GameSettingsContent />
      </div>

      <Button
        variant={'white'}
        className={styles.skipBtn}
        onClick={handleFinish}
      >
        {t('screens.intro.skip')}
      </Button>

      <AnimatePresence mode={'wait'}>
        <motion.div
          key={currentStage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className={styles.inner}
        >
          {renderStage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
