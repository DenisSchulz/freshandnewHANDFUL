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
   console.log(indexesToObjects(lines, contains(2, "category1")));
   console.log(countDifferent(3));
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

 function countDifferent(key)
  {
    //console.log(key);
    // console.log(value);
    var output =  [];

    output.push(lines[0]);
    //console.log(output);
    for (var i = 1; i < lines.length; i++)
    {
      //console.log(i);

      for (var j = 0; j < output.length; j++)
      {
      //console.log(j);
      if (lines[i].words[key] !== output[j].words[key])
        {
        output.push(lines[i]);
        i++;
      //  console.log(i + " true");
        }
        else
        {
        //  console.log(i + " false");
        }
      }
      i++;
    }
    return output.length;
  }

 function indexesToObjects(array, indexes)
 {
   var output = [];
   for (var i = 0; i < indexes.length; i++)
   {
     output.push(array[indexes[i]]);
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
