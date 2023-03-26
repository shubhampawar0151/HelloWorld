import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomComComponent } from './random-com.component';

describe('RandomComComponent', () => {
  let component: RandomComComponent;
  let fixture: ComponentFixture<RandomComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
