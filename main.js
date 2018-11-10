let text = [];
let lines = []; // define global variable with let
// let skills = [];
// let categories = [];
// let modules = [];
// let studyPrograms = [];

let seperator = ", "; // globally defined; used in other parts
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
   // console.log(contains(3,"Software Engineering"));
   // console.log(contains(3,"Software Engineering").length);
   // console.log(indexesToObjects(lines, contains(2, "category1")));
   // console.log(containsNested(3, "Software Engineering", 1));
   console.log(countUnique(3));
   // console.log(contains1(2));

   // console.log(lines[5].words[3]); // call specific line and word in line
   //console.log(contains(3, "Interaction Design")) // return length of array "output"

  // console.log(skills);
  // console.log(categories);
  // console.log(modules);
  // console.log(studyPrograms);
  // console.log(projects);
}

function draw()
{
   background(100);
   strokeWeight(2);
   stroke(255);
   fill(150);
}

function initLines()
{
  for (var i = 0; i < text.length; i++) // iterate through lines in text
  {
    lines[i] = new Line(i, text[i]);
  }
}

// sort by studyprogram, return values (e.g. modules) for key ("studyprogram")
function containsNested(key, studyprogram, category)
 {
   var output =  [];
   //console.log(output);
   for (var i = 0; i < lines.length; i++) // iterate through lines (56 in total) arrays
   {
     if (lines[i].words[key] === studyprogram) // every word with (key = int) that equals the string i pass to function, return
     {
       var match = lines[i].words[category];
       output.push(match); // add all strings that match to array "output"
     }
     else
     {

     }
   }
   return output;
 }


// return elements (lines[i] that equal a given value)
 function contains(key, value)
  {
    var output =  [];
    //console.log(output);
    for (var i = 0; i < lines.length; i++) // iterate through lines (56 in total) arrays
    {
      if (lines[i].words[key] === value) // every word with (key = int) that equals the string i pass to function, return
      {
        output.push(i); // add all strings that match to array "output"
        // console.log(i + " true");
      }
      else
      {
          // console.log(i + " false");
      }
    }
    return output;
  }

// return elements (lines[i] that equal a given value)
 function contains1(key)
  {
    var output =  [];
    //console.log(output);
    for (var i = 0; i < lines.length; i++) // iterate through lines (56 in total) arrays
      {
        output.push(lines[i].words[key]); // add all strings that match to array "output"
      }
      return output;
   }

// count different denis
 function countDifferent(key)
  {
    var output =  [];

    //console.log(output);
    for (var i = 0; i < lines.length; i++) // why i = 1?
    {
      // output.push(lines[i]);
      // console.log(output.length)
      // console.log(output.length);// i think we forgot to push the iteration to output array
      for (var j = 0; j < output.length; j++) // why j = 0 ?
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

  // count modules and studyprogram uniquely
function countUnique(key) // arguments: stuff you pass into a function and use in that function
 {
   var output =  []; // array we will store results in
   //console.log(output);
   for (var i = 0; i < lines.length; i++) // iterate through lines (56 in total) arrays
   {
     output.push(lines[i].words[key]); // add all strings to array output
     // var unique = output.filter( onlyUnique );
     // var unique = output.filter((v, i, a) => a.indexOf(v) === i);
   }
   var unique = new Set(output); // extract unique items from array output
   // const iterator = unique.entries();

   return unique.size;
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
