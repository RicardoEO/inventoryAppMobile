import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonMenu, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-userlogged',
  templateUrl: './userlogged.page.html',
  styleUrls: ['./userlogged.page.scss'],
})
export class UserloggedPage implements OnInit {
  constructor(private menuCtrl: MenuController, private router: Router) { }

  ngOnInit() {
  }

  changePage(route: string) {
    this.router.navigate([route]);
    this.menuCtrl.close();
  }

}
