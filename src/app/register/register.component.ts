import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public auth: AngularFireAuth,private router: Router) { }

  useremail:string;
  userpassword:string;
  userconfirmpassword:string;


  ngOnInit() {
  }

  register()
  {

    if(this.userpassword == this.userconfirmpassword)
    {
      this.auth.createUserWithEmailAndPassword(this.useremail, this.userpassword)
      .then((user) => {
        console.log("i am here");
        console.log(user.user.uid);
        this.router.navigate(['/home']);

      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
      }
    }

   

}
