import { SidebarService } from './../../../services/sidebar.service';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @ViewChild('sidebar') sidebar: ElementRef;

  @Input() sideNavItems: Array<any>;
  sideBarOpen: boolean;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sideBarOpen = true; 

    this.sidebarService.closeSideBarClicked.subscribe(() => {
      const elem = this.sidebar.nativeElement as HTMLElement;
      elem.style.width = '39px';
      this.sideBarOpen = false;
    });

    this.sidebarService.openSideBarClicked.subscribe(() => {
      const elem = this.sidebar.nativeElement as HTMLElement;
      elem.style.width = '220px';
      this.sideBarOpen = true;
    });
  }

  stoppropagation(e) {
   e.stopPropagation();
  }

}
