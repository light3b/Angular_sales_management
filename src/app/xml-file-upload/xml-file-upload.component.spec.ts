import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlFileUploadComponent } from './xml-file-upload.component';

describe('XmlFileUploadComponent', () => {
  let component: XmlFileUploadComponent;
  let fixture: ComponentFixture<XmlFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XmlFileUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XmlFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
