var box1 
var box2
var box3 

function setup() 
{
  createCanvas(400, 400);

  box1 = new Box (100, 250, 50, 60, 3, 7);
  box2 = new Box (300, 150, 60, 30, 5, 3);
  box3 = new Box (0, 0, 35, 40, 3, 3);
}

function draw() 
{
  background(220);
  box1.show(); 
  box1.move_up(); 
  box2.show();
  box2.move_down();
  box3.show();
  box3.move_diagonal();


}

