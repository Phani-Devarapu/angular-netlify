import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  userData:any;

  constructor() { }

  public setUserData(userInfo :any)
  {
    this.userData = userInfo;
    console.log("in the servie");
    console.log(this.userData.user.uid);
  
  }

  public getUserData()
  {
  return this.userData;
  }

  public getUserUid()
  {
  return this.userData.user.uid;
  }
}
