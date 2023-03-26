import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InfoComponentComponent } from '../info-component/info-component.component';
import { HttpClient } from "@angular/common/http";
import {inputValidator} from "../custom-validator/input.validator";
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  inputForm = this.fb.group({
    HAEMATOCRIT: [0 ],
    HAEMOGLOBINS: [0 ],

    ERYTHROCYTE: [0 ],
    LEUCOCYTE: [0 ],
    THROMBOCYTE: [0 ],
    MCH: [0 ],
    MCHC: [0 ],
    MCV: [0 ],
    AGE: [0 ],
    SEX: [0 ],
    SOURCE: [0]
  });

  selected = 'Male';

  gender = ['Male','Female']

  disabled = true;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private http: HttpClient) { 
    // this.inputForm.controls['SOURCE'].disable();
  }

  preview: string = '';

  changeValue(){
    // console.log("Change Value called : ",this.inputForm.value.);
    if(this.inputForm.value &&  this.inputForm.value.HAEMATOCRIT != null && this.inputForm.value.HAEMATOCRIT > 0 &&
      this.inputForm.value.HAEMOGLOBINS != null && this.inputForm.value.HAEMOGLOBINS > 0 &&
      this.inputForm.value.ERYTHROCYTE != null && this.inputForm.value.ERYTHROCYTE > 0 &&
      this.inputForm.value.LEUCOCYTE != null && this.inputForm.value.LEUCOCYTE > 0 &&
      this.inputForm.value.THROMBOCYTE != null && this.inputForm.value.THROMBOCYTE > 0 &&
      this.inputForm.value.MCH != null && this.inputForm.value.MCH > 0 &&
      this.inputForm.value.MCHC != null && this.inputForm.value.MCHC > 0 &&
      this.inputForm.value.MCV != null && this.inputForm.value.MCV > 0 &&
      this.inputForm.value.AGE != null && this.inputForm.value.AGE > 0
      ){
        this.disabled = false
    }else{
      this.disabled = true;
    }
  }


  ngOnInit(): void {
  }

  save() {
    this.preview = JSON.stringify(this.inputForm.value);
    
    let body = {
      "name": "str",
      "description": "Union[str, None] = None",
      "price": 12,
      "tax": 20
    }
    console.log(this.inputForm.value);
    let obj : any = this.inputForm.value;
    console.log("Obj ",obj);
    // if(obj.SEX =="Male"){
    //   obj.SEX = 1.0
    // }
    this.http.post('http://127.0.0.1:8000/assign',this.inputForm.value).subscribe((data)=>{
      console.log("got the data :: "+data);
      console.log(typeof(data));
      obj['HEALTH'] = data;
      let dialogRef = this.dialog.open(InfoComponentComponent, {
        height: '550px',
        width: '600px',
        data: obj
      });
    },(error)=>{
      console.log("Error :: ",error);
    })

    console.log(this.inputForm.value);
  }

  selectGender(event : any){

  }

}
