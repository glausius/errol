import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesViewPage } from './detalhes-view';

@NgModule({
  declarations: [
    DetalhesViewPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesViewPage),
  ],
})
export class DetalhesViewPageModule {}
