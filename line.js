function Line(id, line)
{
 this.id = id;

 this.words = line.split(seperator); // this.words entspricht den comma-seperated values in einem array

 this.skill = this.words[0];

 this.module = this.words[1];

 this.category = this.words[2];

 this.studyProgram = this.words[3];

 this.description = this.words[4];


 this.pos;

}


// Wofür wird "this" verwendet? -->
