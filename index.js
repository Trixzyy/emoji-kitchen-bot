const Discord = require('discord.js');
const axios = require('axios');
const emojiData = require('./emojiData.json');


const client = new Discord.Client();

const prefix = '!'; // You can change this to any prefix you prefer

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function emojiUnicode (emoji) {
  var comp;
  if (emoji.length === 1) {
      comp = emoji.charCodeAt(0);
  }
  comp = (
      (emoji.charCodeAt(0) - 0xD800) * 0x400
    + (emoji.charCodeAt(1) - 0xDC00) + 0x10000
  );
  if (comp < 0) {
      comp = emoji.charCodeAt(0);
  }
  return comp.toString("16");
};

client.on('message', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'emojikitchen') {
    if (args.length !== 2) {
      message.reply('Please provide two emojis as arguments.');
      return;
    }

    const theleftEmoji = args[0];
    const therightEmoji = args[1];

    const leftEmoji = emojiUnicode(theleftEmoji)
    const rightEmoji = emojiUnicode(therightEmoji)



    const combo = findValidEmojiCombo(leftEmoji, rightEmoji, emojiData);

    if (combo) {
      const url = googleRequestUrl(combo);
      message.reply(`Here is the Emoji Kitchen combination: ${url}`);
    } else {
      console.log(leftEmoji + rightEmoji + combo)
      message.reply('Sorry, this emoji combination is not available.');
    }
  }
});

client.login('your-token-goes-here'); //replace with your discord bot token!

function findValidEmojiCombo(leftEmoji, rightEmoji, emojiData) {
  for (const key in emojiData) {
    const combos = emojiData[key];
    for (const combo of combos) {
      if (
        (combo.leftEmoji === leftEmoji && combo.rightEmoji === rightEmoji) ||
        (combo.leftEmoji === rightEmoji && combo.rightEmoji === leftEmoji)
      ) {
        return combo;
      }
    }
  }
  return null;
}

function googleRequestUrl(combo) {
  const rootUrl = 'https://www.gstatic.com/android/keyboard/emojikitchen';
  const date = combo.date;
  const leftEmoji = combo.leftEmoji;
  const rightEmoji = combo.rightEmoji;

  const leftPart = leftEmoji
    .split('-')
    .map((part) => `u${part.toLowerCase()}`)
    .join('-');
  const rightPart = rightEmoji
    .split('-')
    .map((part) => `u${part.toLowerCase()}`)
    .join('-');

  return `${rootUrl}/${date}/${leftPart}/${leftPart}_${rightPart}.png`;
}