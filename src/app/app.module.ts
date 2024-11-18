import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VComponent } from './020_brapci/page/v/v.component';
import { Error404Component } from './020_brapci/page/error404/error404.component';
import { HomeComponent } from './020_brapci/page/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProceedingsComponent } from './020_brapci/widget/v/proceedings/proceedings.component';
import { EnancibComponent } from './020_brapci/widget/v/proceedings/enancib/enancib.component';
import { EbbcComponent } from './020_brapci/widget/v/proceedings/ebbc/ebbc.component';
import { FeiscComponent } from './020_brapci/widget/v/proceedings/feisc/feisc.component';
import { IskobrComponent } from './020_brapci/widget/v/proceedings/iskobr/iskobr.component';
import { GeralComponent } from './020_brapci/widget/v/proceedings/geral/geral.component';
import { BenancibComponent } from './020_brapci/theme/benancib/benancib.component';
import { EditComponent } from './020_brapci/button/edit/edit.component';
import { DeleteComponent } from './020_brapci/button/delete/delete.component';
import { IaComponent } from './020_brapci/button/ia/ia.component';
import { TabsNavComponent } from './020_brapci/widget/tabs-nav/tabs-nav.component';
import { ActionsComponent } from './020_brapci/button/actions/actions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    VComponent,
    Error404Component,
    HomeComponent,
    ProceedingsComponent,
    EnancibComponent,
    EbbcComponent,
    FeiscComponent,
    IskobrComponent,
    GeralComponent,
    BenancibComponent,
    EditComponent,
    DeleteComponent,
    IaComponent,
    TabsNavComponent,
    ActionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
