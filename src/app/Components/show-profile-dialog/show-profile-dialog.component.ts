import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FileHandle } from 'src/app/model/file-handle.model';
@Component({
  selector: 'app-show-profile-dialog',
  templateUrl: './show-profile-dialog.component.html',
  styleUrls: ['./show-profile-dialog.component.css']
})
export class ShowProfileDialogComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data:any){

  }
  ngOnInit(): void {
    this.receiveImages();
  }
  receiveImages(){
    console.log(this.data);
    
  }
}
