const { Bot } = require("grammy");

const bot = new Bot(""); 

bot.command('start', (ctx) => {
    ctx.reply(`Привет ${ctx.chat.first_name} я телеграм бот`);
});

bot.command('help', (ctx) => {
    ctx.reply("/start - старт бота \n/help - все команды");
});

bot.on("message", (context) => {
    if (context.message.text.length === 0) { 
    context.reply("Пожалуйста, введите текст");
    }
    if (context.message.text[0] == "/"){
        context.reply("Неизвестная команда. Используйте /help для списка доступных команд")
        return
    }

    const reversedText = context.message.text.split('').reverse().join('');
    context.reply(reversedText);
});

bot.start();