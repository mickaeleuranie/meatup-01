import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the HelloWorld page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hello-world',
  templateUrl: 'hello-world.html'
})
export class HelloWorldPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelloWorldPage');
  }

}
