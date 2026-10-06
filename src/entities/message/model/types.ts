import * as PIXI from 'pixi.js';

import type { AvatarAssetKey } from '../config/assets';

export type UserType = 'male' | 'female' | 'anonymous' | 'bot' | 'ai';

export type ContentType =
  | 'normal'
  | 'blurred'
  | 'ad'
  | 'caps'
  | 'fwords'
  | 'binary'
  | 'audio'
  | 'error';

export type TitleType =
  'empty' | 'hype' | 'angry' | 'verified' | 'virus' | 'vip';
export type MessageSide = 'left' | 'right';

export type BanAction = 'ban' | 'longBan' | 'none';

export interface Message {
  id: string;
  user: UserType;
  avatarKey: AvatarAssetKey;
  content: {
    type: ContentType;
    text: string;
    hasLikes?: boolean;
    likes: number;
    hasReports?: boolean;
    reports: number;
  };
  title: TitleType;
  side: MessageSide;
  speed: number;
  banAction: BanAction;
}

export interface ExtendedPixiMessageContainer extends PIXI.Container {
  messageData: Message;
  isPressed?: boolean;
  holdTime: number;
  targetTime: number;
  isDying: boolean;
  dyingPhase: 'stamp' | 'eject' | 'particles' | 'done';
  dyingElapsed: number;

  dyingEffect?: {
    particles: 'positive' | 'negative';
    shake: number;
  };

  banStampState?: {
    sprite: PIXI.Sprite;
    startRotation: number;
    targetRotation: number;
    startScale: number;
    targetScale: number;
  };

  ejectState?: {
    startX: number;
    startY: number;
    velocityX: number;
    velocityY: number;
    rotationStart: number;
    rotationTarget: number;
  };

  updateProgress: (percent: number) => void;

  progressMask?: PIXI.Graphics;
}

export type ScenarioMessageEmotion = 'angry' | 'ai' | 'normal' | 'hype';

export type ScenarioMessages = Record<ScenarioMessageEmotion, string[]>;
