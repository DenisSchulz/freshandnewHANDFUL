function Skill(id, line)
{
 this.id = id;

 this.words = line.split(seperator);

 this.name = this.words[0];

 this.module = pushIfExisting(this.words[1], this.module);

 this.category = pushIfExisting(this.words[2], this.category);

 this.studyProgram =  pushIfExisting(this.words[3], this.studyProgram);

 this.projects = [];

 for (var i = 4; i < this.words.length; i++)
 {
   this.projects.push(this.words[i]);
 }




 for (var i = 0; i < this.projects.length; i++)
 {
   pushIfExisting(projects, this.projects[i]);
 }

}
