import {
  i18n,
  normalizeLanguage,
  SUPPORTED_LANGUAGES,
  useTranslation,
} from '@/features/i18n';
import { Button, Icon } from '@/shared/ui';

import { useGameSettingsStore } from '../model/store';

import styles from './GameSettingsContent.module.css';

export const GameSettingsContent = () => {
  const gameSettings = useGameSettingsStore();

  const { i18n: i18nTranslation } = useTranslation();

  const handleToggleMusic = () => {
    gameSettings.toggleMusic();
  };

  const handleToggleSFX = () => {
    gameSettings.toggleSFX();
  };

  const handleChangeLng = () => {
    const current = normalizeLanguage(i18n.language);
    const next =
      SUPPORTED_LANGUAGES[
        (SUPPORTED_LANGUAGES.indexOf(current) + 1) % SUPPORTED_LANGUAGES.length
      ];

    i18n.changeLanguage(next);
  };

  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.soundSettings}>
          <Button onClick={handleToggleMusic}>
            <Icon
              name={gameSettings.isMusicEnabled ? 'music-on' : 'music-off'}
            />
          </Button>

          <Button onClick={handleToggleSFX}>
            <Icon name={gameSettings.isSFXEnabled ? 'sound-on' : 'sound-off'} />
          </Button>

          <Button onClick={handleChangeLng}>
            {i18nTranslation.resolvedLanguage?.toUpperCase()}
          </Button>
        </div>
      </div>
    </div>
  );
};
