import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-component',
  templateUrl: './info-component.component.html',
  styleUrls: ['./info-component.component.css']
})
export class InfoComponentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InfoComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log("data fetched :: ",this.data);
  }

  insert(): void  {
    this.http.post('http://127.0.0.1:8000/insert',this.data).subscribe((data)=>{
      console.log("Insertion succesfull 200");
    },(error)=>{
      console.log("Error found in insertion");
    })
  }

}
