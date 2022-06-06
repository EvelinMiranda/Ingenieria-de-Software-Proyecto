import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [AppComponent,
    MenuComponent
  ],
  entryComponents: [],
  exports:[MenuComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ScreenOrientation],
  bootstrap: [AppComponent],
})
export class AppModule {}
