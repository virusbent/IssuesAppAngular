import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IssueService } from '../../services/issue-service/issue.service'

import { SingleIssueComponent } from './single-issue/single-issue.component';
import { SingleIssueCardComponent } from './single-issue-card/single-issue-card.component';
import { Issue } from './single-issue/issue.model';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issues        = [];
  
  issuesLoaded  = false;

  constructor(private issueService: IssueService) {}

  ngOnInit() {
    //console.log("IssuesComponent pulling Issues");
    this.issueService.getIssues()
      .subscribe((issues: Issue[]) => {
        this.issues       = issues;
        this.issuesLoaded = true;
      });



  }






  ngOnDestroy(){}

}
