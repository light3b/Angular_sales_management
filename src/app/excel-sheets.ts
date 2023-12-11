import {ElementRef} from "@angular/core";

export interface ExcelSheet{
  name: string;
  table: ElementRef;
}

export interface Sheet{
  name: string;
  html: string;
}
