import type { RefObject } from 'react';

import { AppDrawer } from '@/shared/ui';

import { useGameSettingsStore } from '../model/store';
import { GameSettingsContent } from './GameSettingsContent';

interface Props {
  containerRef: RefObject<HTMLElement | null>;
}

export const GameSettingsDrawer = ({ containerRef }: Props) => {
  const gameSettings = useGameSettingsStore();

  return (
    <AppDrawer
      containerRef={containerRef}
      direction={'top'}
      onOpenChange={gameSettings.toggleSettingsDrawer}
      open={gameSettings.isSettingsOpen}
      backgroundColor={'var(--color-white)'}
    >
      {() => (
        <div style={{ padding: 'var(--space-20) 0 var(--space-10)' }}>
          <GameSettingsContent />
        </div>
      )}
    </AppDrawer>
  );
};
