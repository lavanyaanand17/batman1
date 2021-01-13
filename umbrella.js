class Umbrella{
    constructor(x,y){
     var option={isStatic:true}
     this.body=Bodies.circle(x,y,50,option)
     this.r=50
     World.add(world,this.body)
     this.image=loadImage("Walking Frame/walking_1.png")
    }
    display(){
        var pos=this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y+70,400,400)
    }
}
