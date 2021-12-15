const Bot = require('node-telegram-bot-api');
const API_TOKEN = '5063037357:AAFoqFqp0rgglhfqKuIYvFNoBnb9H9eL1Lg';
const {
    help,
    fatherGreeting,
    missionAccepted,
    greetings,
    shapiro,
    weiss,
    emoji,
    autistic,
    triggers,
    listCringe,
    myCringe,
    sandCrabGirl,
    cringeSquad
} = require('./replies');

// const bot = new Bot(API_TOKEN, { polling: true });
const bot = new Bot(API_TOKEN);
bot.setWebHook(`https://gint-bot.herokuapp.com/${bot.token}`);

console.log('Bot server started');

bot.on('message', (msg) => {
    // if (msg.chat.id !== -1001555709515) {
    // commands
    if (msg.text.toLowerCase() === '/help' || msg.text.toLowerCase() === '/help ') bot.sendMessage(msg.chat.id, help(), { reply_to_message_id: msg.message_id });
    if (msg.text.toLowerCase() === '/listcringe' || msg.text.toLowerCase() === '/listcringe ') listCringe().then(res => bot.sendMessage(msg.chat.id, res, { reply_to_message_id: msg.message_id, parse_mode: 'HTML' }));
    if (msg.text.toLowerCase() === '/mycringe' || msg.text.toLowerCase() === '/mycringe ') myCringe(msg.from).then(res => bot.sendMessage(msg.chat.id, res, { reply_to_message_id: msg.message_id, parse_mode: 'HTML' }));
    if (msg.text.toLowerCase() === '/whatiscringe' || msg.text.toLowerCase() === '/whatiscringe ') bot.sendMessage(msg.chat.id, triggers(), { reply_to_message_id: msg.message_id, parse_mode: 'HTML' });
    if (msg.text.toLowerCase() === '/hellogintbot' || msg.text.toLowerCase() === '/hellogintbot ') bot.sendMessage(msg.chat.id, greetings(), { reply_to_message_id: msg.message_id, parse_mode: 'HTML' });
    if (msg.text.toLowerCase() === '/gintbot' || msg.text.toLowerCase() === '/gintbot ') bot.sendMessage(msg.chat.id, autistic(), { reply_to_message_id: msg.message_id, parse_mode: 'HTML' });

    // father messages
    if (msg.from.id === 1901369769) {
        let message = msg.text.toLowerCase() === 'gintbot say hello' ? fatherGreeting() : missionAccepted();
        if (message === fatherGreeting() || msg.from.id === 'Gint_Bot') bot.sendMessage(msg.chat.id, message, { reply_to_message_id: msg.message_id });
        if (msg.text.toLowerCase() === 'gintbot, render judgment') bot.sendMessage(msg.chat.id, cringeSquad(), { reply_to_message_id: msg.message_id, parse_mode: 'HTML' });
    }

    // cringe detection
    if (msg.text.toLowerCase().indexOf('shapiro') !== -1) shapiro(msg.from).then(res => bot.sendMessage(msg.chat.id, res, { reply_to_message_id: msg.message_id, parse_mode: 'HTML' }));
    if (msg.text.toLowerCase().indexOf('weiss') !== -1 || msg.text.toLowerCase().indexOf('bari') !== -1) weiss(msg.from).then(res => bot.sendMessage(msg.chat.id, res, { reply_to_message_id: msg.message_id, parse_mode: 'HTML' }));
    if (msg.text.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu)) emoji(msg.from).then(res => bot.sendMessage(msg.chat.id, res, { reply_to_message_id: msg.message_id, parse_mode: 'HTML' }));

    if (msg.from.id === 1914032763) {
        // Sand Crab
        const girlWords = ['girl', 'woman', 'women', 'gurl', 'gal', 'lady', 'ladies'];
        for (let word of girlWords) if (msg.text.toLowerCase().indexOf(word) !== -1) {
            bot.sendMessage(msg.chat.id, sandCrabGirl(), { reply_to_message_id: msg.message_id, parse_mode: 'HTML' });
            break;
        }
    }

    if (msg.from.id === 2086305632) {
        // NoseRingMama69
    }

    if (msg.from.id === 1812503085) {
        // Addie
        bot.sendMessage(msg.chat.id, `<a href="tg://user?id=${1812503085}">Addie</a> has spoken.`, { reply_to_message_id: msg.message_id, parse_mode: 'HTML' });
    }

    if (msg.from.id === 1087968824) {
        // Hambrick
    }
    // }
});

bot.on('polling_error', console.log);

module.exports = { bot, API_TOKEN };
