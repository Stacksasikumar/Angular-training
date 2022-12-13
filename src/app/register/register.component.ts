import { Component } from '@angular/core';
import { FormGroup,FormControl ,Validators} from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  frmRegister: FormGroup;

  constructor(){
    this.frmRegister= this.createFormGroup();
  }

  createFormGroup(){
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])

    })
  };

  onsubmit(){
    console.log(this.frmRegister.value);
  }

}
