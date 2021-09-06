import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosOrganizadoresComponent } from './eventos-organizadores.component';

describe('EventosOrganizadoresComponent', () => {
  let component: EventosOrganizadoresComponent;
  let fixture: ComponentFixture<EventosOrganizadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosOrganizadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosOrganizadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
