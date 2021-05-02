  class Ground {
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true			
			}
	
		this.body=Bodies.rectangle(x, y, width, height , options);	
		this.width = width;
		this.height = height;
		
 		World.add(world, this.body);

	}
	display(){
			
			var groundpos =this.body.position;		

		
			rectMode(CENTER)
			strokeWeight(4);
			fill("Brown")
			rect(groundpos.x,groundpos.y,this.width, this.height);
		
			
	}

}

