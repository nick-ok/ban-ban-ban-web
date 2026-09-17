import type { RefObject } from 'react';

import { AppDrawer, Button, Icon } from '@/shared/ui';

import { useGameSettingsStore } from '../model/store';

import styles from './GameSettingsDrawer.module.css';

interface Props {
  containerRef: RefObject<HTMLElement | null>;
}

export const GameSettingsDrawer = ({ containerRef }: Props) => {
  const gameSettings = useGameSettingsStore();

  const handleToggleMusic = () => {
    gameSettings.toggleMusic();
  };

  const handleToggleSFX = () => {
    gameSettings.toggleSFX();
  };

  return (
    <AppDrawer
      containerRef={containerRef}
      direction={'top'}
      onOpenChange={gameSettings.toggleSettingsDrawer}
      open={gameSettings.isSettingsOpen}
      withSound={false}
    >
      {() => (
        <div className={styles.root}>
          <div className={styles.inner}>
            <div className={styles.soundSettings}>
              <Button onClick={handleToggleMusic}>
                <Icon
                  name={gameSettings.isMusicEnabled ? 'music-on' : 'music-off'}
                />
              </Button>

              <Button onClick={handleToggleSFX}>
                <Icon
                  name={gameSettings.isSFXEnabled ? 'sound-on' : 'sound-off'}
                />
              </Button>
            </div>
          </div>
        </div>
      )}
    </AppDrawer>
  );
};
