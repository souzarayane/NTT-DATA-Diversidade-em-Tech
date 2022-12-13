import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuTitleComponent } from './menu-title.component';

describe('MeuTitleComponent', () => {
  let component: MeuTitleComponent;
  let fixture: ComponentFixture<MeuTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
