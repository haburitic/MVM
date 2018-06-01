import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import ngx-translate and the http loader
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// servicios
import { AppComponent } from './app.component';
import { MenuDerechoComponent } from './forms/menu-derecho/menu-derecho.component';
import { HomeComponent } from './forms/home/home.component';

import { CargaService } from './servicios//carga.service';
import { GestionComponent} from './gestion/gestion.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuDerechoComponent,
    HomeComponent,
    GestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot() ,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  ToastrModule.forRoot(),
  MatDialogModule,
  BrowserAnimationsModule,
  ],
  providers: [ CargaService],
  bootstrap: [AppComponent],
  entryComponents: [ ]

})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
