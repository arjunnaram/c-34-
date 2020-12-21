class Ball {
    constructor(x,y,radius){
       var options={
            
           friction: 0.04,
           density: 1.0

        } 

        this.body=Bodies.circle(x,y,radius/2,options);
        this.radius=radius;
        
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
         
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

}