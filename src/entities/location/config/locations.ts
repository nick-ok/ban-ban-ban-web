export const LOCATIONS = [
  {
    id: 'house-chat',
    nameKey: 'locations.houseChat.name',
    descriptionKey: 'locations.houseChat.description',
    icon: '🏠',
    background: 'linear-gradient(180deg, #1a0a2e 0%, #16213e 100%)',
    scenarioIds: ['house-1', 'house-2', 'house-3'],
    unlocksAfter: undefined,
  },
  {
    id: 'spiritual-app',
    nameKey: 'locations.spiritual.name',
    descriptionKey: 'locations.spiritual.description',
    icon: '🧘',
    background: 'linear-gradient(180deg, #0a2e1a 0%, #0e3b2f 100%)',
    scenarioIds: ['spiritual-1', 'spiritual-2', 'spiritual-3'],
    unlocksAfter: 'house-chat',
  },
] as const;

export type LocationID = (typeof LOCATIONS)[number]['id'];
