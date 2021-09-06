import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencistaComponent } from './conferencista.component';

describe('ConferencistaComponent', () => {
  let component: ConferencistaComponent;
  let fixture: ComponentFixture<ConferencistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferencistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
