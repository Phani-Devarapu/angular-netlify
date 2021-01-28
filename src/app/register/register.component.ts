import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public auth: AngularFireAuth) { }

  email:string;
  password:string;
  confirmPassword:string

  ngOnInit() {
  }

  register()
  {

    if(this.password == this.confirmPassword)
    {

    }

    this.auth.createUserWithEmailAndPassword(this.email, this.password)
  .then((user) => {
    console.log("i am here");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  }

}
