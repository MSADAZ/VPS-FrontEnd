import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/components/status/status.component.spec.ts
import { StatusComponent } from './status.component';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusComponent ]
=======
import { VisaReviewComponent } from './visa-review.component';

describe('VisaReviewComponent', () => {
  let component: VisaReviewComponent;
  let fixture: ComponentFixture<VisaReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaReviewComponent ]
>>>>>>> bd550bf4ffea612ae63110a1c2a91dbf73f0a1b6:src/app/components/review/visa-review/visa-review.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:src/app/components/status/status.component.spec.ts
    fixture = TestBed.createComponent(StatusComponent);
=======
    fixture = TestBed.createComponent(VisaReviewComponent);
>>>>>>> bd550bf4ffea612ae63110a1c2a91dbf73f0a1b6:src/app/components/review/visa-review/visa-review.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
