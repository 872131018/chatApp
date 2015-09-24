$(document).ready(
	function()
	{
		initSocket();
		canvasElement = $('#myCanvas').get(0);
		canvasContext = canvasElement.getContext('2d');
		canvasRect = canvasElement.getBoundingClientRect();
		controller = documentController();
		player = new playerClass(200, 200, 10);

		//this sets a constant update rate with the sever
		setInterval(
			function()
			{
				socket.emit('playerUpdate', player);
				//start each frame by clearing the screen
				$(document).trigger('clearCanvas');
				player.drawPlayer();
			}, 36);
	}
);

function initSocket()
{
	//must set up socket connection
	socket = io();
	$('form').submit(
		function()
		{
			socket.emit('chat message', $('#m').val());
			$('#m').val('');
			return false;
		}
	);
	socket.on('updatePlayer', 
		function(passedPlayer)
		{
			$(document).trigger('updatePosition', [{'object': 'player', 'x': passedPlayer['positionX'], 'y': passedPlayer['positionY']}]);
		}
	);
	socket.on('chat message', 
		function(message)
		{
			$('#messages').append($('<li>').text(message));
		}
	);
}