const TelegramBot = require ('node-telegram-bot-api')
const os = require ('os')

const bot = new TelegramBot('1313187175:AAHnXcrQ6ilM3xlv7ECktL0GZES4Uxg6HBA', {polling: true})

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `Hello from "${os.type}", bot says hi to "${msg.from.first_name}"`)
})