import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Issue } from '../single-issue/issue.model';
import { TitleCasePipe } from '../../../pipes/title-case.pipe';

@Component({
  selector: 'app-single-issue-card',
  templateUrl: './single-issue-card.component.html',
  styleUrls: ['./single-issue-card.component.css'],
  pipes: [TitleCasePipe]
})
export class SingleIssueCardComponent implements OnInit {

  @Input() issue: Issue;

  constructor() {  }

  ngOnInit() {
    //console.log("# got it: ", this.issue);
  }

  showIssueQuickInfo () {
    console.log("# showIssueQuickInfo: clicked!");
  }
  showIssueFullInfo () {
    console.log("# showIssueFullInfo: clicked!");
  }

  ngOnDestroy(){}
}
