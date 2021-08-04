import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController, Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-courses',
  templateUrl: 'courses.page.html',
  styleUrls: ['courses.page.scss']
})
export class CoursesPage implements OnInit {

  exitcounter = 0;

  constructor(private menu: MenuController) { }

  ngOnInit(): void {

  }

  toggleMenu() {
    this.menu.toggle();
  }


}
