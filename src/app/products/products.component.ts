import { Component } from '@angular/core';
import { DataShareService } from '../data-share.service';

interface productsData{
  id:number;
  title:string,
  description:string,
  price:number,
  category:number,
  discountPercentage:number,
  stock:number,
   images: string

}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  alldata : productsData[] = [];
  errorFlag=false;
  constructor(private ds:DataShareService){

  

  // loadProductData(){
    
  this.ds.callGetData().subscribe( 
    
    (productResult : any) => {
this.alldata = productResult.products;
this.errorFlag = false;
    },
    (error)=>{
      this.errorFlag = true;
// console.log();
    },
    ()=>{
      this.errorFlag = false;
console.log("compt")
    }
  )
// }
}
}
