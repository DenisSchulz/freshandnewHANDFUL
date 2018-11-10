function Pie()
{
  this.x = 400;
  this.y = 400;
  this.w = 800;
  this.h = 800;
  this.angle = -90;

  this.layers = [];

  this.draw = function()
  {
     for(var i = 0; i < countUnique(3); i++)
     {
      for(var j = 0; j < containsNested(3, uniqueOutput(3, i), 2); j++)
      {
        for(var k = 0; k < containsNested(3, uniqueOutput(3, i), 2); k++)
        {
          arc(this.x,this.y,this.w,this.h,(i * 360 / countUnique(3)) + (j * 360 / countUnique(3) / containsNested(3, uniqueOutput(3, i), 2)) + (k * 360 / countUnique(3) / countUnique(2) / containsNested(3, uniqueOutput(3, i), 2)) + this.angle,(i * 360 / countUnique(3)) + ((j + 1) * 360 / countUnique(3) / containsNested(3, uniqueOutput(3, i), 2)) + this.angle,PIE);
          console.log(containsNested(3, uniqueOutput(3, i), 1));
        }
        arc(this.x,this.y,this.w * 0.5,this.h * 0.5,(i * 360 / countUnique(3)) + (j * 360 / countUnique(3) / containsNested(3, uniqueOutput(3, i), 2)) + this.angle,(i * 360 / countUnique(3)) + ((j + 1) * 360 / countUnique(3) / containsNested(3, uniqueOutput(3, i), 2)) + this.angle,PIE);
      //  console.log(j);
      }
      arc(this.x,this.y,this.w * 0.25,this.h * 0.25,(i * 360 / countUnique(3)) + this.angle,((i + 1) * 360 / countUnique(3)) + this.angle,PIE);
    //  console.log(i);
     }


  }



}
