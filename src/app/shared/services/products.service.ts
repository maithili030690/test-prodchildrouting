import { Injectable } from '@angular/core';
import { Iproducts } from '../model/product';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArr :Array<Iproducts> =[
    {
      pname:"Samsung M31",
      pid:"123",
      pstatus:"In-Progress",
      canReturn : 1
    },
    {
      pname:"Samsung TV",
      pid:"124",
      pstatus:"Dispatched",
      canReturn : 1
    },
    {
      pname:"Iphone",
      pid:"125",
      pstatus:"Delivered",
      canReturn : 0
    }
  ]  
  constructor(
    private _router:Router,
    private _snackBarService:SnackbarService
  ) { }
  fetchAllProducts():Array<Iproducts>{
    //api call to fetch all products
   return this.productsArr
  }
  fetchProduct(id:string):Iproducts{
    //Api call to fetch the product data
    return this.productsArr.find(prod=>prod.pid===id)!
  }
  postProduct(prodObj:Iproducts){
    //Api call to post data in db
    console.log(prodObj)
    this.productsArr.push(prodObj)
    this._router.navigate(['products'])
    this._snackBarService.openSnackBar(`New Product ${prodObj.pname} is Added successfully`)
  }
  updatedProduct(product:Iproducts){
    let getIndex = this.productsArr.findIndex(prod=>prod.pid===product.pid)
    this.productsArr[getIndex]=product
    this._router.navigate(['products',product.pid],{
      queryParams:{canReturn:product.canReturn}
    })
    this._snackBarService.openSnackBar(`The product ${product.pname} is updated successfully`)
  }
  removeProd(id:string){
    let getIndex = this.productsArr.findIndex(prod=>prod.pid===id)
    this.productsArr.splice(getIndex,1)
    this._router.navigate(['products'])
    this._snackBarService.openSnackBar(`The product is removed successfully`)
  }
}
