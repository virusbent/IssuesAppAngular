import { HomeComponentComponent } from "./components/home-component/home-component.component";
import { LoginComponent } from "./auth/login/login.component";
import { IssuesComponent } from "./components/issues/issues.component";
import { SingleIssueComponent } from "./components/issues/single-issue/single-issue.component";
import {Transition} from "@uirouter/angular";

/** States */
export const homeState = {
    name: 'home',
    url: '/home',
    component: HomeComponentComponent
};

export const loginState = {
    name: 'login',
    url: '/login',
    component: LoginComponent
};

export const issuesState = {
    name: 'issues',
    url: '/issues',
    component: IssuesComponent
};

export const singleIssueState = {
    name: 'issues.single-issue',
    url: '/:issueId',
    component: SingleIssueComponent
};

/*export const peopleState = {
    name: 'people',
    url: '/people',
    component: People,
    resolve: [
        {
            token: 'people',
            deps: [PeopleService],
            resolveFn: (peopleSvc) => peopleSvc.getAllPeople()
        }
    ]
};

export const personState = {
    name: 'people.person',
    url: '/:personId',
    component: Person,
    resolve: [
        {
            token: 'person',
            deps: [Transition, 'people'],
            resolveFn: (trans, people) =>
                people.find(person => person.id === trans.params().personId)
        }
    ]
};*/

