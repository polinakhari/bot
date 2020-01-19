const VkBot = require('node-vk-bot-api');
const Markup = require('node-vk-bot-api/lib/markup');
const token = require('./token');

const bot = new VkBot(token);

bot.command('Начать', (ctx) => {    
    ctx.reply('Выберите линейку!', null, Markup
.keyboard([
'Redmi',
'Mi',
])
.oneTime());
});


bot.startPolling(() => {
    console.log('Бот запущен!')
});