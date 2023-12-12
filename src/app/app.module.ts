import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestLocationModule } from './test-location/test-location.module';
import { bookModule } from './book/book.module';
import { XmlFileUploadComponent } from './xml-file-upload/xml-file-upload.component';
import { XmlFileViewComponent } from './xml-file-view/xml-file-view.component';
import { XmlFileExportComponent } from './xml-file-export/xml-file-export.component';
import { XmlToDatabaseComponent } from './xml-to-database/xml-to-database.component';

import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    AppComponent,
    XmlFileUploadComponent,
    XmlFileViewComponent,
    XmlFileExportComponent,
    XmlToDatabaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TestLocationModule,
    bookModule,
    HttpClientModule,
    FullCalendarModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
