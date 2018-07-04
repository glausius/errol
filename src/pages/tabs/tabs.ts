import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { AvisosPage } from '../avisos/avisos';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AvisosPage;
  tab3Root = AboutPage;
  

  constructor() {

  }
}
