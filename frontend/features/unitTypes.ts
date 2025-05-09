// ユニットタイプ（仕様書のUnitType）型定義
export interface UnitType {
  id: string;
  name: string;
  element: 'FIRE' | 'WATER' | 'WIND' | 'EARTH' | 'LIGHT' | 'DARK';
  tier: number;
  rarity: 'COMMON' | 'RARE' | 'EPIC' | 'LEGENDARY' | 'MYTHIC';
  attack: number;
  health: number;
  abilities: Ability[];
  imageUrl: string;
}

export interface Ability {
  id: string;
  name: string;
  description: string;
  triggerType: string;
  effects: Effect[];
}

export interface Effect {
  type: string;
  target: string;
  value: number;
}

// ユニットタイプ管理用の初期データ例
export const initialUnitTypes: UnitType[] = [
  {
    id: 'fire_1',
    name: 'フレイムスピリット',
    element: 'FIRE',
    tier: 1,
    rarity: 'COMMON',
    attack: 3,
    health: 4,
    abilities: [],
    imageUrl: '/fire_1.png',
  },
  // ...他のユニットタイプもここに追加...
];
