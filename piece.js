function Piece(x, y, w, h, start, stop, name)
{
  this.name = name;
  this.start = start;
  this.stop = stop;

  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.expand = function()
  {
    this.h = this.h + 50;
    this.w = this.w + 50;
  }

  this.draw = function()
  {
    arc(this.x, this.y, this.w, this.h, start, stop, PIE);
  }

}
