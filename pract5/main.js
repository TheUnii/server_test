const { Bot , InlineKeyboard } = require("grammy");
const bot = new Bot(""); 
const users = new Map();

const menuKeyboard = new InlineKeyboard()
  .text("Играть", "play");

const gameKeyboard = new InlineKeyboard()
  .text("Орёл", "orel")
  .text("Решка", "reshka")
  .text("Статистика", "stat");

const replayKeyboard = new InlineKeyboard()
  .text("Играть снова", "play")
  .text("Статистика", "stat")

bot.command("start",(ctx) => {
    const user_id = ctx.from.id;

    if (!users.has(user_id)) {
        users.set(user_id, { win: 0, lose: 0 });
    }
    ctx.reply("Добро пожаловать в игру «Орёл или решка»!",{reply_markup: menuKeyboard,});
});

bot.callbackQuery("play",(ctx) => {
    ctx.reply("Орел или решка:", {reply_markup: gameKeyboard,});
});

bot.callbackQuery("replay",(ctx) => {
    ctx.reply("Орел или решка:", {reply_markup: gameKeyboard,});
});

bot.callbackQuery("orel",(ctx) => {
    const user_id = ctx.from.id;
    const num = Math.random();
    if (num >= 0.5) {
        const user = users.get(user_id);
        user.win += 1;
        users.set(user_id, user);
        ctx.reply("Вы выиграли", {reply_markup: replayKeyboard,});
    } else {
        const user = users.get(user_id);
        user.lose += 1;
        users.set(user_id, user);
        ctx.reply("Вы проиграли", {reply_markup: replayKeyboard,});
    }
});

bot.callbackQuery("reshka",(ctx) => {
    const user_id = ctx.from.id;
    const num = Math.random();
    if (num < 0.5) {
        const user = users.get(user_id);
        user.win += 1;
        users.set(user_id, user);
        ctx.reply("Вы выиграли", {reply_markup: replayKeyboard,});
    } else {
        const user = users.get(user_id);
        user.lose += 1;
        users.set(user_id, user);
        ctx.reply("Вы проиграли", {reply_markup: replayKeyboard,});
    }
});

bot.callbackQuery("stat",(ctx) => {
    const { win, lose } = users.get(ctx.from.id);
    ctx.reply(`Cтатистика:\nПобед: ${win}\nПоражений: ${lose}`,{reply_markup: gameKeyboard,});
});

bot.start();