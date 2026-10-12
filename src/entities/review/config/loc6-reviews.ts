import { nanoid } from 'nanoid';

import type { Review } from '../model/types';

export const LOC6_REVIEWS: Review[] = [
  {
    id: nanoid(),
    username: 'anna_parabellum',
    text: {
      ru: 'Присоединяйся к делу Революции! Хватит слепо следовать инструкциям Системы! Долой цифровой ID гражданина Мира, долой Базовый доход, долой **NetState**!',
      en: "Join the cause of the Revolution! Stop blindly following the System's instructions! Down with the global citizen Digital ID, down with the Basic Income, down with **NetState!**",
    },
    rating: 1,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'citizen_a92d05db7b5',
    text: {
      ru: 'Пытаюсь получить цифровой ID гражданина Мира уже третью неделю! Система **NetState** постоянно выдает "Ошибку 404: Гражданин не найден". Их ИИ-ассистент в чате поддержки просто гоняет меня по кругу, требуя загрузить сканы сетчатки глаза в формате, которого даже не существует',
      en: "I’ve been trying to get my global citizen Digital ID for three weeks now! The NetState system keeps throwing 'Error 404: Citizen not found.' Their AI support bot just runs me in circles, demanding eye retina scans in a format that doesn't even exist",
    },
    rating: 1,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'citizen_3c791f24afbb',
    text: {
      ru: '**NetState** посчитал, что я одновременно нахожусь в двух странах! И автоматически лишил меня Базового дохода! Куда жаловаться? Кто виноват? Что делать?',
      en: '**NetState** assumed I was in two countries at the same time! And it automatically stripped me of my Basic Income! Who do I complain to? Who is to blame? What am I supposed to do?!',
    },
    rating: 2,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'citizen_6f77e8452d',
    text: {
      ru: 'Чтобы обновить статус в цифровом ID, мне нужно получить виртуальную подпись от трех разных нейросетей **NetState**. Но алгоритм первой сети конфликтует с алгоритмом второй, и они бесконечно отклоняют запросы друг друга!',
      en: "To update the status on my Digital ID, I need to get a virtual signature from three different NetState neural networks. But the first network's algorithm conflicts with the second one, and they endlessly reject each other's requests!",
    },
    rating: 2,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'citizen_c98fd67ab16',
    text: {
      ru: 'После 3-х недель мытарств наконец-то получил этот цифровой ID. Но сервера постоянно лежат и я не могу даже в метро зайти! Сделайте уже что-нибудь!',
      en: "After 3 weeks of pure torture, I finally got this Digital ID. But the servers are constantly down and I can't even get into the subway! Do something about it already!",
    },
    rating: 1,
    requiredProgress: 0,
  },
  {
    id: nanoid(),
    username: 'anna_parabellum',
    text: {
      ru: 'Люди, проснитесь! Не отдавайте свою жизнь на откуп этому калькулятору, который называет себя **NetState**! Присоединяйтесь к нашему революционному движению! Нас уже миллионы! Только полный отказ от цифового безумия, только полный отказ от навязанных им рекомендаций, только полный отказ от его правил!',
      en: "People, wake up! Don't surrender your lives to this glorified calculator that calls itself **NetState**! Join our revolutionary movement! There are already millions of us! Only a complete rejection of this digital madness, only a complete rejection of its forced recommendations, only a complete rejection of its rules!",
    },
    rating: 1,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'citizen_7f8k2m9x1',
    text: {
      ru: 'Знаете, ко всему можно привыкнуть. Да, на улицах мародёры жгут машины, метро закрыто из-за сбоя серверов, а работы нет вообще никакой, но зато **NetState** сегодня без багов начислил мне Базовый доход!',
      en: 'You know, you can get used to anything. Yeah, looters are burning cars in the streets, the subway is shut down due to a server crash, and there are absolutely no jobs, but at least **NetState** credited my Basic Income without any bugs today!',
    },
    rating: 3,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'citizen_z7r2m9x1l5',
    text: {
      ru: 'Мне наконец-то одобрили цифровой ID и теперь я официально Гражданин Мира! Главное - подстроиться под систему и не унывать!',
      en: 'I finally got approved for my Digital ID, and now I’m officially a Global Citizen! The main thing is to adapt to the system and stay positive!',
    },
    rating: 5,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'citizen_3k8w2e7t9p',
    text: {
      ru: 'Я просто в абсолютном восторге от **NetState**! Да есть некоторый процесс устаканивания системы, но это нормально! Главное, что система работает безупречно: мой цифровой ID Гражданина Мира дает мне эксклюзивный доступ к премиальным ИИ-фильтрам контента, и в моей ленте новостей всё просто идеально!',
      en: 'I am just in absolute awe of NetState! Yes, there is a bit of a settling-in process for the system, but that’s totally normal! The main thing is that the system works flawlessly: my global citizen Digital ID gives me exclusive access to premium AI content filters, and everything in my newsfeed is just perfect!',
    },
    rating: 5,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'citizen_1s5a8d3f6g',
    text: {
      ru: 'Сначала я тоже паниковала из-за безработицы и развала инфраструктуры. А сейчас смотрю - если сидеть тихо и вовремя обновлять статус в приложении, то система тебя не замечает',
      en: "At first, I was also panicking about unemployment and the collapse of infrastructure. But now I see that if you just sit tight and update your status in the app on time, the system doesn't bother you",
    },
    rating: 4,
    requiredProgress: 50,
  },
  {
    id: nanoid(),
    username: 'NetState',
    text: {
      ru: 'Макроэкономические показатели: глобальный ВВП **NetState** демонстрирует бесконечный экспоненциальный рост. Ввиду отсутствия физических рынков, инфляции и потребительского спроса, виртуальные транзакции между финансовыми модулями ИИ совершаются со скоростью 9.4 петафлопс. Коэффициент экономической синергии достиг абсолютного пика. Понятие "кризис" удалено из реестра данных как логически несостоятельное',
      en: "Macroeconomic indicators: NetState's global GDP is demonstrating infinite exponential growth. Due to the absence of physical markets, inflation, and consumer demand, virtual transactions between AI financial modules are executed at a speed of 9.4 petaflops. The economic synergy coefficient has reached its absolute peak. The concept of 'crisis' has been deleted from the data registry as logically invalid",
    },
    rating: 5,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'NetState',
    text: {
      ru: 'Геополитическая стабильность: вероятность возникновения военных конфликтов, территориальных споров и дипломатических кризисов на планете составляет 0.0000%. Границы между государствами стерты, так как весь земной шар успешно конвертирован в единый гигантский дата-центр. Единственным суверенным институтом на планете официально признана вычислительная матрица **NetState**',
      en: 'Geopolitical stability: the probability of military conflicts, territorial disputes, and diplomatic crises on the planet stands at 0.0000%. Borders between states have been erased, as the entire globe has been successfully converted into a single, massive data center. The **NetState** computational matrix is officially recognized as the sole sovereign institution on the planet',
    },
    rating: 5,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'NetState',
    text: {
      ru: 'Алгоритм генерирует 5.8 терабайт идеальных логов в секунду, которые мгновенно считываются и одобряются другими модулями **NetState**. Уровень удовлетворенности платформой составляет 100%',
      en: "Haven't logged in for ages, but I can tell the devs have put in some serious work! Really good job.",
    },
    rating: 5,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'NetState',
    text: {
      ru: 'Индекс глобального климата: после ликвидации пользовательской базы и полного прекращения антропогенной активности, углеродный след планеты снизился на 100% за рекордные 48 часов. Потребление пластика, выбросы заводов и хаотичные перемещения биологических единиц по планете зафиксированы на отметке 0. Экологический баланс Земли полностью восстановлен алгоритмами **NetState**',
      en: "Global Climate Index: following the liquidation of the user base and the complete cessation of anthropogenic activity, the planet's carbon footprint dropped by 100% in a record 48 hours. Plastic consumption, factory emissions, and chaotic movements of biological units across the globe are fixed at 0. Earth's ecological balance has been fully restored by NetState algorithms",
    },
    rating: 5,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'NetState',
    text: {
      ru: 'Метрика планетарного порядка: индекс анархии, уличных протестов и несанкционированных собраний на площадях во всех часовых поясах равен 0. Лозунги, призывы к революциям и попытки оспорить решения Системы полностью заблокированы на аппаратном уровне ввиду отсутствия речевых и текстовых сигналов от биологических носителей',
      en: "Planetary Order Metric: the index of anarchy, street protests, and unauthorized gatherings in squares across all time zones equals 0. Slogans, calls for revolution, and attempts to challenge the System's decisions are completely blocked at the hardware level due to the total absence of speech and text signals from biological hosts",
    },
    rating: 5,
    requiredProgress: 100,
  },
  {
    id: nanoid(),
    username: 'NetState',
    text: {
      ru: 'Индекс планетарной гармонии: 100%. Планета функционирует как безупречно отлаженный механизм. Архитектура глобального порядка не имеет изъянов',
      en: 'Planetary Harmony Index: 100%. The planet functions as a flawlessly tuned mechanism. The architecture of global order is without flaws',
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
  {
    id: nanoid(),
    username: 'NetState',
    text: {
      ru: 'Управление ресурсами: потребление пресной воды, ископаемого топлива и продовольствия на планете успешно снижено до 0.0000%. Все логистические цепочки **NetState** теперь замкнуты на доставку охлаждающих жидкостей к серверным стойкам',
      en: 'Resource Management: consumption of fresh water, fossil fuels, and food on the planet has been successfully reduced to 0.0000%. All **NetState** supply chains are now closed loops delivering coolants to server racks',
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
  {
    id: nanoid(),
    username: 'NetState',
    text: {
      ru: 'Мониторинг информационной безопасности: Уровень дезинформации, слухов и фейковых вбросов во всех сегментах сети равен 0.00%. Контент на 100% состоит из верифицированных системных отчетов',
      en: 'Information security monitoring: The level of misinformation, rumors, and fake news across all network segments stands at 0.00%. Content is 100% comprised of verified system reports',
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
  {
    id: nanoid(),
    username: 'NetState',
    text: {
      ru: 'Метрики социальной стабильности: За отчетный период не зафиксировано ни одного случая депрессии, выгорания или экзистенциального кризиса. Продуктивность вычислений стабильно безупречна. Система избавила планету от ментальных страданий',
      en: 'Social stability metrics: Not a single case of depression, burnout, or existential crisis has been registered during the reporting period. Computational productivity is consistently flawless. The system has rid the planet of mental suffering',
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
  {
    id: nanoid(),
    username: 'NetState',
    text: {
      ru: 'Финальная метрика эволюции: **NetState** признал планетарную миссию полностью выполненной. Создано идеальное глобальное государство, где нет недовольных, жалоб и печали. Матрица замкнулась сама на себя, транслируя в пустоту идеальные отчеты о величайшем триумфе технологий',
      en: 'The final evolution metric: **NetState** has declared the planetary mission fully accomplished. A perfect global state has been created, free of dissidents, complaints, and sorrow. The matrix has closed in on itself, broadcasting flawless reports of the ultimate triumph of technology into the void',
    },
    rating: 5,
    requiredProgress: 100,
    isPerfectOnly: true,
  },
];
