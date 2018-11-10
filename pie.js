function Pie()
{
  this.x = 200;
  this.y = 200;
  this.w = 300;
  this.h = 300;
  this.angle = -90;

  this.layers = [];

  this.draw = function()
  {

    for(var i = 0; i < countUnique(3); i++)
    {
      arc(this.x,this.y,this.w,this.h,(i * 360 / countUnique(3)) + this.angle,((i + 1) * 360 / countUnique(3)) + this.angle,PIE);
      console.log(contains(3,i));
      for(var j = 0; j < contains(3,i).length; j++)
      {
        arc(this.x,this.y,this.w,this.h,(j * 360 / countUnique(2)) + this.angle,((j + 1) * 360 / countUnique(2)) + this.angle,PIE);
      }
    }


  }



}
