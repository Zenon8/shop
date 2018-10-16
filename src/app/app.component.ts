import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onActivate($event: any) {
    console.log('Activated event:', $event);
  }

  onDeactivate($event: any) {
    console.log('Deactivated event: ', $event);
  }

  onActivatePopup($event: any) {
    console.log('Activated popup event: ', $event);
  }

  onDeactivatePopup($event: any) {
    console.log('Deactivated popup event: ', $event);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
