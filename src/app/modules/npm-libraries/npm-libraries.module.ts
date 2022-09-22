import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { NgImageSliderModule } from 'ng-image-slider';
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";

@NgModule({
  declarations: [],
  imports: [
    RecaptchaModule,
    RecaptchaFormsModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    NgImageSliderModule,
    RecaptchaModule
  ],
  exports: [
    
    CommonModule,
    HttpClientModule,
    TranslateModule,
    NgImageSliderModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ]
})
export class NpmLibrariesModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
