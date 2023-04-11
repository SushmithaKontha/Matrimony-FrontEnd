import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';

import { ShowProfileDetailsComponent } from './show-profile-details.component';

describe('ShowProfileDetailsComponent', () => {
  let component: ShowProfileDetailsComponent;
  let fixture: ComponentFixture<ShowProfileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatTableModule],
      declarations: [ ShowProfileDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
