import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoListadoComponent } from './producto-listado.component';

describe('ProductoListadoComponent', () => {
  let component: ProductoListadoComponent;
  let fixture: ComponentFixture<ProductoListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoListadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductoListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
