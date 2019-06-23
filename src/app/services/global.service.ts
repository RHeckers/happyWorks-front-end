import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private navItem;
  private sideNavItems;
  autenticatedUSer: boolean;

  constructor(private httpService: HttpService) { }

  checkIfAuthenticatedUser() {
     return this.httpService.makeGetRequest('auth/tokenstatus');
  }

  getNavbarItems(val) {
    return this.navItem = [
      { title: 'Dashboard', icon:'', route: 'app-dashboard', conditional: val ? false : true},
      { title: 'Account', icon:'', route: 'app', conditional: val ? false : true},
      { title: 'contact', icon:'', route: 'contact'},
      { title: 'diensten', icon:'', route: 'diensten'},
      { title: 'over ons', icon:'', route: 'over-ons'},
      { title: 'login', icon:'', route: 'login', conditional: val ? true : false },
      { title: 'registreren', icon:'', route: 'registreren', conditional: val ? true : false}
    ];
  }

  getSideNavItems(val) {
    return this.sideNavItems = [
      { title: 'Afdelingen', icon:'fas fa-building', route: 'company/afdelingen', 
        subNavItems: [
          { title: 'Mijn bedrijf', icon:'', route: 'company/mijn-bedrijf'},
          { title: 'Afdeling toevoegen', icon:'', route: 'company/afdelingen/aanmaken'},
          { title: 'Afdelingen beheren', icon:'', route: 'company/afdelingen/beheren'},
          { title: 'Managers toevoegen', icon:'', route: 'company/afdelingen/managers/toevoegen'},
          { title: 'Managers beheren', icon:'', route: 'company/afdelingen/managers/beheren'}
        ]},
      { title: 'Statistieken', icon:'fas fa-chart-bar', route: 'company/statistieken'},
      { title: 'Formulieren', icon:'fas fa-list', route: 'company/formulieren'}
    ];
  }

  mapEnumValuesToArray(enumValues) {
    const enumAsArray = [];
    Object.values(enumValues).forEach(numValue => {
      if (typeof numValue === 'number') {
        const enumObj = {
          enumIndex: numValue,
          enumValue: enumValues[numValue]
        }
        enumAsArray.push(enumObj);
      }
    });

    return enumAsArray;
  }
}

