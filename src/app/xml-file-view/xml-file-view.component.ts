import { Component, Input, SimpleChanges, Output, ElementRef,  EventEmitter, AfterViewInit,ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { read, utils, writeFile } from 'xlsx';
import { ExcelSheet, Sheet } from '../excel-sheets';

@Component({
  selector: 'app-xml-file-view',
  templateUrl: './xml-file-view.component.html',
  styleUrls: ['./xml-file-view.component.css']
})
export class XmlFileViewComponent implements AfterViewInit{
  constructor(private http: HttpClient) {}
  @ViewChild('tablenode', {static: false}) tablenode: any;
  @Input() xmlurl = '';
  @Input() excelfile: any;
  @Output() tblelementlist = new EventEmitter<ExcelSheet[]>();
  @Output() sheetsChanged = new EventEmitter<Sheet[]>();

  questionSet: any;
  excelSheets: Sheet[] = [];
  selectSheet = 0;
  tblelements: ExcelSheet[] = [];

  ngAfterViewInit(): void {

  }

  downloadFile() {
    const fileUrl = 'http://localhost:8000/xml/uploads/'+this.xmlurl; // Replace with your file URL

    // Set the headers to specify that you expect a binary response
    const headers = new HttpHeaders().set('Accept', 'application/xml');

    // Make a GET request to the file URL
    this.http.get(fileUrl, { headers, responseType: 'text' }).subscribe((response: string) => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(response, 'application/xml');
      this.questionSet = xml.documentElement;

    });
  }

  clearExcelHtml(){
    this.excelSheets.splice(0,this.excelSheets.length);
  }

  onClickSheet(index: number){
    this.selectSheet = index;
    // setTimeout(() => {
    //   this.tblelements.push({name: this.excelSheets[index].name, table: this.tablenode.nativeElement.children[0]});
    // }, 100);

    setTimeout(() => {
      this.addTableElement({name: this.excelSheets[index].name, table: this.tablenode.nativeElement.children[0]});
      this.tblelementlist.emit(this.tblelements);
    }, 300);
  }

  addTableElement(element: ExcelSheet){
    this.tblelements.forEach((item, index)=>{
      if(item.name == element.name)
      {
        this.tblelements.splice(index, 1);
      }
    })

    this.tblelements.push(element);
  }

  ngOnChanges(changes: SimpleChanges) {
    // this.downloadFile();
    if(this.excelfile)
    {
      this.clearExcelHtml();
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const xslx = read(event.target.result);
        const sheets = xslx.SheetNames;
        console.log("sheets = ", sheets);

        this.excelSheets = xslx.SheetNames.map(name => ({
          name: name,
          html: utils.sheet_to_html(xslx.Sheets[name])
        }));

        this.sheetsChanged.emit(this.excelSheets);

        // xslx.SheetNames.forEach(name => {
        //   /* generate HTML from the corresponding worksheets */
        //   const html = utils.sheet_to_html(xslx.Sheets[name]);
        //   // console.log("xslx sheet = ", name, html);
        //   /* add to state */
        //   this.excelSheets.push({name: name, html: html});
        // });
      }

      reader.readAsArrayBuffer(this.excelfile);
    }

  }

}
