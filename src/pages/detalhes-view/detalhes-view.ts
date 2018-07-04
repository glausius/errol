import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { AvisosPage } from '../avisos/avisos';

/**
 * Generated class for the DetalhesViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-view',
  templateUrl: 'detalhes-view.html',
})
export class DetalhesViewPage {
	infoAviso;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController ) {
	  this.infoAviso = navParams.get('item');
      console.log(this.infoAviso);
  }

  public closePage(){
      this.viewCtrl.dismiss();
  }

}
