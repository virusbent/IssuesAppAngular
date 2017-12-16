import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule } from "@uirouter/angular";
import { HttpClientModule  } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { uiRouterConfigFn } from "./router.config.js";
import {
    homeState,
    loginState,
    issuesState,
    singleIssueState
} from "./router.states.js";

import { AppComponent } from './app.component';
import { SidebarComponentComponent } from './common/sidebar-component/sidebar-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { LoginComponent } from './auth/login/login.component';
import { IssuesComponent } from './components/issues/issues.component';
import { SingleIssueComponent } from './components/issues/single-issue/single-issue.component';

/* SERVICES */
import { IssueService } from './services/issue-service/issue.service';
import { SingleIssueCardComponent } from './components/issues/single-issue-card/single-issue-card.component';
import { TitleCasePipe } from './pipes/title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponentComponent,
    HomeComponentComponent,
    LoginComponent,
    IssuesComponent,
    SingleIssueComponent,
    SingleIssueCardComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    UIRouterModule.forRoot({
      states: [
          homeState,
          loginState,
          issuesState,
          singleIssueState
      ],
      useHash: true,
      config: uiRouterConfigFn
    })
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
