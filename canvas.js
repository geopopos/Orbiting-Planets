var canvas = document.getElementById("myCanvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//The Sun
var sunX = 400;
var sunY = 400;
var sunRadius = 60;
c.beginPath();
c.arc(sunX, sunY, sunRadius, 0, Math.PI * 2, false);
c.fillStyle = "orange";
c.fill();

//The Planet
function Planet(x, y, radius){
	this.x = x
	this.y = y;
	this.radius = radius

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = "blue";
		c.fill();
	}
}

planet1 = new Planet(400, 500, 10);

planet1.draw();

var m1 = planet1.radius;
var m2 = sunRadius;
var xD = planet1.x - sunX;
console.log(xD);
var yD = planet1.y - sunY;
console.log(yD);
var r2 = Math.sqrt(Math.pow(xD, 2) + Math.pow(yD, 2));

console.log(r2);
var speed = 0;

var force = m1*m2/r2;
console.log("force: " + force);

var acceleration = force / m1;
console.log("acceleration: " +acceleration);

speed += acceleration;
console.log("Speed: " + speed);

