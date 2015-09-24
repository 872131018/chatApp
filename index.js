var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');
var url = require('url');
var path = require('path');
var playerClass = require('./classes/playerClass');
player = new playerClass(0, 0, 10);

app.use('/', 
	function(request, response)
	{
		urlArray = request.originalUrl.split('/');
		if(urlArray['styles'] !== 'undefined' || urlArray['scripts'] !== 'undefined')
		{
			response.sendFile(__dirname + urlArray.join('/'));
		}
		else
		{
			response.sendFile(__dirname + '/index.html');
		}
	}
);

server.listen(8080, 
	function()
	{
		console.log('listening on *:8080');
	}
);

io.on('connection', 
	function(socket)
	{
		console.log('user connected');
		
  		socket.on('chat message', 
  			function(message)
  			{
    			io.emit('chat message', message);
  			}
  		);

  		socket.on('playerUpdate', 
  			function(passedPlayer)
  			{
  				player.updatePosition({'x': passedPlayer['positionX'], 'y': passedPlayer['positionY']});
    			io.emit('updatePlayer', player);
  			}
  		);

  		socket.on('disconnect', 
  			function()
  			{
    			console.log('user disconnected');
  			}
  		);
	}
);