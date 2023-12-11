import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlToDatabaseComponent } from './xml-to-database.component';

describe('XmlToDatabaseComponent', () => {
  let component: XmlToDatabaseComponent;
  let fixture: ComponentFixture<XmlToDatabaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XmlToDatabaseComponent]
    });
    fixture = TestBed.createComponent(XmlToDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
