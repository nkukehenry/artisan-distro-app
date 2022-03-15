import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController, Platform, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { DataService } from 'src/app/services/data.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  data: any = {};
  edit = false;
  isNewForm = true;
  passType = 'password';
  constructor(
    private menu: MenuController,
    private router: Router,
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private uiService: UiService,
    private dataService: DataService

  ) { }

  ngOnInit() {
    const student = this.authService.student;
    this.data.id = student.id;
    this.data.username = student.username;
    this.data.phone_no = student.phone_no;
    this.data.email = student.email;
    this.data.new_username = student.username;
    this.data.new_username = student.username;
    this.data.gender = student.gender;

    const names = student.name.split(' ');
    this.data.surname = names[1] || '';
    this.data.other_names = names[0] || '';


  }

  startEdit() {
    this.edit = true;
  }

  saveProfile() {
    this.uiService.showLoader();
    this.authService.saveProfileDEdit(this.data).subscribe(
      (response) => {
        this.uiService.hideLoader();
        if (response?.success === true) {
          this.edit = false;
          this.uiService.showAlert('Changes saved successfully');
        }
      }, error => {
        this.uiService.hideLoader();
        this.uiService.showToast('Could not reach the server');
      });
  }

  toggleType() {
    this.passType = (this.passType === 'password') ? 'text' : 'password';
  }

}
