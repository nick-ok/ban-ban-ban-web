import type { RefObject } from 'react';

import { AudioService } from '@/shared/lib';
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

    const updatedMusicEnabled = useGameSettingsStore.getState().isMusicEnabled;

    AudioService.syncMusicVolume(updatedMusicEnabled);
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

              <Button onClick={() => gameSettings.toggleSFX()}>
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
