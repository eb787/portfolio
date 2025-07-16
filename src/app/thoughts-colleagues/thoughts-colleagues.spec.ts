import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtsColleagues } from './thoughts-colleagues';

describe('ThoughtsColleagues', () => {
  let component: ThoughtsColleagues;
  let fixture: ComponentFixture<ThoughtsColleagues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThoughtsColleagues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThoughtsColleagues);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
