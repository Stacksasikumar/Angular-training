import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup,FormControl ,Validators} from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent   {

  frmRegister: FormGroup;

  constructor(private http:HttpClient){
    this.frmRegister= this.createFormGroup();
  }


  createFormGroup(){
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])

    })
  };

  onsubmit(){
    //console.log(this.frmRegister.value);
    this.http.post(
      'http://localhost:3000/employees', 
      this.frmRegister.value
    ).subscribe(data => console.log(data));

  }

}
