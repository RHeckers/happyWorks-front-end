import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SidebarService } from './services/sidebar.service';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  @ViewChild('appHolder') appHolder: ElementRef;
  sideNavItems: Array<any>;

  constructor(private sidebarService: SidebarService,
              private globalService: GlobalService) {}

  ngOnInit() {
    this.sideNavItems = this.globalService.getSideNavItems(null);

    this.sidebarService.closeSideBarClicked.subscribe(() => {
      const elem = this.appHolder.nativeElement as HTMLElement;
      elem.style.marginLeft = '39px';
    });

    this.sidebarService.openSideBarClicked.subscribe(() => {
      const elem = this.appHolder.nativeElement as HTMLElement;
      elem.style.marginLeft = '220px';
    });
  }
}
