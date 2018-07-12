import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from "../../providers/moovie/moovie";
/**
 * Generated class for the FeedsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feeds',
  templateUrl: 'feeds.html',
  providers:[MoovieProvider]

})
export class FeedsPage {
  public nomeUsuario:string = "Ederson dos santos";
  public objeto_feed = {
    titulo:"ederson",
    data:"janeiro, 5 de julho",
    descricao:"agora mudou tudo",
    Likes: 12,
    time: "11h agosto"
  }

   public lista_filmes = new Array<any>();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MoovieProvider) {
  }

  public soma(num1:number, num2:number): void {

  }

  ionViewDidLoad() {
    this.movieProvider.getLatesMovies().subscribe(
      data=>{
        const response = (data as any);
        this.lista_filmes = response.results;
      },error => {
        console.log(error);
      })
  }

}
