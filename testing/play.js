function play(){
  return this;
}



var obj = {a: "custom"};
var a = "global";

function This(){
  return this.a;
}

console.log(This.apply(obj)); // this calls 
