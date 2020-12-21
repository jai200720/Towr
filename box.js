class Box {
constructor(x,y) {
//this.x = x
//this.y = y
this.body = Bodies.rectangle(x,y,30,40)
World.add (world,this.body)


    }
   display(){
var pos = this.body.position
var angle = this.body.angle
push ()
translate (pos.x,pos.y)
rotate (angle)
rectMode (CENTER)
rect(0,0,30,40)
pop ()
}



}