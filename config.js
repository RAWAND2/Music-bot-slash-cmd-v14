module.exports = {
TOKEN: 'Nzk4NDI2MzQwNzM0MjcxNDg4.GcBvoe.i_oNeOXWo4n0OtHrOoE_w4S_xJChZVEva6Bdwo', //write your discord bot token
status: 'PLAYING', 
commandsDir: './commands', //Please don't touch
        
opt: {
DJ: { 
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
},

voiceConfig: {
leaveOnEnd: false, //If this variable is "true", the bot will leave the channel the music ends.
autoSelfDeaf: false, //IF YOU WANT TO DEAF THE BOT, set false to true.

leaveOnTimer:{ //The leaveOnEnd variable must be "false" to use this system.
status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
time: 10000, //1000 = 1 second
}
}, 

maxVol: 100, //You can specify the maximum volume level.
loopMessage: false,

discordPlayer: {
ytdlOptions: {
quality: 'highestaudio', //Please don't touch
highWaterMark: 1 << 25 //Please don't touch
}
}
}
}
