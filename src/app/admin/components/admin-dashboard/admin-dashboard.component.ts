import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from '../../services';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit, OnDestroy {
  constructor(private adminService: AdminService) {}

  ngOnInit() {
    console.log('onInit Admin');
    this.adminService.initAdminMenu();
  }

  ngOnDestroy(): void {
    console.log('onDestroy Admin');
    this.adminService.initShopMenu();
  }
}
