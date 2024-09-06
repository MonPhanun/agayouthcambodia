import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorshipbandComponent } from './worshipband.component';

describe('WorshipbandComponent', () => {
  let component: WorshipbandComponent;
  let fixture: ComponentFixture<WorshipbandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorshipbandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorshipbandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
