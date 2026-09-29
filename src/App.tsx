import { useRef, useState } from 'react';

import { motion } from 'motion/react';

import { GameSettingsDrawer } from '@/entities/game-settings';
import { useNavigationStore } from '@/entities/navigation';
import { randomNumberInRange } from '@/shared/lib';
import { PhoneFrame } from '@/shared/ui';

import { BootstrapScene } from './scenes/bootstrap';
import { BriefingScene } from './scenes/briefing';
import { DayEndScene } from './scenes/dayend';
import { GameScene } from './scenes/game';
import { GameEndScene } from './scenes/game-end';
import { IntroScene } from './scenes/intro';
import { LobbyScene } from './scenes/lobby';
import { LockScene } from './scenes/lock';
import { NotificationsCenterScene } from './scenes/notifications-center';
import { PreviewScene } from './scenes/preview';

import styles from './App.module.css';

const scenes = {
  bootstrap: BootstrapScene,
  intro: IntroScene,
  lock: LockScene,
  lobby: LobbyScene,
  notificationsCenter: NotificationsCenterScene,
  preview: PreviewScene,
  briefing: BriefingScene,
  game: GameScene,
  dayend: DayEndScene,
  gameend: GameEndScene,
};

const getRandomTarget = () => ({
  target: {
    x: randomNumberInRange({ min: -12, max: 12 }),
    y: randomNumberInRange({ min: -12, max: 12 }),
    scale: randomNumberInRange({ min: 1.08, max: 1.18, fractionDigits: 2 }),
    rotate: randomNumberInRange({ min: -0.8, max: 0.8, fractionDigits: 1 }),
  },
  duration: randomNumberInRange({ min: 10, max: 20, fractionDigits: 1 }),
});

function App() {
  const [state, setState] = useState(getRandomTarget);

  const sceneRef = useRef<HTMLDivElement>(null);

  const scene = useNavigationStore((s) => s.scene);

  const SceneComponent = scenes[scene] || scenes.lock;

  const handleAnimationComplete = () => {
    setState(getRandomTarget());
  };

  return (
    <div className={styles.app}>
      <motion.img
        src="/images/wallpaper.webp"
        className={styles.wallpaper}
        animate={state.target}
        transition={{
          duration: state.duration,
          ease: 'easeInOut',
        }}
        onAnimationComplete={handleAnimationComplete}
        alt="Game Wallpaper"
      />

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
