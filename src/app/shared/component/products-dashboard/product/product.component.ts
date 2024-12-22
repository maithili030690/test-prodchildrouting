import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from 'src/app/shared/model/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
productId!:string;
productObj!:Iproducts
  constructor(
    private _route:ActivatedRoute,
    private _productService:ProductsService
  ) { }

  ngOnInit(): void {
    // console.log(this._route.snapshot.params['productId'])
    // this.productId = this._route.snapshot.params['productId']
    // this.productObj = this._productService.fetchProduct(this.productId)
    this._route.params
    .subscribe((params:Params)=>{
      console.log(params)
      this.productId =params['productId']
      if(this.productId){
        this.productObj = this._productService.fetchProduct(this.productId)
        console.log(this.productObj)
      }
    })

  }

  onProductRemove(){
    let getConfirm =confirm(`Are You Sure You want to delete this Product`)
    if(getConfirm){
      this._productService.removeProd(this.productId)
    }
  }
}
