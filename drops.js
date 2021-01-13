class Drops{
    constructor(x,y){
        var option={
            friction:0.001,
            restitution:0.1
        }
        this.body=Bodies.circle(x,y,5,option)
        this.r=5
        World.add(world,this.body)
    }
    updateY(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }
    display(){
        var pos=this.body.position
        fill("blue")
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.r,this.r)
    }
}