import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  closeSideBarClicked: Subject<any> = new Subject();
  openSideBarClicked: Subject<any> = new Subject();

  constructor() { }

  closeSideBar() {
    this.closeSideBarClicked.next();
  }

  openSidebar() {
    this.openSideBarClicked.next();
  }

}
