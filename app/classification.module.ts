import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ClassificationComponent }  from './classification.component';
import { ClassificationBannerComponent } from './classification-banner/classification-banner.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    ClassificationComponent,
    ClassificationBannerComponent
  ],
  bootstrap: [ ClassificationComponent ]
})
export class ClassificationModule { }
