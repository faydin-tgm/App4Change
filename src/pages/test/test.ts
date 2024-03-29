import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { AboutPage } from '../about/about';
import { FaqPage } from '../faq/faq';
import { LoginPage } from "../login/login";
import { ProfilePage } from '../profile/profile';
import { ProjectPage } from "../project/project";

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) { }

  public goHomePage(): void {
    this.navCtrl.push(HomePage);
  }

  public goLoginPage(): void {
    this.navCtrl.push(LoginPage);
  }

  public goFaqPage(): void {
    this.navCtrl.push(FaqPage);
  }

  public goProjectPage(): void {
    this.navCtrl.push(ProjectPage);
  }

  public goAboutPage(): void {
    this.navCtrl.push(AboutPage);
  }

  public goProfilePage(): void {
    this.navCtrl.push(ProfilePage);
  }
}
