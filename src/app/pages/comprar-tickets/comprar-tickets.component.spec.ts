import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarTicketsComponent } from './comprar-tickets.component';

describe('ComprarTicketsComponent', () => {
  let component: ComprarTicketsComponent;
  let fixture: ComponentFixture<ComprarTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprarTicketsComponent]
    });
    fixture = TestBed.createComponent(ComprarTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
