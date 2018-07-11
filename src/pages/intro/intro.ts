import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage} from '../tabs/tabs';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
//navCtrl navega entre as paginas
  constructor(public navCtrl: NavController,public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }
// this.navCtrl.push(TabsPage) - esse codigo chama a pagina

gototabs(){
  this.navCtrl.push(TabsPage);
}


}
