import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosApComponent } from './logos-ap.component';

describe('LogosApComponent', () => {
  let component: LogosApComponent;
  let fixture: ComponentFixture<LogosApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogosApComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
