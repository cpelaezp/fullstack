import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './app/security/login/login.component';
import { FsHeaderComponent } from './app/main/fs-header/fs-header.component';
import { FsFooterComponent } from './app/main/fs-footer/fs-footer.component';
import { FsNavsComponent } from './app/main/fs-navs/fs-navs.component';
import { RecoveryPasswordComponent } from './app/security/recovery-password/recovery-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FsHeaderComponent,
    FsFooterComponent,
    FsNavsComponent,
    RecoveryPasswordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
