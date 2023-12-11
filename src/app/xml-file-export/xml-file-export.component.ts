import { Component, Input } from '@angular/core';
import * as XLSX from 'xlsx';
import { ExcelSheet } from '../excel-sheets';

@Component({
  selector: 'app-xml-file-export',
  templateUrl: './xml-file-export.component.html',
  styleUrls: ['./xml-file-export.component.css']
})
export class XmlFileExportComponent {
  @Input() tblelements: any;

  onExportExcelFile(){
    if(!this.tblelements) return;
    if(this.tblelements.length < 1) return;

    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    this.tblelements.forEach((sheet:ExcelSheet, index:number) => {
      const workSheet: XLSX.WorkSheet=XLSX.utils.table_to_sheet(sheet.table);
      XLSX.utils.book_append_sheet(workBook, workSheet, sheet.name);
    });

    XLSX.writeFile(workBook,'SheetJS.xlsx');
  }
}
