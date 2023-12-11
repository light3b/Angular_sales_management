import { Component, NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { XmlFileExportComponent } from './xml-file-export/xml-file-export.component';
import { XmlFileUploadComponent } from './xml-file-upload/xml-file-upload.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, XmlFileExportComponent, XmlFileUploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SM';
}
