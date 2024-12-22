import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from 'src/app/shared/model/product';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productId!:string;
  productObj!:Iproducts
productForm!:FormGroup;
isInEditMode :boolean =false;
updateBtnFlag:boolean=false;

  constructor(
    private _route:ActivatedRoute,
    private _productService:ProductsService,
  private _uuidService:UuidService
  ) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      pname:new FormControl(null,[Validators.required]),
      pstatus:new FormControl(null,[Validators.required]),
      canReturn :new FormControl(null,[Validators.required])
    })
    console.log(this._route.snapshot.params['productId'])
    this.productId=this._route.snapshot.params['productId']
    
    if(this.productId){
      this.isInEditMode =true
      this.productObj = this._productService.fetchProduct(this.productId)
      this.productForm.patchValue({...this.productObj,canReturn :this.productObj.canReturn ? "Yes":"No"})
    }
    this._route.queryParams
      .subscribe((params:Params)=>{
        console.log(params)
        if(params['canReturn']==='0'){
          this.productForm.disable()
          this.updateBtnFlag = true
        }
      })
  
  }
  onProdAdd(){
    if(this.productForm.valid){
      console.log(this.productForm)
      let canReturnVal = this.productForm.controls['canReturn'].value === "Yes" ? 1 : 0
      console.log({...this.productForm.value,
        canReturn:canReturnVal
      })
      let product :Iproducts ={...this.productForm.value,
        canReturn:canReturnVal,
        pid:this._uuidService.generateUuid()
      }
      console.log(product)
      this._productService.postProduct(product)
    }
  }
  ProductUpdate(){
    if(this.productForm.valid){
      let updatedObj :Iproducts ={...this.productForm.value,
        pid:this.productId,
        canReturn:this.productForm.controls['canReturn'].value === "Yes" ? 1: 0
      }
      console.log(updatedObj)
      this.productForm.reset()
      this._productService.updatedProduct(updatedObj)
    }
  }
}
