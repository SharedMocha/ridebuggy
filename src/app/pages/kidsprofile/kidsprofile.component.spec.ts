import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsprofileComponent } from './kidsprofile.component';

describe('KidsprofileComponent', () => {
  let component: KidsprofileComponent;
  let fixture: ComponentFixture<KidsprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
