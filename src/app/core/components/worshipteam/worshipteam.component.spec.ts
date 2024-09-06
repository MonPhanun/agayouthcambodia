import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorshipteamComponent } from './worshipteam.component';

describe('WorshipteamComponent', () => {
  let component: WorshipteamComponent;
  let fixture: ComponentFixture<WorshipteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorshipteamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorshipteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
