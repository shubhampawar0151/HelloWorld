import { Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { ContactPageComponent } from '../contact-page/contact-page.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private http: HttpClient, private ngxCsvParser: NgxCsvParser, private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }
  header: boolean = false;
  displayedColumns: any[]= [];
  dataSource: any;

  isData = false;
  tooltipText = "dummy 222";

  allData: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    setTimeout(() => this.dataSource.paginator = this.paginator);

  }

  ngOnInit(): void {
    this.displayedColumns = ['HAEMATOCRIT','HAEMOGLOBINS','ERYTHROCYTE','LEUCOCYTE','THROMBOCYTE','MCH','MCHC','MCV','AGE','SEX','SOURCE','HEALTH','CONTACT'];
    this.header = (this.header as unknown as string) === 'true' || this.header === true;
  
    this.http.get('http://127.0.0.1:8000/getAll').subscribe((data)=>{
      console.log("got the data :: "+data);
      this.isData = true;
      let arr: any;
      this.allData = data;
      arr = data;
      this.dataSource = new MatTableDataSource(arr);
      console.log("datasource :: ",this.dataSource);
      this.dataSource.paginator = this.paginator;

    },(error)=>{
      console.log("Error :: ",error);
    })

    

  }

  buttonClick(event : any){

    // let dummy = this.allData.filter((a: any) =>{
    //   console.log(a);
    //   return a[10] == 2;
    // } )

    console.log("Event ::: ",event.target.value);
    let j = 0;
    if(event.target.value === "Healthy"){
      j=0;
    }else if(event.target.value === "Moderate"){
      j=1;
    }else if(event.target.value === "Un-Healthy"){
      j=2;
    }else if(event.target.value === "All"){
      j = 3;
    }

    if(j === 3){
      this.dataSource = new MatTableDataSource(this.allData);
      this.dataSource.paginator = this.paginator;
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      } 
    }else{
      let dummy = [];

    for(let i=0;i<this.allData.length;i++){
      // console.log("$$$$$ :: ",this.allData[i][2]);
      if(this.allData[i][11] == j){
        dummy.push(this.allData[i]);
      }
    }

    this.dataSource = new MatTableDataSource(dummy);
    // console.log("datasource dummy :: ",dummy);
    this.dataSource.paginator = this.paginator;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    } 
    }

    
  }

  openDialog(data : any){
    let dialogRef = this.dialog.open(ContactPageComponent, {
      height: '220px',
      width: '400px',
      data: data
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(this.dataSource);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    } 
  }



announceSortChange(sortState: any) {
  // This example uses English messages. If your application supports
  // multiple language, you would internationalize these strings.
  // Furthermore, you can customize the message to add additional
  // details about the values being sorted.
  if (sortState.direction) {
    this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  } else {
    this._liveAnnouncer.announce('Sorting cleared');
  }
}

}



export interface PeriodicElement {
  name: any;
  position: any;
  weight: any;
  symbol: any;
}
