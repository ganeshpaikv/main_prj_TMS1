import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerprofilesComponent } from './trainerprofiles.component';

describe('TrainerprofilesComponent', () => {
  let component: TrainerprofilesComponent;
  let fixture: ComponentFixture<TrainerprofilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerprofilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
