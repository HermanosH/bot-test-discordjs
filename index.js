const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
	console.log('Estoy ready!')
})


client.on('message', async (message) => {
	if(message.content === '!ping'){
		return message.channel.send('Tu ping es de ' + client.ws.ping);
		
	}
	
})

client.login('Njg4NDI0NTk3NDIyNDczMjY0.Xm0HXg.IR8He_1KPPU8K2YfV-9Oc0PQNgA')