import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlFileExportComponent } from './xml-file-export.component';

describe('XmlFileExportComponent', () => {
  let component: XmlFileExportComponent;
  let fixture: ComponentFixture<XmlFileExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XmlFileExportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XmlFileExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
