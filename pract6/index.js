const { Bot, Keyboard, InlineKeyboard } = require('grammy');
const BOT_TOKEN = 'TOKEN'; 

const bot = new Bot(BOT_TOKEN);

const userHistory = new Map();

const answers = {
    positive: [
        'Безусловно!',
        'Yes',
        'Совершенно точно!',
        'Звёзды говорят "да"',
        'Это несомненно!',
        'Определённо да!',
        'Да',
        'Да, шар уверен в этом'
    ],
    neutral: [
        'Возможно',
        'Сложно сказать точно',
        'Спроси позже',
        'Пока неясно',
        'Обстоятельства могут измениться',
        'Сосредоточься и спроси снова',
        'Шар не может дать ответ',
        'Нужно больше информации'
    ],
    negative: [
        'Нет шансов',
        'Не стоит рассчитывать',
        'Шар говорит "нет"',
        'Мои источники говорят "нет"'
    ]
};

const allAnswers = [...answers.positive, ...answers.neutral, ...answers.negative];

const mainMenuKeyboard = new Keyboard()
    .text('Спросить шар')
    .text('История вопросов')
    .text('Справка')

const askAgainKeyboard = new InlineKeyboard()
    .text('Спросить ещё', 'ask_again');

const backToMenuKeyboard = new Keyboard()
    .text('Спросить шар')
    .text('История вопросов')
    .text('Справка')

function saveQuestionToHistory(userId, question) {
    if (!userHistory.has(userId)) {
        userHistory.set(userId, { questions: [] });
    }
    
    const userData = userHistory.get(userId);
    
    userData.questions.unshift(question);
    
    if (userData.questions.length > 5) {
        userData.questions.pop();
    }
    
    userHistory.set(userId, userData);
    
function getUserHistory(userId) {
    if (!userHistory.has(userId)) {
        return [];
    }
    return userHistory.get(userId).questions || [];
}

function formatHistory(history) {
    if (history.length === 0) {
        return 'История вопросов пока пуста. Задайте свой первый вопрос!';
    }
    
    let formattedText = 'Последние вопросы:\n\n';
    
    history.forEach((question, index) => {
        formattedText += `${index + 1}. «${question}»\n`;
    });
    
    return formattedText;
}


bot.command('start', async (ctx) => {
    const userId = ctx.from.id;
    const userName = ctx.from.first_name || ctx.from.username || 'Пользователь';
    
    if (!userHistory.has(userId)) {
        userHistory.set(userId, { questions: [] });
    }
    
    await ctx.reply(
        `Привет ${userName}Нажми кнопку «Спросить шар», чтобы начать!`,
        {
            parse_mode: 'Markdown',
            reply_markup: mainMenuKeyboard
        }
    );
});

bot.command('help', async (ctx) => {

    await ctx.reply(
        'Справка по использованию Магического шара',
        { parse_mode: 'Markdown' }
    );
});

bot.hears('Спросить шар', async (ctx) => {
    await ctx.reply(
        'Задай свой вопрос магическому шару',
        {parse_mode: 'Markdown'}
    );
    
});

bot.hears('История вопросов', async (ctx) => {
    const userId = ctx.from.id;
    const history = getUserHistory(userId);
    const formattedHistory = formatHistory(history);
    
    await ctx.reply(formattedHistory, {
        parse_mode: 'Markdown',
        reply_markup: mainMenuKeyboard
    });
});

bot.on('message:text', async (ctx) => {
    const userId = ctx.from.id;
    const question = ctx.message.text;
    
    if (question.startsWith('/') || 
        question === 'Спросить шар' || 
        question === 'История вопросов' || 
        question === 'Справка') {
        return;
    }
    
    saveQuestionToHistory(userId, question);
    
    const randomIndex = Math.floor(Math.random() * allAnswers.length);
    const answer = allAnswers[randomIndex];

    const responseText = `Ответ: ${answer}`;

    await ctx.reply(responseText, {
        parse_mode: 'Markdown',
        reply_markup: askAgainKeyboard
    });
});

bot.callbackQuery('ask_again', async (ctx) => {
    await ctx.answerCallbackQuery();
    await ctx.deleteMessage();

    await ctx.reply(
        'Задай свой вопрос магическому шару',
        {reply_markup: mainMenuKeyboard}
    );
});

bot.start({onStart: (botInfo) => {console.log("Бот запущен");}})};
