import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() { }

  toggleMenu() {
    this.menuController.toggle();
  }

}
