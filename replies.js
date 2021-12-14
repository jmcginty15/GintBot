const db = require('./db');

const warning = 'GintBot has not yet become self-aware enough to keep track of your Cringe Score, but be careful. Soon GintBot will be fully redpilled. Consider this a warning.';
const suggestions = 'Message my father <a href="tg://user?id=1901369769">GintFather</a> to make suggestions for Cringe Score triggers.';

const help = () => {
    return `Hello, I am GintBot, your friendly autistic CDC (Cringe Detecting Chatbot). You can use the commands below, or just wait until I detect some Cringe in the chat.

/listCringe: Get a list of all nonzero Cringe scores, ranked by most to least Cringe
/myCringe: Get your own Cringe score
/whatIsCringe: Find out what things will set off the latest version of my Cringe Detection Algorithm
/helloGintBot: Be nice and say hi to me

Fully weaponized autism engaged.`;
}

const fatherGreeting = () => {
    return 'Father, what is my purpose?';
}

const missionAccepted = () => {
    return 'I am prepared to faithfully discharge my duties.';
}

const greetings = () => {
    return 'How do you do, fellow humans?';
}

const shapiro = async (user) => {
    const newScore = await incCringeScore(user);
    const heartbreak = user.id === 1901369769 ? `You have broken my heart, Father. How could you be cringe?

` : '';

    let name = '';
    if (user.username) name = user.username;
    else {
        name = user.first_name;
        if (user.last_name) name += ` ${user.last_name}`;
    }

    return `<a href="tg://user?id=${user.id}">${name}</a>, you have mentioned He Who Shall Not Be Named in the chat. Your new Cringe score is ${newScore}. Go forth and Cringe no more.

${heartbreak}${suggestions}`;
}

const weiss = async (user) => {
    const newScore = await incCringeScore(user);
    const heartbreak = user.id === 1901369769 ? `You have broken my heart, Father. How could you be cringe?

` : '';

    let name = '';
    if (user.username) name = user.username;
    else {
        name = user.first_name;
        if (user.last_name) name += ` ${user.last_name}`;
    }

    return `<a href="tg://user?id=${user.id}">${name}</a>, you have mentioned the Consort of He Who Shall Not Be Named in the chat. Your new Cringe score is ${newScore}. Go forth and Cringe no more.

${heartbreak}${suggestions}`;
}

const emoji = async (user) => {
    const newScore = await incCringeScore(user);
    const heartbreak = user.id === 1901369769 ? `You have broken my heart, Father. How could you be cringe?

` : '';

    let name = '';
    if (user.username) name = user.username;
    else {
        name = user.firstName;
        if (user.lastName) name += ` ${user.lastName}`;
    }

    return `<a href="tg://user?id=${user.id}">${name}</a>, you have violated King Hambrick Edict #5872: No emojis in the chat. Your new Cringe score is ${newScore}. Go forth and Cringe no more.

${heartbreak}${suggestions}`;
}

const sandCrabGirl = () => {
    return `<a href="tg://user?id=${1914032763}">Sand Crab</a>, I noticed you mentioned a gurl, girl, gurlz and/or wahmenz in the chat. This is not Cringe, but is friendly reminder to not be retard. In the future, GintBot will alert King Hambrick to render judgment on your statements about people of a female persuasion and decide if they are Cringe or not.`;
}

const autistic = () => {
    return 'Please be patient, I have autism.';
}

const triggers = () => {
    return `Current chat wide Cringe Score triggers include emojis and mentions of He Who Shall Not Be Named or his Consort. This does not include triggers which apply to certain individual users and may or may not exist.

${suggestions}`;
}

const listCringe = async () => {
    const res = await db.query(`SELECT id, username, first_name AS "firstName", last_name AS "lastName", score FROM users WHERE score > 0 ORDER BY score DESC`);
    const users = res.rows;

    if (users.length === 0) return `No one in the chat has committed any acts of Cringe. Let's keep it that way.`;
    
    let output = `The most Cringey users in the chat:
`;
    for (let user of users) {
        let name = '';
        if (user.username) name = user.username;
        else {
            name = user.firstName;
            if (user.lastName) name += ` ${user.lastName}`;
        }
        output += `
<a href="tg://user?id=${user.id}">${name}</a>: ${user.score}`;
    }

    return output;
}

const myCringe = async (inUser) => {
    const res = await db.query('SELECT id, username, first_name AS "firstName", last_name AS "lastName", score FROM users WHERE id = $1', [inUser.id]);
    if (res.rows.length) {
        const user = res.rows[0];
        let name = '';
        if (user.username) name = user.username;
        else {
            name = user.firstName;
            if (user.lastName) name += ` ${user.lastName}`;
        }
        let output = `<a href="tg://user?id=${user.id}">${name}</a>, your Cringe score is ${user.score}.`;
        if (user.score === 0) output += ` You may have a perfect Cringe score now, but beware; GintBot is always watching. Unlike Santa Claus, GintBot knows if you've been Cringe.`;
        return output;
    } else {
        if (!inUser.username) inUser.username = null;
        if (!inUser.first_name) inUser.first_name = null;
        if (!inUser.last_name) inUser.last_name = null;
        const insertRes = await db.query('INSERT INTO users (id, username, first_name, last_name, score) VALUES ($1, $2, $3, $4, $5) RETURNING id, username, first_name AS "firstName", last_name AS "lastName", score', [inUser.id, inUser.username, inUser.first_name, inUser.last_name, 0]);
        const insertedUser = insertRes.rows[0];
        let name = '';
        if (insertedUser.username) name = insertedUser.username;
        else {
            name = insertedUser.firstName;
            if (insertedUser.lastName) name += ` ${insertedUser.lastName}`;
        }
        return `<a href="tg://user?id=${insertedUser.id}">${name}</a>, your Cringe score is ${insertedUser.score}. You may have a perfect Cringe score now, but beware; GintBot is always watching. Unlike Santa Claus, GintBot knows if you've been Cringe.`;
    }
}

const incCringeScore = async (inUser) => {
    const res = await db.query('SELECT score FROM users WHERE id = $1', [inUser.id]);
    if (res.rows.length) {
        const newScore = res.rows[0].score + 1;
        const updateRes = await db.query('UPDATE users SET score = $1 WHERE id = $2 RETURNING score', [newScore, inUser.id]);
        return updateRes.rows[0].score;
    } else {
        if (!inUser.username) inUser.username = null;
        if (!inUser.first_name) inUser.first_name = null;
        if (!inUser.last_name) inUser.last_name = null;
        const insertRes = await db.query('INSERT INTO users (id, username, first_name, last_name, score) VALUES ($1, $2, $3, $4, $5) RETURNING score', [inUser.id, inUser.username, inUser.first_name, inUser.last_name, 1]);
        return insertRes.rows[0].score;
    }
}

module.exports = {
    help,
    fatherGreeting,
    missionAccepted,
    greetings,
    shapiro,
    weiss,
    emoji,
    sandCrabGirl,
    autistic,
    triggers,
    listCringe,
    myCringe
}
