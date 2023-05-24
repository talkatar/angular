import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ShowTimeComponent } from './cmps/show-time/show-time.component';
import { CountDownComponent } from './cmps/count-down/count-down.component';
import { WhoWatchComponent } from './cmps/who-watch/who-watch.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowTimeComponent,
    CountDownComponent,
    WhoWatchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
