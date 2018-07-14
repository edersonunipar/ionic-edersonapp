import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IntroPage} from '../intro/intro';
import { FeedsPage } from '../feeds/feeds';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToPage(){
    this.navCtrl.push(IntroPage);
  }

  goToFeeds(){
    this.navCtrl.push(FeedsPage);
  }



}
