function Pie(x,y,s,start,part,array)
{
  this.x = x;
  this.y = y;
  this.size = s;
  this.start = start;
  this.part = 360 / part;
  this.array = array;

  this.pieces = [];



}


// 1.) index rows
// 2.) in rows, check specifc elements (lines[i])
// 3.) if element in row !== before seen elements
// 4.) output.push[j]
