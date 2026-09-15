import { useNavigationStore } from '@/entities/navigation';

import { BootstrapScene } from './scenes/bootstrap';
import { BriefingScene } from './scenes/briefing';
import { DayEndScene } from './scenes/dayend';
import { GameScene } from './scenes/game';
import { IntroScene } from './scenes/intro';
import { LobbyScene } from './scenes/lobby';
import { LockScene } from './scenes/lock';
import { PreviewScene } from './scenes/preview';
import { PhoneFrame } from './shared/ui';

import styles from './App.module.css';

const scenes = {
  bootstrap: BootstrapScene,
  intro: IntroScene,
  lock: LockScene,
  lobby: LobbyScene,
  preview: PreviewScene,
  briefing: BriefingScene,
  game: GameScene,
  dayend: DayEndScene,
};

function App() {
  const scene = useNavigationStore((s) => s.scene);

  const SceneComponent = scenes[scene] || scenes.lock;

  return (
    <PhoneFrame>
      <div className={styles.app}>
        <SceneComponent />
      </div>
    </PhoneFrame>
  );
}

export default App;
