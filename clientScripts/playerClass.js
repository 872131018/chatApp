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
	canvasContext.beginPath();
	canvasContext.arc(this.positionX, this.positionY, this.radius, 0, 2*Math.PI);
	canvasContext.stroke();
}

function getX()
{
	return this.positionX;
}

function getY()
{
	return this.positionY;
}
