import { useRef } from 'react';

import { GameSettingsDrawer } from '@/entities/game-settings';
import { useNavigationStore } from '@/entities/navigation';
import { AnimatedBackground, PhoneFrame } from '@/shared/ui';

import { BootstrapScene } from './scenes/bootstrap';
import { BriefingScene } from './scenes/briefing';
import { DayEndScene } from './scenes/dayend';
import { GameScene } from './scenes/game';
import { GameEndScene } from './scenes/game-end';
import { HowToPlay } from './scenes/how-to-play';
import { LobbyScene } from './scenes/lobby';
import { LockScene } from './scenes/lock';
import { NotificationsCenterScene } from './scenes/notifications-center';
import { PreviewScene } from './scenes/preview';

import styles from './App.module.css';

const scenes = {
  bootstrap: BootstrapScene,
  howToPlay: HowToPlay,
  lock: LockScene,
  lobby: LobbyScene,
  notificationsCenter: NotificationsCenterScene,
  preview: PreviewScene,
  briefing: BriefingScene,
  game: GameScene,
  dayend: DayEndScene,
  gameend: GameEndScene,
};

function App() {
  const sceneRef = useRef<HTMLDivElement>(null);

  const scene = useNavigationStore((s) => s.scene);

  const SceneComponent = scenes[scene] || scenes.lock;

  return (
    <div className={styles.app}>
      <AnimatedBackground />

      <PhoneFrame>
        <div className={styles.app} ref={sceneRef}>
          <SceneComponent />
        </div>

        <GameSettingsDrawer containerRef={sceneRef} />
      </PhoneFrame>
    </div>
  );
}

export default App;
