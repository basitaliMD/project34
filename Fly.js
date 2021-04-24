class Fly {
constructor(bodyA, pointB) {
var options = {
bodyA: bodyA,
pointB: pointB,
stiffness: 0.04,
length: 5,
}
this.pointB = pointB;
this.Fly = Constraint.create(options);
World.add(world, this.Fly);
}

fly() {
this.Fly.bodyA = null;
}

display() {
if(this.Fly.bodyA) {
var pointA = this.Fly.bodyA.position;
var pointB = this.pointB;
strokeWeight(5);
stroke("green");
line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
 }
}