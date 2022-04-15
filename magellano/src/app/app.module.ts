import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { UserService } from './user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'; 
import { MatMenu, MatMenuModule } from '@angular/material/menu';        
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio'
import { MatCardModule } from '@angular/material/card'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatFormFieldModule } from '@angular/material/form-field'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localeIt from '@angular/common/locales/it'
import { registerLocaleData } from '@angular/common';

import { HttpClient, HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './pipes/filter.pipe'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

registerLocaleData(localeIt, 'it');

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule
  ],
  providers: [
    HttpClientModule,
    UserService,
    MatDatepickerModule,
    {provide: LOCALE_ID, useValue: 'it'}, 
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
