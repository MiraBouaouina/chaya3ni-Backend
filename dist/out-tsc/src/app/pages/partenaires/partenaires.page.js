var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
var PartenairesPage = /** @class */ (function () {
    function PartenairesPage(http, navCtrl, menuCtrl, toastCtrl, alertCtrl, loadingCtrl, user) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user = user;
    }
    PartenairesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.user.uri + "/getpart").subscribe(function (data) {
            _this.partenaire = data;
            console.log(_this.partenaire);
        }, function (err) {
            if (err.status === 401) {
                console.log("erreur");
            }
        });
    };
    PartenairesPage = __decorate([
        Component({
            selector: 'app-partenaires',
            templateUrl: './partenaires.page.html',
            styleUrls: ['./partenaires.page.scss'],
        }),
        __metadata("design:paramtypes", [HttpClient,
            NavController,
            MenuController,
            ToastController,
            AlertController,
            LoadingController,
            UserService])
    ], PartenairesPage);
    return PartenairesPage;
}());
export { PartenairesPage };
//# sourceMappingURL=partenaires.page.js.map