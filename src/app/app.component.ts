import { Component, OnInit } from '@angular/core';
// import { NgOptimizedImage } from '@angular/common'
// import { NgFor } from '@angular/common';
import { ExcelSheet, Sheet } from './excel-sheets';
import { initFlowbite } from "flowbite";

interface Book{
  title: string;
  author: string;
  location: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string = 'sales';
  xmlurl = '';
  excelfile: any;
  tblelements: any;
  excelSheets = [];

  ngOnInit(): void {
    initFlowbite();
  }

  onChangeXmlUrl(url: string){
    this.xmlurl = url;
  }

  onChangeExcelFile(file: File)
  {
    this.excelfile = file;
  }

  onChangeTblElement(element: any)
  {
    this.tblelements = element;
  }

  // onSheetsChange(sheets: Sheet[]){
  //   this.excelSheets = sheets;
  // }

  // onClickSheet(index: number){
  //   // Here you can add logic to handle a click on a sheet
  //   console.log('Clicked sheet:', this.excelSheets[index].name);
  // }

}
