import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({

  providedIn: 'root'

})

export class ProductService {

  prodUrl = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) { }

  //get all products

  getAllProds() {

    return this.httpClient.get(this.prodUrl + "/allproducts");

  }

  //get prod byname

  getProdByName(name: any) {

    console.log(name);

    return this.httpClient.get(this.prodUrl + "/productbyname/" + name);

  }



}

