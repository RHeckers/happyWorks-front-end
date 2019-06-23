import { SidebarService } from './../../../services/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  navItems;
  sideBarOpen: boolean;
  authenticatedUser: boolean;

  constructor(
    private sidebarService: SidebarService,
    private globalService: GlobalService,
    private router: Router
    ) { }

  async ngOnInit() {
    this.sideBarOpen = true;
    this.globalService.checkIfAuthenticatedUser().subscribe(val => {
      this.navItems = this.globalService.getNavbarItems(true);
      this.authenticatedUser = true;
    }, err => {
      this.navItems = this.globalService.getNavbarItems(false);
    });
  }

  toggleSideBar(e) {
    switch (e) {
      case 'close':
        this.sidebarService.closeSideBar();
        this.sideBarOpen = !this.sideBarOpen;
        break;
    
      case 'open':
        this.sidebarService.openSidebar();
        this.sideBarOpen = !this.sideBarOpen;
        break;
    
      default:
        // Throw and error message
        break;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.authenticatedUser = false;
    this.navItems = this.globalService.getNavbarItems(false);
    this.router.navigate(['/'])
  }

}
