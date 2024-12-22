import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Iusers } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-usersform',
  templateUrl: './usersform.component.html',
  styleUrls: ['./usersform.component.scss']
})
export class UsersformComponent implements OnInit {
userId!:string;
userInfoObj!:Iusers;
userForm!:FormGroup;
isInEditMode:boolean=false;
uppdateBtnFlag:boolean =false;
  constructor(
    private _route :ActivatedRoute,
    private _usersService :UsersService,
    private _uuidService:UuidService
  ) { }

  ngOnInit(): void {

  this.userForm = new FormGroup({
    userName : new FormControl(null,[Validators.required]),
    userRole:new FormControl(('Candidate'),[Validators.required])
  })


    console.log(this._route.snapshot.params['userId']);
    this.userId =this._route.snapshot.params['userId'];
    if(this.userId){
      this.isInEditMode =true;
      this.userInfoObj =this._usersService.fetchUser(this.userId);
      this.userForm.patchValue(this.userInfoObj);

    }

   this._route.queryParams
    .subscribe((params:Params)=>{
      console.log(params)
      if(params['userRole'].toLowerCase().includes('candidate')){
        this.userForm.disable()
        this.uppdateBtnFlag =true
      }else{
        this.userForm.enable()
        this.uppdateBtnFlag =false
      }
    })
   
  }

  onUserAdd(){
    if(this.userForm.valid){
      console.log(this.userForm.value)
      let userObj :Iusers ={...this.userForm.value,
        userId:this._uuidService.generateUuid()
      }
      this.userForm.reset();
      console.log(userObj)
      this._usersService.postUser(userObj)
    }
  }
  onUserUpdate(){
    let updatedObj :Iusers={...this.userForm.value,
      userId:this.userId
    }
    console.log(updatedObj)
    this.userForm.reset()
    this._usersService.updateUser(updatedObj)
  }
}
