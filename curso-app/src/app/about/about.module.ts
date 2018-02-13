import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { InfoComponent } from './info/info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { GraficComponent } from './grafic/grafic.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ChartsModule,
    AboutRoutingModule
  ],
  declarations: [AboutComponent, InfoComponent, GraficComponent]
})
export class AboutModule { }
