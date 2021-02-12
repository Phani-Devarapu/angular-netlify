import { Injectable } from '@angular/core';
import { Reference } from '@angular/fire/storage/interfaces';
import { Observable } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root'
})
export class UserfileService {

  userFlieList:string[]=[];

  constructor() { }


  public setUserFiles(userFile:any){
    console.log("inside the get ");
    userFile.forEach(element => {
      console.log(element.name);
      this.userFlieList.push(element.name);
      console.log(this.userFlieList.length);
    });
  //this.userFlieList = userFile;

 
  }

  public getUserFiles()
  {
    // console.log("inside the get ");
    // this.userFlieList.forEach(element => {
    //   console.log(element.name);
    // });
    console.log(this.userFlieList.length);
    this.userFlieList.forEach(ele=>{console.log(ele)});
     return this.userFlieList;

  }
}
