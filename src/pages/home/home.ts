import { Component } from '@angular/core';

import { NativeAudio } from 'ionic-native';

import { NavController } from 'ionic-angular';

import { HelloWorldPage } from '../hello-world/hello-world';

import { Api } from '../../providers/api';

import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  number: number = null;
  arr: Array<any> = [
    'lorem',
    'ipsum',
    'dolor'
  ];

  levels: Array<{name: string}> = [
      {name: 'Piece of cake'},
      {name: 'Let\'s rock'}
  ];

  user: any = {};

  welcome: string = '';
  welcome_name: string = '';

  sounds: Array<string> = [
    'mario-yahoo',
    'mario-yippee',
    'yoshi',
  ];

  constructor(public navCtrl: NavController,
              public api: Api,
              public translate: TranslateService
              ) {

    // load fake user
    this.loadUser();

    // load translation into variable
    this.translate.get('WELCOME').subscribe((value) => {
      this.welcome = value;
    });
    // avec une variable
    this.translate.get('WELCOME_NAME', {name: 'Meat Up'}).subscribe((value) => {
      this.welcome_name = value;
    });

    // preload sounds
    for (let i in this.sounds) {
      console.log('preload' + this.sounds[i] + ' / ' + 'assets/audio/' + this.sounds[i] + '.mp3');
      // NativeAudio.preloadSimple(this.sounds[i], 'assets/audio/' + this.sounds[i] + '.mp3');
      NativeAudio.preloadComplex(this.sounds[i], 'assets/audio/' + this.sounds[i] + '.mp3', 0.6, 1, 0)
    }

  }

  goHelloWorld() {
    this.navCtrl.push(HelloWorldPage);
  }

  switchNumber(value) {
      this.number = value;
  }

  loadUser() {
    this.api.getUser()
      .then(user => {
        this.user = user
        console.log(user);
      });
  }

  switchLocale(locale) {
    console.log(locale);
    this.translate.use(locale);

    this.translate.get('WELCOME').subscribe((value) => {
      this.welcome = value;
    });
    this.translate.get('WELCOME_NAME', {name: 'Meat Up'}).subscribe((value) => {
      this.welcome_name = value;
    });
  }

  playSound(id) {
    // NativeAudio.play(id, () => console.log(id + ' is done playing'));
    var audio = new Audio('assets/audio/' + id + '.mp3');
    audio.play();
  }

}
