import { useNavigationStore } from '@/entities/navigation';
import { PhoneFrame } from '@/widgets/phone-frame';

import { GameScene } from './scenes/game';
import { LobbyScene } from './scenes/lobby';
import { LockScene } from './scenes/lock';
import { PreviewScene } from './scenes/preview';

import styles from './App.module.css';

const Placeholder = ({ name }: { name: string }) => (
  <div style={{ padding: 40, textAlign: 'center', color: '#888' }}>{name}</div>
);

const scenes = {
  bootstrap: () => <Placeholder name="Bootstrap" />,
  lock: LockScene,
  lobby: LobbyScene,
  preview: PreviewScene,
  briefing: () => <Placeholder name="Briefing" />,
  game: GameScene,
  dayend: () => <Placeholder name="Day End" />,
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
