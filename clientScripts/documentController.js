function documentController()
{
	$(document).on('mousedown',
		function(e)
		{
			var x = e.clientX - canvasRect.left;
			var y = e.clientY - canvasRect.top;

			if(x >= 0 && y >= 0 && x <= 400 && y <= 400)
			{
				$(document).trigger('updatePosition', [{'object': 'player', 'action': 'canvasClick', 'x': x, 'y': y}]);
			}
		}
	);

	$(document).on('updatePosition',
		function(e, dataObject)
		{
			if(dataObject['object'] == 'player')
			{

				switch(dataObject['action'])
				{
					case 'canvasClick':
						player.updatePosition({'x': dataObject['x'], 'y': dataObject['y']});
						break;
					case 'moveUp':
						player.updatePosition({'x': player.getX(), 'y': player.getY()+4});
						break;
					case 'moveDown':
						player.updatePosition({'x': player.getX(), 'y': player.getY()-4});
						break;
					case 'moveLeft':
						player.updatePosition({'x': player.getX()-4, 'y': player.getY()});
						break;
					case 'moveRight':
						player.updatePosition({'x': player.getX()+4, 'y': player.getY()});
						break;
					default:
						player.updatePosition({'x': dataObject['x'], 'y': dataObject['y']});
						break;
				}
			}
		}
	);

	$(document).on('clearCanvas', 
		function(e)
		{
			canvasContext.clearRect(0, 0, 400, 400);
		}
	);

	$(document).on('keydown', 
		function(e)
		{
			var pressedKey = e.keyCode || e.which;
			switch(pressedKey)
			{
				//s
				case 83:
					$(document).trigger('updatePosition', [{'object': 'player', 'action': 'moveUp'}]);
					break;
				//w
				case 87:
					$(document).trigger('updatePosition', [{'object': 'player', 'action': 'moveDown'}]);
					break;
				//a
				case 65:
					$(document).trigger('updatePosition', [{'object': 'player', 'action': 'moveLeft'}]);
					break;
				//d
				case 68:
					$(document).trigger('updatePosition', [{'object': 'player', 'action': 'moveRight'}]);
					break;
				default:
					console.log(pressedKey);
					break;
			}
		}
	);
}
