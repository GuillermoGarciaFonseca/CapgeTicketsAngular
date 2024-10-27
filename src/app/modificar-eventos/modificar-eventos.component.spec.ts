import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarEventosComponent } from './modificar-eventos.component';

describe('ModificarEventosComponent', () => {
  let component: ModificarEventosComponent;
  let fixture: ComponentFixture<ModificarEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarEventosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
