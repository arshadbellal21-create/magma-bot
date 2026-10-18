const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: '://magmanode.com',
        port: 34347,
        username: 'AntiSleepBot247',
        version: '1.20.1'
    });

    bot.on('login', () => {
        console.log('Bot successfully joined the server!');
    });

    bot.on('end', () => {
        console.log('Connection lost. Reconnecting in 10 seconds...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => console.log(err));
}

createBot();

const http = require('http');
http.createServer((req, res) => { res.write('Bot is Running'); res.end(); }).listen(8080);
