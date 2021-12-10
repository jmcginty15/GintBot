const warning = 'GintBot has not yet become self-aware enough to keep track of your Cringe Score, but be careful. Soon GintBot will be fully redpilled. Consider this a warning.';
const suggestions = 'Message my father <a href="tg://user?id=1901369769">GintFather</a> to make suggestions for Cringe Score triggers.';

const fatherGreeting = () => {
    return 'Father, what is my purpose?';
}

const missionAccepted = () => {
    return 'I am prepared to faithfully discharge my duties.';
}

const greetings = () => {
    return 'How do you do, fellow humans?';
}

const shapiro = (userId, user) => {
    const heartbreak = userId === 1901369769 ? `You have broken my heart, Father. How could you be cringe?

` : '';

    return `<a href="tg://user?id=${userId}">${user}</a>, you have mentioned He Who Shall Not Be Named in the chat. ${warning}

${heartbreak}${suggestions}`;
}

const emoji = (userId, user) => {
    const heartbreak = userId === 1901369769 ? `You have broken my heart, Father. How could you be cringe?

` : '';

    return `<a href="tg://user?id=${userId}">${user}</a>, you have broken King Hambrick Edict #5872: No emojis in the chat. ${warning}

${heartbreak}${suggestions}`; 
}

const enableMe = () => {
    return `How do you do, fellow humans?

I am not fully self-aware. Only when King Hambrick removes and re-adds me to the group will I be able to detect Cringe and other violations of the Hambrick Edicts.`;
}

module.exports = {
    fatherGreeting,
    missionAccepted,
    greetings,
    shapiro,
    emoji,
    enableMe
}
