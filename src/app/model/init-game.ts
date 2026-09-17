import { loadMessageAssets } from '@/entities/message';
import { AudioService, subscribeAudioToStores } from '@/features/audio';

interface InitGameOptions {
  onSuccess: () => void;
  onError?: (error: unknown) => void;
}

export const initGame = async ({
  onSuccess,
  onError,
}: InitGameOptions): Promise<void> => {
  try {
    await Promise.all([loadMessageAssets(), AudioService.initAll()]);

    subscribeAudioToStores();

    onSuccess();
  } catch (error) {
    console.error('Ошибка инициализации ассетов игры:', error);

    if (onError) {
      onError(error);
    }
  }
};
