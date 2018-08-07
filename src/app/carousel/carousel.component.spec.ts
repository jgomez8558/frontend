import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CArouselComponent } from './carousel.component';

describe('CArouselComponent', () => {
  let component: CArouselComponent;
  let fixture: ComponentFixture<CArouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CArouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CArouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
