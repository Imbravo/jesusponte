import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/reusables/navbar/navbar.component';
import { FooterComponent } from './components/reusables/footer/footer.component';
import { ImageSidebarComponent } from './components/home-components/image-sidebar/image-sidebar.component';
import { HomeContentComponent } from './components/home-components/home-content/home-content.component';
import { AboutComponent } from './components/home-components/about/about.component';
import { ExperienceComponent } from './components/home-components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ImageSidebarComponent,
    HomeContentComponent,
    AboutComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
