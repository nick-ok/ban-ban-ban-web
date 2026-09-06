import * as PIXI from 'pixi.js';

export type UserType = 'male' | 'female' | 'anonymous' | 'bot';
export type ContentType = 'normal' | 'blurred' | 'ad' | 'caps' | 'fwords';
export type TitleType = 'empty' | 'hype' | 'dissent';
export type MessageSide = 'left' | 'right';

export type BanAction = 'ban' | 'long_ban' | 'none';

export interface Message {
  id: string;
  user: UserType;
  content: {
    type: ContentType;
    text: string;
    likes: number;
  };
  title: TitleType;
  side: MessageSide;
  speed: number;
  banAction: BanAction;
}

export interface ExtendedPixiMessageContainer extends PIXI.Container {
  messageData: Message;
}
