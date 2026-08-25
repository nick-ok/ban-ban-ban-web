import { AnimatePresence, motion } from 'motion/react';

import { useNavigationStore } from '@/entities/navigation';
import { PhoneFrame } from '@/widgets/phone-frame';

import { LobbyScene } from './scenes/lobby';
import { LockScene } from './scenes/lock';

const Placeholder = ({ name }: { name: string }) => (
  <div style={{ padding: 40, textAlign: 'center', color: '#888' }}>{name}</div>
);

const scenes = {
  lock: LockScene,
  lobby: LobbyScene,
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
      <AnimatePresence mode="wait">
        <motion.div
          key={scene}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ width: '100%', height: '100%' }}
        >
          <SceneComponent />
        </motion.div>
      </AnimatePresence>
    </PhoneFrame>
  );
}

export default App;
