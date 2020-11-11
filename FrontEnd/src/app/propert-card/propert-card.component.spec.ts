import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertCardComponent } from './propert-card.component';

describe('PropertCardComponent', () => {
  let component: PropertCardComponent;
  let fixture: ComponentFixture<PropertCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
