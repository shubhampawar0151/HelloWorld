import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportSVGComponent } from './export-svg.component';

describe('ExportSVGComponent', () => {
  let component: ExportSVGComponent;
  let fixture: ComponentFixture<ExportSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportSVGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
