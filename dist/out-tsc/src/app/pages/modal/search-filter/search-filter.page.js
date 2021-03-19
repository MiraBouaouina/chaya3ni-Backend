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
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/pages/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
var SearchFilterPage = /** @class */ (function () {
    function SearchFilterPage(modalCtrl, user, http, router) {
        this.modalCtrl = modalCtrl;
        this.user = user;
        this.http = http;
        this.router = router;
        this.radiusmiles = 1;
        this.minmaxprice = {
            upper: 500,
            lower: 10
        };
    }
    SearchFilterPage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.user.uri + "/getcat").subscribe(function (data) {
            _this.categorie = data;
            console.log(_this.categorie);
        }, function (err) {
            if (err.status === 401) {
                console.log("erreur");
            }
        });
        this.http.get(this.user.uri + "/getprom").subscribe(function (data) {
            _this.partenaire = data;
            console.log(_this.partenaire);
        }, function (err) {
            if (err.status === 401) {
                console.log("erreur");
            }
        });
    };
    SearchFilterPage.prototype.closeModal = function () {
        this.modalCtrl.dismiss();
    };
    SearchFilterPage.prototype.search = function (m, r, c, p, s) {
        console.log(m, r, c, p, s);
        this.router.navigate(['/recherche'], { queryParams: { mot: m, distance: r, categorie: c, partenaire: p, reduction: s } });
        this.modalCtrl.dismiss();
    };
    SearchFilterPage = __decorate([
        Component({
            selector: 'app-search-filter',
            templateUrl: './search-filter.page.html',
            styleUrls: ['./search-filter.page.scss'],
        }),
        __metadata("design:paramtypes", [ModalController, UserService, HttpClient, Router])
    ], SearchFilterPage);
    return SearchFilterPage;
}());
export { SearchFilterPage };
//# sourceMappingURL=search-filter.page.js.map