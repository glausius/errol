import { AngularFireDatabase } from 'angularfire2/database';
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
import { BackgroundMode } from '@ionic-native/background-mode';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AvisosProvider } from '../providers/avisos/avisos';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AngularFireModule } from 'angularfire2';
import { LocalNotifications } from '@ionic-native/local-notifications';

export const conFire = {

  // apiKey: "AIzaSyDhwNxCyYeJ8X5tvxHCyWkiVvhiYqIFhys",
  // authDomain: "errol-68556.firebaseapp.com",
  // databaseURL: "https://errol-68556.firebaseio.com",
  // projectId: "errol-68556",
  // storageBucket: "errol-68556.appspot.com",
  // messagingSenderId: "663266562596"


  apiKey: "AIzaSyCBZSPsdfnuy5t4z_MqpDbp5ABUhtHzkVM",
  authDomain: "faeterj-47cea.firebaseapp.com",
  databaseURL: "https://faeterj-47cea.firebaseio.com",
  projectId: "faeterj-47cea",
  storageBucket: "faeterj-47cea.appspot.com",
  messagingSenderId: "721620250287"
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
    HttpClientModule,
    AngularFireModule.initializeApp(conFire)

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
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AvisosProvider,
    SocialSharing,
    BackgroundMode,
    AngularFireDatabase,
    LocalNotifications

  ]
})
export class AppModule { }
