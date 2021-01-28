import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireAuth]
})
export class LoginComponent implements OnInit {

  constructor(public auth: AngularFireAuth) { }

  email:string;
  password:string;


  ngOnInit() {
  }

  login(){
    console.log(this.email);
    console.log(this.password);
    
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
