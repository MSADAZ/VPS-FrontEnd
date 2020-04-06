import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficalFormComponent } from './offical-form.component';

describe('OfficalFormComponent', () => {
  let component: OfficalFormComponent;
  let fixture: ComponentFixture<OfficalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
