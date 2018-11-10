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
      arc(this.x, this.y, this.w * 0.25, this.h * 0.25, angle + i * 360 / countUnique(3), angle + (i + 1) * 360 / countUnique(3), PIE);
    }
  }



}


// 1.) index rows
// 2.) in rows, check specifc elements (lines[i])
// 3.) if element in row !== before seen elements
// 4.) output.push[j]
