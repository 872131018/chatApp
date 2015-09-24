module.exports = playerClass;
function playerClass(passedX, passedY, passedRadius)
{
	this.positionX = passedX;
	this.positionY = passedY;
	this.radius = passedRadius;
	this.drawPlayer = drawPlayer;
	this.updatePosition = updatePosition;
	this.getX = getX;
	this.getY = getY;
}

function updatePosition(positionObject)
{
	this.positionX = positionObject['x'];
	this.positionY = positionObject['y'];
}

function drawPlayer()
{
	var canvasElement = $('#myCanvas').get(0);
	canvasElement = canvasElement.getContext('2d');
	canvasElement.beginPath();
	canvasElement.arc(this.positionX, this.positionY, this.radius, 0, 2*Math.PI);
	canvasElement.stroke();
}

function getX()
{
	return this.positionX;
}

function getY()
{
	return this.positionY;
}