import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceNowSingleComponent } from './service-now-single.component';

describe('ServiceNowSingleComponent', () => {
  let component: ServiceNowSingleComponent;
  let fixture: ComponentFixture<ServiceNowSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceNowSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceNowSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
