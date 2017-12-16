export class Issue {
  public id: number;
  public title: string;
  public description: string;
  public in_file: string;
  public author: Object;
  public label: Object;

  /*constructor(issue: Object){
    this.id               = issue.id;
    this.title            = issue.title;
    this.description      = issue.description;
    this.fileName         = issue.at_file;
    this.authorFirstName  = issue.author.first_name;
    this.authorLastName   = issue.author.last_name;
    this.label            = issue.label ? issue.label : '';
  }*/

  constructor(id: number, title: string, description: string, in_file: string, author: Object, label: Object){
    this.id               = id;
    this.title            = title;
    this.description      = description;
    this.in_file         = in_file;
    this.author           = author;
    this.label            = label ? label : false;
  }

}

