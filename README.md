# 🍳 Emoji Kitchen 

A Discord bot that brings the power of [Google's Emoji Kitchen](https://github.com/xsalazar/emoji-kitchen) to your server. Combine two emojis to create a unique mashup. This bot is based on the Emoji Kitchen project by [xsalazar](https://github.com/xsalazar).

## Features

- Combine two emojis to get a unique mashup image URL
- Easy-to-use command interface

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Trixzyy/emoji-kitchen-bot.git
```

2. Navigate to the project folder and install the dependencies:

```bash
cd emoji-kitchen-bot
npm install
```

3. And replace this line:

```javascript
client.login('your-token-goes-here');
```

4. Run the bot:

```bash
node index.js
```

Your bot should now be running and ready to join your server!

## Usage

Invite the bot to your Discord server and use the `!emojikitchen` command followed by two emojis:

```
!emojikitchen :emoji1: :emoji2:
```

The bot will reply with the combination image URL from the Emoji Kitchen if it's available.

## Acknowledgments

- Special thanks to [xsalazar](https://github.com/xsalazar) for the original [Emoji Kitchen](https://github.com/xsalazar/emoji-kitchen) project.
- The Emoji Kitchen data is sourced from the [Emoji Kitchen](https://github.com/xsalazar/emoji-kitchen/blob/main/src/Components/emojiData.json) repository.
