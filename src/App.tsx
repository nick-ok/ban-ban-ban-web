import { useNavigationStore } from '@/entities/navigation';
import { PhoneFrame } from '@/widgets/phone-frame';

import { LockScene } from './scenes/lock';

const Placeholder = ({ name }: { name: string }) => (
  <div style={{ padding: 40, textAlign: 'center', color: '#888' }}>{name}</div>
);

const scenes = {
  lock: LockScene,
  lobby: () => <Placeholder name="Lobby" />,
  game: () => <Placeholder name="Game" />,
  bootstrap: () => <Placeholder name="Bootstrap" />,
  preview: () => <Placeholder name="Preview" />,
  briefing: () => <Placeholder name="Briefing" />,
  dayend: () => <Placeholder name="Day End" />,
};

function App() {
  const scene = useNavigationStore((s) => s.scene);

  const SceneComponent = scenes[scene] || scenes.lock;

  return (
    <PhoneFrame>
      <SceneComponent />
    </PhoneFrame>
  );
}

export default App;
