import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarAltaComponent } from './dar-alta.component';

describe('DarAltaComponent', () => {
  let component: DarAltaComponent;
  let fixture: ComponentFixture<DarAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarAltaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
