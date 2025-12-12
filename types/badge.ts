export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  tier: 1 | 2 | 3;
  unlockCondition: UnlockCondition;
  celebrationMessage: string;
}

export interface UnlockCondition {
  type: 'visit_scene' | 'visit_path' | 'unlock_badges' | 'visit_count' | 'time_spent';
  value: string | number;
  operator?: 'equals' | 'greater_than' | 'includes';
}
