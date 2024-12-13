import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumedadRelativaComponent } from './humedad-relativa.component';

describe('HumedadRelativaComponent', () => {
  let component: HumedadRelativaComponent;
  let fixture: ComponentFixture<HumedadRelativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HumedadRelativaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumedadRelativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
