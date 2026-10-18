const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: '://magmanode.com', // Aapka server IP
        port: 34347,                 // Aapka server Port
        username: 'AntiSleepBot247', // Bot ka naam
        version: '1.20.1'            // Server version
    });

    bot.on('login', () => {
        console.log('Bot successfully joined the server!');
    });

    // Agar bot kick ho jaye ya connection toote to auto-reconnect kare
    bot.on('end', () => {
        console.log('Connection lost. Reconnecting in 10 seconds...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => console.log(err));
}

createBot();

// Koyeb ko active rakhne ke liye ek dummy web server
const http = require('http');
http.createServer((req, res) => { res.write('Bot is Running'); res.end(); }).listen(8080);
