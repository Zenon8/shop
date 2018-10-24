import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  onActivate($event: any) {
    console.log('Activated event:', $event);
  }

  onDeactivate($event: any) {
    console.log('Deactivated event: ', $event);
  }
}
