class Bin{
    constructor(x,y,w,h){
var options = {
    isStatic :true
}
this.w=w
this.h=h

this.body=Bodies.rectangle(x,y,w,h,options)
World.add(world,this.body)
    }
    display (){
    var gndpos=this.body.position
    push () 
    translate (gndpos.x , gndpos.y)
    rect(0,0,this.w,this.h)
    pop ()
    }
}