import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { Issue } from '../../components/issues/single-issue/issue.model';

@Injectable()
export class IssueService {

  constructor(
      private http: HttpClient
  ){}

  private baseUrl = 'https://my.api.mockaroo.com';

  getIssues(){
    console.log("here");
    return this.http.get<any[]>('https://my.api.mockaroo.com/issues.json?key=4835b120')
      .map(
        (issues) => {
          console.log("response -> ", issues.length);

          for(let issue of issues){ 
            issue = this.addMockLabel(issue);
            issue = new Issue(
              issue.id,
              issue.title,
              issue.description,
              issue.in_file,
              issue.author,
              issue.label
            )
          }

          return issues;
        }
      );
  }




  // ---
  // PRIVATE METHODS.
  // ---

  // adds some random label to an issue
  private addMockLabel( issue: any ) {
    let labelsArr: string[]       = [ 'bug', 'feature', 'style' ];
    let statusArr: string[]       = [ 'pending', 'approved', 'declined', 'solved', 'failed' ];
    let randomLabelIndex: number  = Math.floor((Math.random()*3));
    let randomStatusIndex: number = Math.floor((Math.random()*5));

    issue.label = { type: labelsArr[randomLabelIndex], status: statusArr[randomStatusIndex] };
    console.log("label: ", issue.label);
    return issue;
  }

  // ---
  // ERROR HANDLING.
  // ---

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  /*private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }*/

}
