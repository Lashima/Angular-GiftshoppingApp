import { UserServiceService } from './../../service/user-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private router: Router, private userService: UserServiceService) { }

  ngOnInit() {
  }

 

}
