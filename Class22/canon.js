class Canon{
    constructor(x,y,w,h,angle){
       
        this.x = x
        this.y = y
        
        this.w = w
        this.h = h
        this.angle = angle
        this.canonImg = loadImage("canon.png")
        this.canonBase = loadImage("cannonBase.png")
        
        

          
    }
    display(){
        push()
        translate(this.x, this.y)
        rotate(this.angle) 
        imageMode(CENTER)
        image(this.canonImg, 0, 30, this.w, this.h)

        pop()
        image(this.canonBase, 70, 50, 200, 200)
        noFill()
    }    
}