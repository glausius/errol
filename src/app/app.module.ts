import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { AvisosPage } from '../pages/avisos/avisos';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DatePipe } from '../pipes/date/date';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AvisosProvider } from '../providers/avisos/avisos';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';


export const conFire = {
	
	apiKey: "AIzaSyDhwNxCyYeJ8X5tvxHCyWkiVvhiYqIFhys",
  authDomain: "errol-68556.firebaseapp.com",
  databaseURL: "https://errol-68556.firebaseio.com",
  projectId: "errol-68556",
  storageBucket: "errol-68556.appspot.com",
  messagingSenderId: "663266562596"
  
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AvisosPage,
    HomePage,
	DatePipe,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__erroldb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
	  HttpClientModule
	
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AvisosPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AvisosProvider,
    SocialSharing
  ]
})
export class AppModule {}
