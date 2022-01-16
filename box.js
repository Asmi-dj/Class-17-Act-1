class Box
  {
    constructor(x,y,w,h,vx,vy)
    {
      this.x =x;
      this.y =y;
      this.w =w;
      this.h = h;
      this.vx = vx;
      this.vy = vy;
    }
    
    show()
    {
      rect(this.x,this.y,this.w,this.h)
    }
    
    move()
    {
      this.x = this.x+this.vx;
    }

    move_up()
    {
      this.y = this.y-this.vy;
    }

    move_down()
    {
      this.y = this.y+this.vy;
    }

    move_diagonal()
    {
      this.x=this.x+this.vx;
      this.y=this.y+this.vy;
    }

  }

  
