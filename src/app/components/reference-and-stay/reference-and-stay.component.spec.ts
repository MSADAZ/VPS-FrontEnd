import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceAndStayComponent } from './reference-and-stay.component';

describe('ReferenceAndStayComponent', () => {
  let component: ReferenceAndStayComponent;
  let fixture: ComponentFixture<ReferenceAndStayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceAndStayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceAndStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
