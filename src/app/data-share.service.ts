import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  constructor(private httpCall:HttpClient) { }


callGetData(){
  let dataResult = this.httpCall.get('https://dummyjson.com/products');
  return dataResult;

}

}
