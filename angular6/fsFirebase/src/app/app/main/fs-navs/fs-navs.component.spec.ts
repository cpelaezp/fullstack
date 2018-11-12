import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsNavsComponent } from './fs-navs.component';

describe('FsNavsComponent', () => {
  let component: FsNavsComponent;
  let fixture: ComponentFixture<FsNavsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsNavsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsNavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
