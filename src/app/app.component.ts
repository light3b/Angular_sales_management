import { Component, OnInit } from '@angular/core';
// import { NgOptimizedImage } from '@angular/common'
// import { NgFor } from '@angular/common';
import { ExcelSheet, Sheet } from './excel-sheets';
import { initFlowbite } from "flowbite";
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import listPlugin from '@fullcalendar/list';

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
  calendarClassNames = ['bg-blue-500', 'text-white', 'text-center']

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      start: 'prevYear,nextYear', // Custom buttons + Today button at the start
      center: 'title', // Title in the center
      end: 'prev,next' // Empty, or whatever controls you want
    },
    plugins: [dayGridPlugin],
    locales: [jaLocale],
    locale: 'ja',  // Set Japanese locale
    events: [
      { title: '78900', date: '2023-11-30', classNames: [...this.calendarClassNames] },
      { title: '12人', date: '2023-11-30', classNames: [...this.calendarClassNames] },
      { title: '89500', date: '2023-12-05', classNames: [...this.calendarClassNames] },
      { title: '15人', date: '2023-12-05', classNames: [...this.calendarClassNames] },
      { title: '75300', date: '2023-12-11', classNames: [...this.calendarClassNames] },
      { title: '11人', date: '2023-12-11', classNames: [...this.calendarClassNames] },
      { title: '54800', date: '2023-12-20', classNames: [...this.calendarClassNames] },
      { title: '8人', date: '2023-12-20', classNames: [...this.calendarClassNames] },
      { title: '67100', date: '2023-12-30', classNames: [...this.calendarClassNames] },
      { title: '10人', date: '2023-12-30', classNames: [...this.calendarClassNames] },
      { title: '75300', date: '2024-01-03', classNames: [...this.calendarClassNames] },
      { title: '11人', date: '2024-01-03', classNames: [...this.calendarClassNames] },
    ],
    eventOrder: () => 0
  };

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
