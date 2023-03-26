import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    // this.items = [
    //   {
    //     label: 'Time Since Death',
    //     routerLink: '/death',
    //     routerLinkActiveOptions: {
    //       active: true
    //     }
    //     // icon: 'pi pi-fw pi-file'
    //   },
    //   {
    //     label: 'Happiness Calculator',
    //     routerLink: '/happiness'
    //     // icon: 'pi pi-fw pi-pencil'
    //   },
    //   {
    //     label: 'Health Calculator',
    //     routerLink: '/health'
    //     // icon: 'pi pi-fw pi-user',
    //   }
    // ];
  }
}
