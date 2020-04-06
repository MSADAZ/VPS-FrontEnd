import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaReviewComponent } from './visa-review.component';

describe('VisaReviewComponent', () => {
  let component: VisaReviewComponent;
  let fixture: ComponentFixture<VisaReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
