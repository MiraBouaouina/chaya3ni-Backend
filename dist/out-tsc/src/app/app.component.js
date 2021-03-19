var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectorRef, Output } from '@angular/core';
import { UserService } from './pages/user.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { interval } from 'rxjs';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, location, splashScreen, statusBar, navCtrl, user, router, http, ref) {
        var _this = this;
        this.platform = platform;
        this.location = location;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.user = user;
        this.router = router;
        this.http = http;
        this.ref = ref;
        interval(100).subscribe(function (x) {
            return _this.ngOnInit();
        });
        this.appPages = [
            {
                title: 'Home',
                url: '/home-results',
                direct: 'root',
                icon: 'home'
            },
            {
                title: 'Nous Contacter',
                url: '/about',
                direct: 'forward',
                icon: 'mail'
            },
            {
                title: 'App Settings',
                url: '/settings',
                direct: 'forward',
                icon: 'cog'
            },
            {
                title: 'Partenaires',
                url: '/partenaires',
                direct: 'forward',
                icon: 'people'
            }
        ];
        this.initializeApp();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var httpOptions = {
            headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
        };
        this.http.get(this.user.uri + "/userProfile", httpOptions).subscribe(function (data) {
            _this.userDetails = data;
        }, function (err) {
            console.log(err);
        });
    };
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        }).catch(function () { });
    };
    AppComponent.prototype.goToEditProgile = function () {
        this.navCtrl.navigateForward('edit-profile');
    };
    AppComponent.prototype.logout = function () {
        this.user.deleteToken();
        this.router.navigate(['/']);
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "userDetails", void 0);
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['./app.component.scss']
        }),
        __metadata("design:paramtypes", [Platform,
            Location,
            SplashScreen,
            StatusBar,
            NavController,
            UserService, Router, HttpClient, ChangeDetectorRef])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map