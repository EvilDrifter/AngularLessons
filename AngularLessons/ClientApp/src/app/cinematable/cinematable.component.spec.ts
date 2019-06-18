import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinematableComponent } from './cinematable.component';

describe('CinematableComponent', () => {
  let component: CinematableComponent;
  let fixture: ComponentFixture<CinematableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinematableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinematableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
