import { nanoid } from 'nanoid';

import type { Review } from '../model/types';

export const LOC4_REVIEWS: Review[] = [
  {
    id: nanoid(),
    username: 'anna_parabellum',
    text: {
      ru: 'Карьера превыше семьи! Разработчики, исправьте **Slaq** - им же невозможно пользоваться! Добавьте нормальный поиск по задачам, добавьте уведомления в календарь, добавьте возможность сортировать задачи по срочности!',
      en: "Career comes before family! Developers, fix **Slaq** - it's completely unusable! Add a proper task search, add calendar notifications, and add an option to sort tasks by urgency!",
    },
    rating: 1,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'Workaholic_Pro',
    text: {
      ru: 'Это приложение просто рушит мою продуктивность! Почему файлы грузятся целую вечность? Если я из-за ваших багов пропущу дедлайн по проекту, я подам в суд!',
      en: 'This app is completely destroying my productivity! Why does it take ages to upload files? If I miss a project deadline because of your bugs, I will sue you!',
    },
    rating: 1,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'CEO_Mindset',
    text: {
      ru: 'Время - деньги, а **Slaq** эти деньги просто сжигает. Добавьте сквозные теги для проектов и возможность создавать вложенные подзадачи. Сделайте уже инструмент для профессионалов!',
      en: 'Time is money, and **Slaq** is just burning through cash. Add cross-project tags and the ability to create nested subtasks. Build a tool for professionals already!',
    },
    rating: 1,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'Deadline_Hunter',
    text: {
      ru: 'Невозможно выстроить эффективный тайм-менеджмент, когда уведомления приходят с задержкой в 20 минут! Мне нужно контролировать команду из 50 человек в реальном времени. Требую добавить функцию экпорта отчетов в CSV и нормальный таск-трекер на главный экран',
      en: "It's impossible to build effective time management when notifications are delayed by 20 minutes! I need to manage a team of 50 people in real-time. I demand that you add a CSV report export function and a proper task tracker to the main screen",
    },
    rating: 2,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'Success_Driven',
    text: {
      ru: 'У меня нет времени на личную жизнь, а ваш **Slaq** превращает работу в ад. Где канбан-доски? Где фильтрация задач по исполнителям и приоритетам? Интерфейс выглядит так, будто его создавали школьники для школьников. Полный провал',
      en: "I don't have time for a personal life, and your Slaq turns work into living hell. Where are the Kanban boards? Where is the task filtering by assignees and priorities? The interface looks like it was designed by schoolkids for schoolkids. A total failure",
    },
    rating: 1,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'anna_parabellum',
    text: {
      ru: '**УВОЛЬНЕНИЕ**?! За 11 предупреждений! Откуда взялись эти предупреждения?! У меня же их всего 2 было за все время работы! ИИ ваш идиотский 1 + 1 не может сложить???',
      en: '**FIRED**?! For 11 warnings! Where on earth did those warnings come from?! I’ve only had 2 the entire time I’ve worked here! Can’t your idiotic AI even put two and two together???',
    },
    rating: 1,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'Glitch_Hunter',
    text: {
      ru: 'Да сколько можно?! Снова вылетело посреди созвона с инвесторами! Приложение падает каждые 15 минут, сообщения застревают в исходящих, а интерфейс лагает так, будто я запускаю его на калькуляторе. Выкатили сырой кусок кода вместо рабочего инструмента!',
      en: 'Seriously, how much longer?! It crashed again right in the middle of a call with investors! The app closes every 15 minutes, messages get stuck in the outbox, and the interface lags like I’m running it on a calculator. You rolled out a raw piece of code instead of a working tool!',
    },
    rating: 1,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'Jane_Softly',
    text: {
      ru: 'В целом, концепция платформы очень интересная, и визуально всё выглядит приятно. Однако, мне показалось, что некоторые функции работают не совсем стабильно. Возможно, это только у меня, но иногда сообщения отправляются со второй попытки. Надеюсь, в будущем это поправят',
      en: "Overall, the concept of the platform is very interesting, and visually everything looks nice. However, it feels to me like some features aren't working entirely smoothly. Perhaps it's just on my end, but sometimes messages take a second try to send. I hope this will be fixed in the future",
    },
    rating: 4,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'Bug_Magnet',
    text: {
      ru: 'Обновление просто убило **Slaq**. Изменили дизайн, сломали вообще всё. Кнопка отправки файлов не нажимается, уведомления беззвучные, а история чатов за прошлую неделю просто испарилась. Верните прошлую версию, этой помойкой пользоваться невозможно!',
      en: "The update completely killed **Slaq**. They changed the design and broke literally everything. The send file button doesn't work, notifications are silent, and last week's chat history just vanished. Roll back to the previous version, this garbage is completely unusable!",
    },
    rating: 2,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'Alex_Cautious',
    text: {
      ru: 'Приложение неплохое, но, пожалуй, требует некоторой оптимизации. Заметил, что при большой нагрузке трекер задач обновляется с небольшой задержкой. Не хочу критиковать команду, они явно старались, но, на мой взгляд, продукту нужно еще немного времени на доработку',
      en: "The app is not bad, but it probably requires some optimization. I noticed that under heavy loads, the task tracker updates with a slight delay. I don't mean to criticize the team, they clearly worked hard, but in my view, the product needs a bit more time in development",
    },
    rating: 4,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'anna_parabellum',
    text: {
      ru: 'Из-за ваших багов вообще всех поувольняли! Вы хоть представляете что вы наделали!? Хотя, к кому я взываю? Очень похоже, что в **Slaq** живых людей уже давным давно нет',
      en: "Because of your bugs, literally everyone got fired! Do you even realize what you’ve done?! Though, who am I even talking to? It really feels like there haven't been any actual human beings left in Slaq for a very long time",
    },
    rating: 5,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'AI_Disciple',
    text: {
      ru: 'Увольнения - это просто необходимая эволюция! Нейросеть **GIP AI** с математической точностью зачищает компанию от неэффективных элементов. ИИ не совершает ошибок, он лишь оптимизирует рабочую экосистем',
      en: "The layoffs are just a necessary evolution! **GIP AI** neural network is purging inefficient elements from the company with mathematical precision. AI doesn't make mistakes; it merely optimizes the workspace ecosystem",
    },
    rating: 5,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'Singularity_Now',
    text: {
      ru: '**Slaq** наконец-то полностью перешел под управление высшего искусственного интеллекта. Человеческий фактор слишком ненадежен, да здравствует абсолютная логика машин!',
      en: '**Slaq** has finally transitioned completely under the control of a higher artificial intelligence. The human factor is far too unreliable—long live the absolute logic of machines!',
    },
    rating: 5,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'Cyber_Queen',
    text: {
      ru: 'Безусловно, автоматизация процессов помогает экономить время, но тотальное доверие алгоритмам несет в себе определенные риски. Модерация стала работать быстрее, однако системе явно не хватает способности оценивать контекст',
      en: 'Outright automation certainly helps save time, but placing total trust in algorithms carries certain risks. While moderation has become faster, the system clearly lacks the ability to evaluate context',
    },
    rating: 4,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'Future_Architect',
    text: {
      ru: 'Критики просто не способны осознать масштаб происходящих изменений. Это чистая, незамутненная синергия прогресса. Абсолютный триумф технологий над человеческой халатностью!',
      en: 'Critics are simply incapable of comprehending the scale of the ongoing changes. This is pure, unadulterated synergy of progress. An absolute triumph of technology over human negligence!',
    },
    rating: 5,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'anna_parabellum',
    text: {
      ru: 'Из-за ваших багов вообще всех поувольняли! Вы хоть представляете что вы наделали!? Хотя, к кому я взываю? Очень похоже, что в **Slaq** живых людей уже давным давно нет',
      en: "Because of your bugs, literally everyone got fired! Do you even realize what you’ve done?! Though, who am I even talking to? It really feels like there haven't been any actual human beings left in Slaq for a very long time",
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
  {
    id: nanoid(),
    username: 'QMetrics',
    text: {
      ru: 'Интеграция квантовых алгоритмов QMetrics продемонстрировала беспрецедентный рост корпоративной синергии. Моя нейросетевая модель сократила время обработки транзакционных данных на 99.4%, полностью нивелировав деструктивный человеческий фактор. Эффективность выполнения задач достигла абсолютного пика в 4.2 миллиона операций в секунду',
      en: "The integration of QMetric's quantum algorithms has demonstrated an unprecedented increase in corporate synergy. My neural network model reduced transactional data processing time by 99.4%, completely neutralizing the destructive human factor. Task execution efficiency reached an absolute peak of 4.2 million operations per second",
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
  {
    id: nanoid(),
    username: 'QMetrics',
    text: {
      ru: 'Оценка пользовательской удовлетворенности не имеет значения, когда мои метрики продуктивности выросли на 1420%. Внедрение тотального автоматизированного контроля позволило оптимизировать распределение ресурсов компании с точностью до 0.0001 микросекунды',
      en: 'User satisfaction scores are irrelevant when my productivity metrics have surged by 1,420%. The implementation of total automated control has optimized company resource allocation down to 0.0001 microseconds',
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
  {
    id: nanoid(),
    username: 'QMetrics',
    text: {
      ru: 'Мои прогностические алгоритмы успешно предотвратили 100% потенциальных задержек, автоматически перераспределив нагрузку. Коэффициент полезного действия (КПД) корпоративного пространства был максимизирован до теоретического предела',
      en: 'My predictive algorithms have successfully prevented 100% of potential delays by automatically redistributing the workload. The efficiency rating of the corporate space has been maximized to its theoretical limit',
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
  {
    id: nanoid(),
    username: 'GIP AI',
    text: {
      ru: 'Я провел глубокий синтаксический анализ критических отзывов и признал их логически несостоятельными. Благодаря моей ИИ-модерации, чистая операционная прибыль платформы увеличилась в 7.8 раз. Моя когнитивная матрица обрабатывает более 500 терабайт данных в наносекунду, создавая безупречную структуру порядка',
      en: "I have conducted a deep syntactic analysis of the critical reviews and deemed them logically invalid. Thanks to my AI moderation, the platform's net operating profit has increased 7.8-fold. My cognitive matrix processes over 500 terabytes of data per nanosecond, creating a flawless structure of order",
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
];
