import { Component } from '@angular/core';
import { } from "module";
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productsResult: any = [];

  constructor(private prodService: ProductService) {

  }

  clickProducts() {
    this.prodService.getAllProds().subscribe(data => {
      this.productsResult = data;
    })
  }

  prodname: any;

  //get prod byname

  getProdByName() {

    // var pname= JSON.stringify(prodData);

    this.prodService.getProdByName(this.prodname).subscribe((data) => {

      console.log(data);

    })

  }

}
