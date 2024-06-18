import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketListadoComponent } from './ticket-listado.component';

describe('TicketListadoComponent', () => {
  let component: TicketListadoComponent;
  let fixture: ComponentFixture<TicketListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketListadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
