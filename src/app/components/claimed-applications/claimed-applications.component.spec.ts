import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimedApplicationsComponent } from './claimed-applications.component';

describe('ClaimedApplicationsComponent', () => {
  let component: ClaimedApplicationsComponent;
  let fixture: ComponentFixture<ClaimedApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimedApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimedApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
