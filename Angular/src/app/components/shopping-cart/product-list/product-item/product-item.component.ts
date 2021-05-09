import { WishlistService } from './../../../../services/wishlist.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product'
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product
  @Input() addedToWishlist: boolean;

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private WishlistService:WishlistService
  ) { }

  ngOnInit() {
  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }
  handleAddToWishlist() {
    this.WishlistService.addToWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = true;
    })
  }

  handleRemoveFromWishlist() {
    this.WishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = false;
    })
  }
}
