import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";
import { AngularFireAuth } from '@angular/fire/auth';
import { not } from '@angular/compiler/src/output/output_ast';
import { ListResult, Reference } from '@angular/fire/storage/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private storage: AngularFireStorage,public auth: AngularFireAuth) { }

  ngOnInit() {

   this.getdata();

  }


   prefix="";
   totalItems :Reference[]=[];
   user =this.auth.authState.subscribe(user=>{
    if(user) 
    {
      //console.log(user.uid);
      this.prefix = user.uid;
    }
  })

 

public getdata(){
  console.log("the prefix is" + this.prefix);
  this.storage.ref(this.prefix).listAll().subscribe(data=>{
   // console.log(data.prefixes.forEach(e=>{e.listAll().then(ad=>{console.log(ad)})}));

   data.prefixes.forEach(e=>
    {
      e.listAll().then(ad=>
        {
         // console.log(ad);
          
          ad.items.forEach(itms=>{
            //console.log(itms.name);
            this.assignValues(itms);
            //console.log(itms.getDownloadURL().then(dUrl=>{console.log(dUrl)}));
          })
        
        })});


  });
 
  console.log("the full oath")
  console.log(this.totalItems.length);
  
 }
public assignValues(str : Reference)
{
  this.totalItems.push(str);
  console.log(str);
}

  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          var name = file.name;
          const fileRef = this.storage.ref(this.prefix+"/"+name);
        // const fileRef = this.storage.ref();
        this.storage.ref(this.prefix).listAll().subscribe((res)=>{
          console.log("i a hrere");
          console.log(res);
        })

        this.storage.ref(this.prefix).listAll().subscribe(data=>{
          data.items.forEach(e=>{
              e.getDownloadURL().then((url)=>{
                console.log(url)
              })
          })
        });

          this.storage.upload(this.prefix+"/"+name, file).snapshotChanges().pipe(
            finalize(() => {
               fileRef.getDownloadURL().subscribe((url) => {
                 console.log(url);
                alert('Upload Successful');
              })
            })
          ).subscribe();



          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

            

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }


  public uploadFile()
  {

    // var name = this.selectedImage.name;
    // const fileRef = this.storage.ref(name);
    // this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
    //   finalize(() => {
    //     fileRef.getDownloadURL().subscribe((url) => {
    //       this.url = url;
    //       this.fileService.insertImageDetails(this.id,this.url);
    //       alert('Upload Successful');
    //     })
    //   })
    // ).subscribe();

}


}