import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleIssueCardComponent } from './single-issue-card.component';

describe('SingleIssueCardComponent', () => {
  let component: SingleIssueCardComponent;
  let fixture: ComponentFixture<SingleIssueCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleIssueCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleIssueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
