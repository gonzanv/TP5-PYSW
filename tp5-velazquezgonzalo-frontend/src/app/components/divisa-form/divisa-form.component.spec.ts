import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisaFormComponent } from './divisa-form.component';

describe('DivisaFormComponent', () => {
  let component: DivisaFormComponent;
  let fixture: ComponentFixture<DivisaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivisaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DivisaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
