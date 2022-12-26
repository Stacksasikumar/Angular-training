import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup,FormControl ,Validators} from "@angular/forms";
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  frmLogin: FormGroup;
  user$!: Observable<any>;

  constructor(private http:HttpClient, private router:Router){
    this.frmLogin= this.createFormGroup();
  }
  createFormGroup(){
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])

    })
  };

  onsubmit(){
    let currentUser = this.frmLogin.value.username;
    let currentPassword = this.frmLogin.value.password;

    this.user$ = this.http.get('http://localhost:3000/employees',
    {
      params:{username:currentUser,password:currentPassword}
    }
);
this.user$.subscribe(data=>{
  if(data[0].username == currentUser && data[0].password == currentPassword){
    console.log("Valid User");
    localStorage.setItem('validuser', currentUser);
    this.router.navigateByUrl('/home');
  }
  else{
    console.log("Invalid User");     
    this.router.navigateByUrl('/login');
  }
})


}
  

}
