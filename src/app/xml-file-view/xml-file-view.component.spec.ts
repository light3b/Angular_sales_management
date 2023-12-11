import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlFileViewComponent } from './xml-file-view.component';

describe('XmlFileViewComponent', () => {
  let component: XmlFileViewComponent;
  let fixture: ComponentFixture<XmlFileViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XmlFileViewComponent]
    });
    fixture = TestBed.createComponent(XmlFileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
