import { Component, OnDestroy, OnInit } from '@angular/core';
import { Iproducts } from '../../model/product';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss']
})
export class ProductsDashboardComponent implements OnInit {
ProductsArr:Array<Iproducts>=[];
selectedProdId!:string;
  constructor(
    private _productsService:ProductsService,
    private _route :ActivatedRoute,
    private _router:Router
  ) { }


  ngOnInit(): void {
    this.ProductsArr =this._productsService.fetchAllProducts()
    this.selectedProdId=this.ProductsArr[0].pid
    this._router.navigate([this.ProductsArr[0].pid],{
      relativeTo:this._route,
      queryParams:{canReturn:this.ProductsArr[0].canReturn}
    })
   
  }

  onProdClick(prod:Iproducts){
    console.log(prod)
    this.selectedProdId = prod.pid
  }
}
