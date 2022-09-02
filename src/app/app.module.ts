import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FullPageComponent } from './components/full-page/full-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProgrammingLanguagesComponent } from './components/programming-languages/programming-languages.component';
import { WebProjectsComponent } from './components/web-projects/web-projects.component';
import { YoutubeVideosComponent } from './components/youtube-videos/youtube-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FullPageComponent,
    AboutMeComponent,
    ProgrammingLanguagesComponent,
    WebProjectsComponent,
    YoutubeVideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [FullPageComponent]
})
export class AppModule { }
