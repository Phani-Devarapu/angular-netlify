import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { UserinfoService } from '../services/userinfo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireAuth]
})
export class LoginComponent implements OnInit {

  constructor(public auth: AngularFireAuth,private router: Router, private userServ:UserinfoService) { }

  email:string;
  password:string;


  ngOnInit() {
  }

  login(){
    console.log(this.email);
    console.log(this.password);
    
    this.auth.signInWithEmailAndPassword(this.email, this.password)
  .then((user) => {
    console.log("i am here");
    this.userServ.setUserData(user)
    this.router.navigate(['/home']);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  
  }


}
