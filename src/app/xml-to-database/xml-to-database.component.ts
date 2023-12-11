import { Sheet } from './../excel-sheets';
import { Component, Input, ElementRef } from '@angular/core';
import { ExcelSheet } from '../excel-sheets';
import { read, utils } from 'xlsx';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-xml-to-database',
  templateUrl: './xml-to-database.component.html',
  styleUrls: ['./xml-to-database.component.css']
})
export class XmlToDatabaseComponent {
  @Input() tblelements: any;

  onExcelToDatabase(){
    if(!this.tblelements) return;
    if(this.tblelements.length < 1) return;

    this.tblelements.forEach((sheet:ExcelSheet, index:number) => {
      // "⑦明細集計"
      switch(sheet.name)
      {
        case "⑦明細集計":
          this.Tbl_7_to_DB(sheet);
          break;
        case "⑧情報入力":
          this.Tbl_8_to_DB(sheet);
          break;
      }
    });

  }

  Tbl_8_to_DB(sheet: ExcelSheet){
    type StringKeys<objType extends {}> = Array<Extract<keyof objType, string>>

    console.log("tbl = ", sheet.table);
    const workSheet: XLSX.WorkSheet=XLSX.utils.table_to_sheet(sheet.table);
    const tblobj = utils.sheet_to_json(workSheet);
    console.log("tblobj = ", tblobj);

    const dbTblCollection: Map<string, string>[]= [];
    const keys: string[] = [];
    const dbkeys: string[] = [];
    const keyMap = new Map<string, string>();
    let dbprefix = 'clt_';

    tblobj.forEach((obj, index) => {
      const dbColumnKeyMap = new Map<string, string>();
      let Item = obj as Object;
      const typedObjKeys = Object.keys(Item) as StringKeys<typeof Item>
      if(index == 0)
      {
        typedObjKeys.forEach((key, i) => {
          // console.log("value, key = ", Item[key], key, i);
          keys.push(key);
          let dbkey: string = dbprefix + i;
          dbkeys.push(dbkey);
          keyMap.set(key, dbkey);
          dbColumnKeyMap.set(dbkey, Item[key].toString());
        })
        dbTblCollection.push(dbColumnKeyMap);
      }
      else{
        typedObjKeys.forEach((key, i) => {
          let dbkey = keyMap.get(key) as string;

          if(dbkey === undefined)
          {
            dbkey = dbprefix + "un";
          }
          dbColumnKeyMap.set(dbkey, Item[key].toString());
        })
        dbTblCollection.push(dbColumnKeyMap);
      }
    })

    console.log("dbTblCollection = ", dbTblCollection);

  }

  Tbl_7_to_DB(sheet: ExcelSheet){
    type StringKeys<objType extends {}> = Array<Extract<keyof objType, string>>

    console.log("tbl = ", sheet.table);
    const workSheet: XLSX.WorkSheet=XLSX.utils.table_to_sheet(sheet.table);
    const tblobj = utils.sheet_to_json(workSheet);
    console.log("tblobj = ", tblobj);

    const dbTblCollection: Map<string, string>[]= [];
    const keys: string[] = [];
    const dbkeys: string[] = [];
    const keyMap = new Map<string, string>();
    let dbprefix = 'clt_';

    tblobj.forEach((obj, index) => {
      const dbColumnKeyMap = new Map<string, string>();
      let Item = obj as Object;
      const typedObjKeys = Object.keys(Item) as StringKeys<typeof Item>
      if(index == 0)
      {
        typedObjKeys.forEach((key, i) => {
          // console.log("value, key = ", Item[key], key, i);
          keys.push(key);
          let dbkey: string = dbprefix + i;
          dbkeys.push(dbkey);
          keyMap.set(key, dbkey);
          dbColumnKeyMap.set(dbkey, Item[key].toString());
        })
        dbTblCollection.push(dbColumnKeyMap);
      }
      else{
        typedObjKeys.forEach((key, i) => {
          let dbkey = keyMap.get(key) as string;

          if(dbkey === undefined)
          {
            dbkey = dbprefix + "un";
          }
          dbColumnKeyMap.set(dbkey, Item[key].toString());
        })
        dbTblCollection.push(dbColumnKeyMap);
      }
    })

    console.log("dbTblCollection = ", dbTblCollection);
  }



}
