import { nanoid } from 'nanoid';

import type { Review } from '../model/types';

export const LOC5_REVIEWS: Review[] = [
  {
    id: nanoid(),
    username: 'anna_parabellum',
    text: {
      ru: 'Все что мне остается - это сидеть и кропать статьи сюда на **ReadIt** в надежде быть услышанной... Ресурс ужасный, но альтернатив нет, все остальное забито нейрослопом и однообразной ерундой',
      en: 'All I have left to do is sit here and crank out articles on ReadIt, hoping to be heard... The platform is terrible, but there are no alternatives—everything else is clogged with slop and repetitive nonsense',
    },
    rating: 1,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'Human_Writer_99',
    text: {
      ru: 'Захожу в топ **ReadIt**, а там тонны статей, написанных как под копирку. Никакого личного опыта, никакого живого стиля - сплошная стена текста от ИИ',
      en: 'I check the top posts on **ReadIt**, and it’s just tons of articles that look exactly the same. No personal experience, no unique voice—just a solid wall of AI text',
    },
    rating: 1,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'The_Last_Reader',
    text: {
      ru: 'Раньше я приходил на **ReadIt** за уникальными историями от живых людей, а теперь приходится продираться сквозь бесконечные ИИ-гайды, которые рерайтят сами себя',
      en: 'I used to come to **ReadIt** for unique stories from real people, but now I have to wade through endless AI guides that just rewrite themselves',
    },
    rating: 2,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'Skeptic_Eye',
    text: {
      ru: 'Открываешь интересную дискуссию, хочешь почитать мнения, а там пятиабзацные "вежливые" ответы, составленные LLM-ками. Зачем мне тратить время на чтение того, что никто даже не удосужился написать сам?',
      en: "You open an interesting discussion, wanting to read some opinions, and all you find are five-paragraph 'polite' responses churned out by LLMs. Why should I waste my time reading something that nobody even bothered to write themselves?",
    },
    rating: 1,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'anna99',
    text: {
      ru: 'Да сколько можно лить эту воду?! Открываешь пост, а там бесконечная простыня текста на полчаса чтения, где одна и та же мысль мусолится по кругу разными словами',
      en: 'Seriously, how much more of this filler text do we have to take?! You open a post, and it’s an endless wall of text that takes half an hour to read, just rehashing the exact same idea over and over in different words',
    },
    rating: 1,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'anna_parabellum',
    text: {
      ru: 'РАЗБАНЬТЕ МЕНЯ!!! Хотя бы на один вечер! Отвечу только как надо парочке мерзавцев! Поставлю их на место, а то обнаглели!',
      en: "UNBAN ME!!! Just for one evening! I’ll only reply to a couple of scumbags as they deserve! I’ll put them in their place, they've completely crossed the line!",
    },
    rating: 1,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'Fact_Checker_Doc',
    text: {
      ru: 'Площадка превратилась в токсичный ад. Я потратил три дня на разбор сложной темы, привёл сухую статистику, графики, ссылки на научные исследования. Результат? Бан! Зато кликбейтный бред и посты, которые стравливают людей в комментариях, висят в топе',
      en: 'The platform has turned into a toxic hellhole. I spent three days analyzing a complex topic, providing dry statistics, charts, and links to peer-reviewed studies. The result? A ban! Meanwhile, clickbait garbage and posts designed to make people fight in the comments are sitting at the top',
    },
    rating: 1,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'helen_1010',
    text: {
      ru: 'Если вы не разжигаете ненависть и не устраиваете драму в комментариях, на **ReadIt** вам делать нечего. Забанили за "низкую эмоциональную ценность" текста',
      en: "If you're not spreading hate or starting drama in the comments, you have no business being on ReadIt. Got banned for the 'low emotional value' of my text",
    },
    rating: 1,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'Lover_X',
    text: {
      ru: 'Наконец-то **ReadIt ожил**! Раньше сюда зайти нельзя было - сплошные унылые лекции, душные графики и профессора со своими "фактами". Скукотища! В комментариях настоящая гладиаторская арена, искры летят! Модераторам респект, теперь хоть читать весело!',
      en: "Finally, ReadIt has come to life! You couldn't even scroll through this place before—just endless dry lectures, boring charts, and professors with their 'facts'. Total snooze fest! The comment section is a straight-up gladatorial arena, sparks are flying! Props to the moderators, it’s actually fun to read now!",
    },
    rating: 5,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'chaos_enj',
    text: {
      ru: 'Обожаю новый **ReadIt**! Модерация просто гениальна - она моментально зачищает платформу от душнил, которые пишут унылые простыни. Кому нужна ваша объективность? Нам нужен хайп, мемы и жесткие споры!',
      en: 'I absolutely love the new **ReadIt**! Moderation is pure genius—it instantly purges the party poopers who write boring walls of text. Who needs your objectivity anyway? We want clout, memes, and fierce arguments!',
    },
    rating: 5,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'anna_parabellum',
    text: {
      ru: 'Народ! Собираемся сегодня на площади! Заставим нас услышать! Никто не имеет право затыкать нам рты и решать что "правильно" и что "неправильно"! Мы сами себе закон! И те, кто с нами не согласен - тем хуже для вас!',
      en: "Folks! We are gathering at the square today! We will make them hear us! No one has the right to shut our mouths and decide what is 'right' and what is 'wrong'! We are the law unto ourselves! And those who disagree with us—so much the worse for you!",
    },
    rating: 5,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'Rebel_Heart_X',
    text: {
      ru: 'Сегодня мы сорвем с них маски и выясним, кто здесь тварь дрожащая, а кто право имеет!',
      en: 'Today, we rip off their masks and find out who is a submissive coward and who actually holds the power!',
    },
    rating: 5,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'Truth_Enforcer',
    text: {
      ru: 'Время тотального разбора полетов! Мы устроим им народный аудит!',
      en: 'It’s time for a total, ultimate showdown! We will force a public audit on them!',
    },
    rating: 4,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'just_do_it!!!',
    text: {
      ru: 'Хватит виртуальных споров, пора решать вопросы жестко и в реале!',
      en: 'Enough virtual arguments; it’s time to settle scores hard and in real life!',
    },
    rating: 5,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'voiceOfFREEDOM',
    text: {
      ru: 'Кто прав, а кто виноват — решит улица. Если вы еще помните, что такое гордость, будьте сегодня на площади. Мы вернем себе контроль над своей жизнью!',
      en: 'The streets will decide who is right and who is wrong. If you still remember what pride means, be at the square today. We are taking back control of our lives!',
    },
    rating: 5,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'anna_parabellum',
    text: {
      ru: 'Народ! Собираемся сегодня на площади! Заставим нас услышать! Никто не имеет право затыкать нам рты и решать что "правильно" и что "неправильно"! Мы сами себе закон! И те, кто с нами не согласен - тем хуже для вас!',
      en: "Folks! We are gathering at the square today! We will make them hear us! No one has the right to shut our mouths and decide what is 'right' and what is 'wrong'! We are the law unto ourselves! And those who disagree with us—so much the worse for you!",
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
  {
    id: nanoid(),
    username: 'Awakened_Soul',
    text: {
      ru: 'Спасибо **ReadIt** за то, что сорвал покровы! Хватит быть послушным стадом! Пора выходить на улицы и возвращать себе реальный мир. Встречаемся на площади!',
      en: 'Thank you, **ReadIt**, for tearing down the veil! Stop being a submissive herd! It’s time to take to the streets and reclaim the real world. See you at the square!',
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
  {
    id: nanoid(),
    username: 'new_neo',
    text: {
      ru: 'Я наконец-то проснулся. **ReadIt** стал той самой красной таблеткой. Выходите из комнат, выключайте телефоны, все на площадь! Время действовать!',
      en: ' I am finally awake. **ReadIt** became my red pill. Step out of your rooms, turn off your phones, everyone to the square! Time to act! ',
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
  {
    id: nanoid(),
    username: 'revolution8',
    text: {
      ru: 'Нас тут уже пара тысяч человек, все шумят, ломают заборы. Спросил соседа справа, против чего бастуем - он говорит, что не имеет понятия. Спросил соседа слева - тот тоже. Какой-то сюр, но адреналин так и прет! Да ладно, пофиг, главное - мы вместе!',
      en: "There are already a couple thousand of us here, everyone is making noise, tearing down fences. Asked the guy on my right what we're protesting—he says he has no clue. Asked the guy on my left—same thing. Total surrealism, but the adrenaline rush is real! Whatever, who cares, the main thing is we're together!",
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
  {
    id: nanoid(),
    username: 'anna_che',
    text: {
      ru: 'Я вообще тут случайно оказалась, шла в кофейню, а тут толпа, все орут, жгут файеры. Короче, никто ничего не знает, но фотки получаются нереальные! Стою в первом ряду, кричу со всеми!',
      en: "I actually just ended up here by accident, I was walking to a coffee shop, and suddenly there’s a crowd, everyone’s screaming and lighting flares. In short, nobody knows a thing, but the photos are turning out unreal! I'm standing in the front row, chanting with everyone!",
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
];
