import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Signup } from '../data-type';
@Component({
  selector: 'app-selling-auth',
  templateUrl: './selling-auth.component.html',
  styleUrls: ['./selling-auth.component.scss']
})
export class SellingAuthComponent implements OnInit {
  constructor(private seller:SellerService, private router:Router) {}

  ngOnInit(): void{}
  
signUp(data:Signup):void{

this.seller.usersignup(data).subscribe((result)=>{
  if(result){
    this.router.navigate(['seller-home'])
  }
});
  }
}
