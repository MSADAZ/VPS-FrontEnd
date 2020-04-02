import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaInformationComponent } from './visa-information.component';

describe('VisaInformationComponent', () => {
  let component: VisaInformationComponent;
  let fixture: ComponentFixture<VisaInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
