import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceNowAllTicketsComponent } from './service-now-all-tickets.component';

describe('ServiceNowAllTicketsComponent', () => {
  let component: ServiceNowAllTicketsComponent;
  let fixture: ComponentFixture<ServiceNowAllTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceNowAllTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceNowAllTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
