import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ngModel directive
import { FormsModule } from '@angular/forms';

//Loading
import { NgxLoadingModule } from 'ngx-loading';

/*Components*/
import { DialogComponent } from './dialog/dialog.component';

//material
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { StarterContentComponent } from './layout/starter-content/starter-content.component';
import { StarterControlSidebarComponent } from './layout/starter-control-sidebar/starter-control-sidebar.component';
import { StarterFooterComponent } from './layout/starter-footer/starter-footer.component';
import { StarterHeaderComponent } from './layout/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './layout/starter-left-side/starter-left-side.component';
import { LoginComponent } from './views/login/login.component';
import { CoordinatorProfileComponent } from './views/coordinator-profile/coordinator-profile.component';
import { DialogLocationComponent } from './dialogs/dialog-location/dialog-location.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    StarterContentComponent,
    StarterControlSidebarComponent,
    StarterFooterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    LoginComponent,
    CoordinatorProfileComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxLoadingModule.forRoot({}),
    MaterialModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
