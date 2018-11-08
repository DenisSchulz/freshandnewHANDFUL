let text = [];
let lines = [];
// let skills = [];
// let categories = [];
// let modules = [];
// let studyPrograms = [];

let seperator = ", ";
// let projects = [];
//
// let pieces = [];

function preload() //die preload()-function wird VOR der setup()-function ausgeführt. Dies ist notwendig, da loadStrings() eine asynchrone methode ist und es somit zu Problemen kommen könnte
{
text = loadStrings("skills.txt"); //die Textdatei wird eingelesen und in Form eines Arrays zeilenweise gespeichert

}

function setup()
{
initLines();
  // console.log(text);
  // console.log(lines);
   console.log(contains(3,"Software Engineering"));
   console.log(contains(3,"Software Engineering").length);
  // console.log(skills);
  // console.log(categories);
  // console.log(modules);
  // console.log(studyPrograms);
  // console.log(projects);

}

// function draw()
// {
//    // background(100);
//    // strokeWeight(2);
//    // stroke(255);
//    // fill(150);
// }

function initLines()
{
  for (var i = 0; i < text.length; i++)
  {
    lines[i] = new Line(i, text[i]);
  }
}

function contains(key, value)
 {
   // console.log(key);
   // console.log(value);
   var output =  [];
   //console.log(output);
   for (var i = 0; i < lines.length; i++)
   {
     if (lines[i].words[key] === value)
     {
       output.push(i);
       // console.log(i + " true");
     }
     else
     {
         // console.log(i + " false");
     }
   }
   return output;
 }

// function initSkills()
// {
//   for (var i = 0; i < text.length; i++)
//   {
//     lines[i] = new Line(i, text[i]);
//   }
// }
//
// function pushIfExisting(array, name)
// {
//   for (var i = 0; i < array.length; i++)
//   {
//     if (array[i] === name)
//     {
//       return i;
//     }
//   }
//   array.push(name);
//   return i;
