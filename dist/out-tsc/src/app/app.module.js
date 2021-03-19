var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatIconModule, MatButtonModule, MatCardModule, MatFormFieldModule } from "@angular/material";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ImagePageModule } from './pages/modal/image/image.module';
import { SearchFilterPageModule } from './pages/modal/search-filter/search-filter.module';
import { UserService } from './pages/user.service';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AgmCoreModule } from '@agm/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonicRatingModule } from 'ionic4-rating';
import { BarRatingModule } from "ngx-bar-rating";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [AppComponent, NotificationsComponent],
            imports: [
                IonicRatingModule,
                BarRatingModule,
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDCa1LUe1vOczX1hO_iGYgyo8p_jYuGOPU'
                }),
                BrowserModule,
                FormsModule,
                HttpClientModule,
                AppRoutingModule,
                BrowserAnimationsModule,
                IonicModule.forRoot(),
                ImagePageModule,
                SearchFilterPageModule,
                DragDropModule,
                ScrollingModule,
                MatInputModule,
                MatPaginatorModule,
                MatProgressSpinnerModule,
                MatSortModule,
                MatTableModule,
                MatIconModule,
                MatButtonModule,
                MatCardModule,
                MatFormFieldModule
            ],
            entryComponents: [NotificationsComponent],
            providers: [
                IonicRatingModule,
                StatusBar,
                UserService,
                InAppBrowser,
                SplashScreen,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map