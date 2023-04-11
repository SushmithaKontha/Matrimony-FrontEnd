import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullProfilesComponent } from './full-profiles.component';

describe('FullProfilesComponent', () => {
  let component: FullProfilesComponent;
  let fixture: ComponentFixture<FullProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullProfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
