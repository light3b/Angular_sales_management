import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlFileExportComponent } from './xml-file-export.component';

describe('XmlFileExportComponent', () => {
  let component: XmlFileExportComponent;
  let fixture: ComponentFixture<XmlFileExportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XmlFileExportComponent]
    });
    fixture = TestBed.createComponent(XmlFileExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
