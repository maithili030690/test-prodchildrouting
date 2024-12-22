import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
userId!:string;
userInfoObj!:Iusers
  constructor(
    private _routes:ActivatedRoute,
    private _usersService:UsersService,
    private _router:Router
  ) { }

  ngOnInit(): void {


    this._routes.params
          .subscribe((params:Params)=>{
            console.log(params)
            this.userId = params['userId']
            this.userInfoObj =this._usersService.fetchUser(this.userId)
          })

    // console.log( this._routes.snapshot.params['userId']),
    // this.userId = this._routes.snapshot.params['userId'],
    // this.userInfoObj = this._usersService.fetchUser(this.userId)
  }
  onRemoveUser(){
    this._usersService.removeUser(this.userId)
  }
  gotoEditUser(){
    this._router.navigate(['edit'],{
      relativeTo:this._routes,
      queryParamsHandling:'preserve'
    })
  }
}
