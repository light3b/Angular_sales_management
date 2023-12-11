import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlFileUploadComponent } from './xml-file-upload.component';

describe('XmlFileUploadComponent', () => {
  let component: XmlFileUploadComponent;
  let fixture: ComponentFixture<XmlFileUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XmlFileUploadComponent]
    });
    fixture = TestBed.createComponent(XmlFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
