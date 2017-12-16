import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Issue } from './issue.model';

@Component({
  selector: 'app-single-issue',
  templateUrl: './single-issue.component.html',
  styleUrls: ['./single-issue.component.css']
})
export class SingleIssueComponent implements OnInit {

  @Input() issue: Issue;

  constructor() {  }

  ngOnInit() {
    console.log("# got it: ", this.issue);
  }


  ngOnDestroy(){}

}
