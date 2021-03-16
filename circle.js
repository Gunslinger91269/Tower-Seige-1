class Circle
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.2,
			friction:0.8,
			density:1.5

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var circle1pos=this.body.position;		

			push()
			translate(circle1pos.x, circle1pos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill("blue")
			ellipse(1,1,this.r, this.r);
			pop()
			
	}

}