import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
// import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FroalaEditorModule } from 'angular-froala-wysiwyg/editor/editor.module.js';
import 'froala-editor/js/plugins.pkgd.min.js';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    FroalaEditorModule.forRoot(),
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
