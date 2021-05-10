import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShowGroupComponent } from './show-group.component';

describe('ShowGroupComponent', () => {
  let component: ShowGroupComponent;
  let fixture: ComponentFixture<ShowGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
