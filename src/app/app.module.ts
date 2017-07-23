import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

import { TabsPage } from "../pages/tabs/tabs";
import { TextJokePage } from "../pages/text_joke/text_joke";
import { PhotoJokePage } from "../pages/photo_joke/photo_joke";
import { VideoJokePage } from "../pages/video_joke/video_joke";
import { MinePage } from "../pages/mine/mine";

import { JokeDetailPage } from '../pages/joke_detail/joke_detail';

import { ApiServiceProvider } from '../providers/api-service/api-service';

@NgModule({
  declarations: [
    MyApp,
    TextJokePage,
    PhotoJokePage,
    VideoJokePage,
    MinePage,
    TabsPage,
    JokeDetailPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
    }),
  ],
  bootstrap: [IonicApp,],
  entryComponents: [
    MyApp,
    TextJokePage,
    PhotoJokePage,
    VideoJokePage,
    MinePage,
    TabsPage,
    JokeDetailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServiceProvider
  ]
})
export class AppModule {}
