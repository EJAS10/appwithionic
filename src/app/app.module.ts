import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BLE } from '@ionic-native/ble/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
   providers: [
    BLE,
    NativeAudio,
    Camera,
    WebView,
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
],
  bootstrap: [AppComponent],
})
export class AppModule {}
