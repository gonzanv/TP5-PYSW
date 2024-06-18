import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionListadoComponent } from './transaccion-listado.component';

describe('TransaccionListadoComponent', () => {
  let component: TransaccionListadoComponent;
  let fixture: ComponentFixture<TransaccionListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransaccionListadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransaccionListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
