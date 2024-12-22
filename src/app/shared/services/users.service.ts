import { Injectable } from '@angular/core';
import { Iusers } from '../model/users';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersArr:Array<Iusers>=[
    {
      userName:"Jhon Doe",
      userId:"123",
      userRole:"Candidate"
    },
    {
      userName:"June Doe",
      userId:"124",
      userRole:"Admin"
    },
    {
      userName:"July Doe",
      userId:"125",
      userRole:"Candidate"
    }
  ]
  
  constructor(
    private _router :Router,
    private _snackBarService:SnackbarService
  ) { }
  fetchAllUsers():Array<Iusers>{
    //Api call to fetch all users data
    return this.usersArr
  }
  fetchUser(id:string):Iusers{
    //api call to fetch data
    return this.usersArr.find(user=>user.userId===id)!
  }
  postUser(user:Iusers){
    //Api call to add new user
    this.usersArr.push(user)
    //navigate to dashboard
    this._router.navigate(['users'])
    this._snackBarService.openSnackBar(`New user ${user.userName} Added successfully`)
  }
  updateUser(updatedUser:Iusers){
    //api call to update user
    let getIndex =this.usersArr.findIndex(user=>user.userId===updatedUser.userId)
    this.usersArr[getIndex]=updatedUser
    this._router.navigate(['users',updatedUser.userId],{
      queryParams:{userRole:updatedUser.userRole}
    })
    this._snackBarService.openSnackBar(`The user ${updatedUser.userName} updated successfully`)
  }
  removeUser(id:string){
    //api call to remove user from db
    let getIndex  = this.usersArr.findIndex(user=>user.userId===id);
    this.usersArr.splice(getIndex,1)
    this._router.navigate(['users'])
    this._snackBarService.openSnackBar(`The user is remove successully`)
  }
}
