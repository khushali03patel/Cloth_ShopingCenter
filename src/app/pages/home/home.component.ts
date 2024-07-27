import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';
OrderdetailsService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
     
    constructor(private service:OrderdetailsService)
    {}
    clothesdata:any;
    ngOnInit(): void {
      this.clothesdata=this.service.details;
    }
}
