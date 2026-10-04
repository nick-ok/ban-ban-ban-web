import { Activity, type ReactNode } from 'react';

import {
  type ContentType,
  type TitleType,
  type UserType,
} from '@/entities/message';
import { ERROR_MESSAGES } from '@/entities/message/config/error-messages';
import type { MessageTemplate } from '@/entities/scenario';
import { useTranslation, type TFunction } from '@/features/i18n';
import { ensureArray } from '@/shared/lib';
import { Button } from '@/shared/ui';

import styles from './GameClueCard.module.css';

interface Props {
  template: MessageTemplate;
}

const GAME_CLUE_USERS: Record<UserType, ReactNode> = {
  male: (
    <img
      className={styles.avatarImg}
      src="/images/message/male/avatar-male-11.webp"
    />
  ),
  female: (
    <img
      className={styles.avatarImg}
      src="/images/message/female/avatar-female-15.webp"
    />
  ),
  anonymous: (
    <img className={styles.avatarImg} src="/images/message/avatar-anon.webp" />
  ),
  bot: (
    <img className={styles.avatarImg} src="/images/message/avatar-bot.webp" />
  ),
  ai: <img className={styles.avatarImg} src="/images/message/avatar-ai.webp" />,
};

const GAME_CLUE_TITLES: Record<TitleType, ReactNode> = {
  empty: <div>EMPTY</div>,
  hype: <img className={styles.titleImg} src="/images/message/fire.webp" />,
  angry: <img className={styles.titleImg} src="/images/message/angry.webp" />,
  verified: (
    <img className={styles.titleImg} src="/images/message/verified.png" />
  ),
  vip: <img className={styles.titleImg} src="/images/message/vip.png" />,
  virus: <img className={styles.titleImg} src="/images/message/virus.png" />,
};

const getMessageTextExample = (contentType: ContentType, t: TFunction) => {
  const text = t('screens.game.messageTextExample');

  const GAME_CLUE_CONTENTS: Record<ContentType, ReactNode> = {
    normal: <div>{text}</div>,
    fwords: <div>!@#$4 @#%!$ @#$#@</div>,
    caps: <div>{text.toUpperCase()}</div>,
    binary: <div>10001 001011 1010100</div>,
    error: <div className={styles.errorTxt}>{ERROR_MESSAGES[0]}</div>,
    blurred: <div className={styles.blurredTxt}>{text}</div>,
    ad: (
      <div className={styles.ad}>
        <span>{text}</span>
        <Button className={styles.adBtn}>
          {t('screens.game.adButtonText')}
        </Button>
      </div>
    ),
    audio: (
      <img
        className={styles.voiceMessageImg}
        src="/images/message/voice-message.webp"
      />
    ),
  };

  return GAME_CLUE_CONTENTS[contentType];
};

export const GameClueCard = ({ template }: Props) => {
  const { t } = useTranslation();

  const users = ensureArray(template.user);
  const titles = ensureArray(template.title);
  const contents = ensureArray(template.content);
  const likes = template.likes;
  const reports = template.reports;

  return (
    <div className={styles.root}>
      <Activity
        mode={users.length > 0 || titles.length > 0 ? 'visible' : 'hidden'}
      >
        <div className={styles.head}>
          <div className={styles.userTypes}>
            {users.map((user) => (
              <div key={user} className={styles.userTypeItem}>
                {GAME_CLUE_USERS[user]}
              </div>
            ))}
          </div>

          <div className={styles.titleTypes}>
            {titles.map((title) => (
              <div key={title} className={styles.titleTypeItem}>
                {GAME_CLUE_TITLES[title]}
              </div>
            ))}
          </div>
        </div>
      </Activity>

      <Activity mode={contents.length > 0 ? 'visible' : 'hidden'}>
        <div className={styles.contents}>
          {contents.map((content) => (
            <div key={content} className={styles.contentItem}>
              {getMessageTextExample(content, t)}
            </div>
          ))}
        </div>
      </Activity>

      <Activity mode={likes || reports ? 'visible' : 'hidden'}>
        <div className={styles.footer}>
          {likes && (
            <div className={styles.counter}>
              <img
                src="/images/message/like.png"
                className={styles.counterImg}
              />
              <span>{likes}</span>
            </div>
          )}

          {reports && (
            <div className={styles.counter}>
              <img
                src="/images/message/warning.png"
                className={styles.counterImg}
              />
              <span>{reports}</span>
            </div>
          )}
        </div>
      </Activity>
    </div>
  );
};
