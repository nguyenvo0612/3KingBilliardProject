import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameComponent } from './frame';

describe('FrameComponent', () => {
  let component: FrameComponent;
  let fixture: ComponentFixture<FrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameComponent]
    });
    fixture = TestBed.createComponent(FrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});