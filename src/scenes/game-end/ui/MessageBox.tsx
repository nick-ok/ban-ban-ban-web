import ReactMarkdown from 'react-markdown';

import { useTranslation } from '@/features/i18n';
import { Button, ShineFX, ZoomMotion } from '@/shared/ui';

import styles from './MessageBox.module.css';

interface Props {
  onNext: () => void;
  text: string;
  isEnterBtn: boolean;
}

export const MessageBox = ({ text, onNext, isEnterBtn }: Props) => {
  const { t } = useTranslation();

  return (
    <ZoomMotion className={styles.root} scale={0.7} duration={0.7}>
      <ReactMarkdown>{text}</ReactMarkdown>

      <ShineFX enabled={isEnterBtn}>
        <Button
          variant={isEnterBtn ? 'accent' : 'accentBlue'}
          className={styles.nextBtn}
          onClick={onNext}
          soundType={isEnterBtn ? 'soft' : 'default'}
        >
          {t(isEnterBtn ? 'screens.gameend.enter' : 'screens.gameend.next')}
        </Button>
      </ShineFX>
    </ZoomMotion>
  );
};
