import { useNavigationStore } from '@/entities/navigation';
import { PhoneFrame } from '@/widgets/phone-frame';

const Scenes = {
  lock: () => (
    <div style={{ padding: 40, textAlign: 'center', color: '#888' }}>
      LockScreen
    </div>
  ),
  lobby: () => (
    <div style={{ padding: 40, textAlign: 'center', color: '#888' }}>Lobby</div>
  ),
  game: () => (
    <div style={{ padding: 40, textAlign: 'center', color: '#888' }}>Game</div>
  ),
} as const;

function App() {
  const scene = useNavigationStore((s) => s.scene);

  const SceneComponent = Scenes[scene as keyof typeof Scenes] || Scenes.lock;

  return (
    <PhoneFrame>
      <SceneComponent />
    </PhoneFrame>
  );
}

export default App;
