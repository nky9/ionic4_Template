import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


 public appPages = [
 {
      title: 'Home',
      subtitle:'',
      url: '/',
      src:'assets/menu/home.png'

    },
  
    {
      title: 'Shop By Category',
      url: 'kitchenappliance',
      src:'assets/menu/home.png'
    },
    {
      title: 'Your Account',
       subtitle:'Login & Security',
      url: '',
     src:'assets/menu/home.png'
    },
    {
      title: 'Your Orders',
      subtitle:'Your address, Your returns, Order details ',
      url: '',
     src:'assets/menu/home.png'
    },
    {
      title: 'Your Wishlist',
      subtitle:'View your  list here ',
      url: '/wishlist',
     src:'assets/menu/home.png'
    },
    {
      title: 'Your Payments',
      subtitle:'Saved, Atomatic & other payment details ',
      url: '',
    src:'assets/menu/home.png'
    },
    {
      title: 'Track Your Order',
     
      url: '',
     src:'assets/menu/home.png'
    },
    {
      title: 'Customer Support',
     
      url: '',
     src:'assets/menu/home.png'
    },
    {
      title: 'Logout',
       url: '/login',
     src:'assets/menu/home.png'
    },
   
   
  ];






  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
