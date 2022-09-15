import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdsBannerComponent } from './create-ads-banner.component';

describe('CreateAdsBannerComponent', () => {
  let component: CreateAdsBannerComponent;
  let fixture: ComponentFixture<CreateAdsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdsBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAdsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
