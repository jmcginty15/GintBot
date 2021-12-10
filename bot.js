const Bot = require('node-telegram-bot-api');
const API_TOKEN = '5063037357:AAFoqFqp0rgglhfqKuIYvFNoBnb9H9eL1Lg';
const bot = new Bot(API_TOKEN, { polling: true });
const {
    fatherGreeting,
    missionAccepted,
    greetings,
    shapiro,
    emoji,
    enableMe,
    autistic
} = require('./replies');
console.log('Bot server started');

bot.on('message', (msg) => {
    if (msg.from.username === 'GintFather') {
        let message = msg.text.toLowerCase() === 'gintbot say hello' ? fatherGreeting() : missionAccepted();
        const fromUsername = msg.reply_to_message ? msg.reply_to_message.from.username : '';
        if (message === fatherGreeting() || fromUsername === 'Gint_Bot') bot.sendMessage(msg.chat.id, message, { reply_to_message_id: msg.message_id });
    }

    if (msg.text.toLowerCase().indexOf('say hello') !== -1 && msg.text.toLowerCase().indexOf('gintbot') !== -1) {
        if (msg.from.username !== 'GintFather') bot.sendMessage(msg.chat.id, greetings(), { reply_to_message_id: msg.message_id });
    }

    if (msg.text.toLowerCase().indexOf('shapiro') !== -1) {
        const user = msg.from.username || msg.from.first_name;
        bot.sendMessage(msg.chat.id, shapiro(msg.from.id, user), {
            reply_to_message_id: msg.message_id,
            parse_mode: 'HTML'
        });
    }

    if (msg.text.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu)) {
        const user = msg.from.username || msg.from.first_name;
        bot.sendMessage(msg.chat.id, emoji(msg.from.id, user), {
            reply_to_message_id: msg.message_id,
            parse_mode: 'HTML'
        });
    }

    if (msg.text.toLowerCase() === '/gintbot say hello') {
        bot.sendMessage(msg.chat.id, enableMe(), {
            reply_to_message_id: msg.message_id,
            parse_mode: 'HTML'
        });
    }

    if (msg.text.toLowerCase() === '/gintbot') {
        bot.sendMessage(msg.chat.id, autistic(), {
            reply_to_message_id: msg.message_id,
            parse_mode: 'HTML'
        });
    }
});

bot.on('polling_error', console.log);

module.exports = bot;
