import { Component, Injectable, Output, EventEmitter,  Directive, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { read, utils, writeFile } from 'xlsx';

@Component({
  selector: 'app-xml-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './xml-file-upload.component.html',
  styleUrl: './xml-file-upload.component.css'
})

@Injectable()
export class XmlFileUploadComponent implements  AfterViewInit {
  @ViewChild('xmlinput', {static: false}) inputbutton: any;
  @Output() xmlurl = new EventEmitter<string>();
  @Output() excelfile = new EventEmitter<File>();

  status: "initial" | "uploading" | "success" | "fail" = "initial"; // Variable to store file status
  file: File | null = null; // Variable to store file

  constructor(private http: HttpClient, private renderer: Renderer2) {}

  ngAfterViewInit() {

  }

  onSelectFile(): void{
    const element = this.inputbutton.nativeElement;
    this.renderer.selectRootElement(element).click();
  }

  ngOnInit(): void {
  }

  // On file Select
  // onChange(event: any) {
  //   const file: File = event.target.files[0];

  //   if (file) {
  //     this.status = "initial";
  //     this.file = file;
  //     this.excelfile.emit(file);
  //     this.outXmlUrl(this.makeXmlUrl());
  //     // this.onUpload();
  //   }

  //   this.clearInputValue();
  // }

  // clearInputValue(){
  //   const element = this.inputbutton.nativeElement;
  //   this.renderer.selectRootElement(element).value = '';
  // }

  // outXmlUrl(url: string){
  //   console.log('outxmlurl = ', url);
  //   this.xmlurl.emit(url);
  // }

  // makeXmlUrl(): string{
  //   const url : string = this.file?.name ?? '';
  //   return url;
  // }

  // onUpload() {
  //   if (this.file) {
  //     const formData = new FormData();

  //     formData.append('file', this.file, this.file.name);

  //     const upload$ = this.http.post("http://localhost:8000/xml/upload.php", formData);

  //     this.status = 'uploading';

  //     upload$.subscribe({
  //       next: () => {
  //         this.status = 'success';

  //         this.outXmlUrl(this.makeXmlUrl());
  //       },
  //       error: (error: any) => {
  //         this.status = 'fail';
  //         return throwError(() => error);
  //       },
  //     });
  //   }
  // }
}
