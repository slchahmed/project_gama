import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipyComponent } from './zipy.component';

describe('ZipyComponent', () => {
  let component: ZipyComponent;
  let fixture: ComponentFixture<ZipyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZipyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
