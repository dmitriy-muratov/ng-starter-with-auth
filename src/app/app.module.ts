import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';
import { CookieService } from './services/cookie.service';
import { GalleryService } from './services/gallery.service';

// import {
//   API_URL,
//   API_KEY
// } from '../../config';
// import { environment } from '../environments/environment';

import { BaseUrlInterceptor } from './interceptors/base-url-interceptor';
import { HeadersInterceptor } from './interceptors/headers-interceptor';
import { ErrorsInterceptor } from './interceptors/errors-interceptor';

import { ImageResolver } from './resolvers/image.resolver';

import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryImageComponent } from './components/gallery/_components/gallery-image/gallery-image.component';
import { DialogImageComponent } from './components/dialog-image/dialog-image.component';
import { DialogImageEntryComponent } from './components/dialog-image/dialog-image-entry/dialog-image-entry.component';

@NgModule({
  exports: [DialogImageComponent],
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryImageComponent,
    DialogImageComponent,
    DialogImageEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    CookieService,
    GalleryService,
    ImageResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorsInterceptor,
      multi: true,
    },
    // { provide: API_URL, useValue: environment.api_url },
    // { provide: API_KEY, useValue: environment.api_key },
  ],
  entryComponents: [DialogImageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
