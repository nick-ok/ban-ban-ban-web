import { nanoid } from 'nanoid';

import type { Review } from '../model/types';

export const LOC2_REVIEWS: Review[] = [
  {
    id: nanoid(),
    username: 'nexalith_10',
    text: {
      ru: 'Не понимаю зачем вообще нужно это приложение и кто вообще им пользуется',
      en: "I honestly don't understand the point of this app and who even uses it.",
    },
    rating: 1,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'vireon_22',
    text: {
      ru: 'Надоела эта @#$!@#$ ругань в этом @#$!@#$ приложении! ЗАЙМИТЕСЬ МОДЕРАЦИЕЙ',
      en: 'I am sick and tired of this @#$!@#$ bickering in this @><$!@#$ app! START MODERATING IT!',
    },
    rating: 1,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'zephyros',
    text: {
      ru: 'А это нормально что в чате нашего дома какие-то никому не известные люди???',
      en: 'Is it even normal that there are random, completely unknown people in our building group chat???',
    },
    rating: 2,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'quorix_ok_ok',
    text: {
      ru: 'Не могу понять почему ваша система относится к "умному чату"... Более унылой экосистемы чем ваша нигде не встречал',
      en: "I fail to see how your system is considered a 'smart chat'... I haven’t encountered a more dismal ecosystem anywhere in my life.",
    },
    rating: 2,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'anna99',
    text: {
      ru: 'Могла бы поставить 0, поставила бы. Пользы 0, смысла 0, адекватности 0',
      en: 'If I could give it 0 stars, I would. Zero use, zero sense, zero sanity.',
    },
    rating: 1,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'anna99',
    text: {
      ru: 'Уже получше, чуть чуть исправила оценку. Хотя бы можно иногда пользоваться чатом. Недолго',
      en: "It's getting there, so I updated my review a bit. At least the chat is usable once in a while. Just don't expect it to last.",
    },
    rating: 1,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'сymbral007',
    text: {
      ru: 'НЕ ПОНИМАЮ, какого #$%##@#$ меня забанили! Поддержка НЕ ОТВЕЧАЕТ. #$%##@#$!!!',
      en: 'I have NO IDEA WHY the #$%##@#$ I was banned! Support is GHOSTING me. #$%##@#$!!!',
    },
    rating: 1,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'helen_1010',
    text: {
      ru: 'Ой, ну хоть почистили немного. Приложение иногда даже и полезное',
      en: 'Oh wow, at least it’s a bit cleaner now. The app can actually be pretty handy from time to time.',
    },
    rating: 3,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'cyber_paul',
    text: {
      ru: 'Надоели пуши на каждый чих. Постоянно пропускаю важную информацию из-за того что их чересчур много',
      en: 'Fed up with push notifications for every little thing. I keep missing important updates because of the constant spam',
    },
    rating: 2,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'user_12009898923424',
    text: {
      ru: 'Не могу зайти под новым аккаунтом, прошлый был забанен по непонятной причине. Издевательство какое-то',
      en: "Can't get in with my new account because my old one got banned for god knows what reason. This is just ridiculous.",
    },
    rating: 2,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'aethyron',
    text: {
      ru: 'Прекрасное приложение, лучшее на рынке. Очень дружное комьюнити',
      en: 'Wonderful app, the best on the market. Very friendly community',
    },
    rating: 5,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'сymbral',
    text: {
      ru: 'Есть незначительные баги, но в целом пользоваться довольно приятно',
      en: 'Has a few minor glitches here and there, but on the whole, it’s a really nice app to use.',
    },
    rating: 4,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'anna99',
    text: {
      ru: 'Давно не заходила в приложение, но теперь вижу что разрабы проделали действительно хорошую работу!',
      en: "Haven't logged in for ages, but I can tell the devs have put in some serious work! Really good job.",
    },
    rating: 4,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'Solvane',
    text: {
      ru: 'Мне все нравится, не согласен с негативными отзывами. Поддержка работает безупречно, модерация - на высоте. Прекрасно помогает держать связь с соседями и решать сообща очень многие вопросы, которые до того казались неразрешимыми',
      en: 'I love everything about it and totally disagree with the negative reviews. Support works flawlessly, and moderation is top-notch. It’s amazing for staying in touch with neighbors and team-solving so many issues that seemed impossible before.',
    },
    rating: 5,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'nyxaris',
    text: {
      ru: 'Мне норм, даже с парочкой соседей познакомился',
      en: "It's fine for me, I even met a couple of neighbors.",
    },
    rating: 4,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'dravynor',
    text: {
      ru: 'У этого приложения нет конкурентов',
      en: 'This app has no competition',
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
  {
    id: nanoid(),
    username: 'elixar',
    text: {
      ru: 'Просто невероятный софт! Моя жизнь разделилась на "до" и "после". Спасибо разработчикам!',
      en: "Absolutely mind-blowing software! My life is literally divided into 'before' and 'after.' Thank you to the devs!",
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
  {
    id: nanoid(),
    username: 'thalvion',
    text: {
      ru: 'Какое счастье! В нашем чате царит атмосфера безупречной любви и взаимопонимания. Модерация работает как швейцарские часы с искусственным интеллектом - любые споры о парковке превращаются в изысканную светскую беседу',
      en: 'What a joy! Our chat is filled with an atmosphere of perfect love and harmony. The moderation is like AI-driven Swiss watchmaking—even parking arguments transform into a sophisticated, polite chat',
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
  {
    id: nanoid(),
    username: 'myrrak',
    text: {
      ru: 'Удивительно отзывчивое комьюнити! Вчера я случайно оставил в лифте пакет с мусором, так соседи нашли меня через чат, сами донесли его до бака, а в комментариях пожелали мне хорошего дня и крепкого здоровья!',
      en: 'An amazingly responsive community! Yesterday I accidentally left a trash bag in the elevator, and my neighbors found me through the chat, carried it to the dumpster themselves, and wished me a great day and good health in the comments!',
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
  {
    id: nanoid(),
    username: 'anna99',
    text: {
      ru: 'Интерфейс интуитивно понятный, ни одного бага, ни единого лага, только чистый, кристальный восторг. Рекомендую скачивать всем жителям планеты, даже если у вас нет дома!',
      en: 'Super intuitive interface, zero bugs, zero lag—just pure, crystal-clear bliss. Highly recommend downloading it to every single person on Earth, even if you’re homeless!',
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
];
