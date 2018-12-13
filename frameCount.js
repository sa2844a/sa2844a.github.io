var x= 50

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(250,140,70);

}

function draw() {
	fill(150,255,10);
	ellipse(frameCount%1050, frameCount%500,45,45);
	fill(100,100,20);
	ellipse(frameCount%500, frameCount%1000,10,10);
}
