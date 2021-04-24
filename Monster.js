class Monster {
constructor(x, y, r) {
var options = {
isStatic:false,
density: 1,
friction: 1,
restitution: 1
}
this.x = x;
this.y = y;
this.r = r;
this.body = Bodies.circle(x, y, (this.r)/2, options);
this.image = loadImage("images/Monster-01.png");
World.add(world, this.body);
}

display() {
var pos = this.body.position;
imageMode(CENTER);
image(this.image, pos.x, pos.y, this.radius, this.radius);
 }
}