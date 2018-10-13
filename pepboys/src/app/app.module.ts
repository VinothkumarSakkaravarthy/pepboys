import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SaleEntryComponent } from './sale-entry/sale-entry.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrandingComponent } from './branding/branding.component';
import { OverlayComponent } from './overlay/overlay.component';
import { TableComponent } from './table/table.component';
import { InputComponent } from './input/input.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { CtaComponent } from './cta/cta.component';
import { MaterialEntryComponent } from './material-entry/material-entry.component';
import { MaterialListComponent } from './material-list/material-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SaleEntryComponent,
    ViewReportComponent,
    HeaderComponent,
    FooterComponent,
    BrandingComponent,
    OverlayComponent,
    TableComponent,
    InputComponent,
    DropDownComponent,
    CtaComponent,
    MaterialEntryComponent,
    MaterialListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
