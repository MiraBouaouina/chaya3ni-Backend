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
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/pages/user.service';
var RecherchePage = /** @class */ (function () {
    function RecherchePage(router, route, http, user) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.user = user;
        this.mot = this.route.snapshot.queryParams['mot'];
        this.distance = this.route.snapshot.queryParams['distance'];
        this.categorie = this.route.snapshot.queryParams['categorie'];
        this.partenaire = this.route.snapshot.queryParams['partenaire'];
        this.reduction = this.route.snapshot.queryParams['reduction'];
        console.log(this.mot, this.distance, this.categorie, this.partenaire, this.reduction);
    }
    RecherchePage.prototype.ngOnInit = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ maximumAge: 300000, timeout: 30000, enableHighAccuracy: true }).then(function (resp) {
            self.lat = resp.coords.latitude;
            self.lng = resp.coords.longitude;
            console.log(self.lat);
            console.log(self.lng);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        this.http.get(this.user.uri + "/getprom").subscribe(function (data) {
            _this.promotion = data;
            console.log(_this.promotion);
        }, function (err) {
            if (err.status === 401) {
                console.log("erreur");
            }
        });
    };
    RecherchePage = __decorate([
        Component({
            selector: 'app-recherche',
            templateUrl: './recherche.page.html',
            styleUrls: ['./recherche.page.scss'],
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute, HttpClient, UserService])
    ], RecherchePage);
    return RecherchePage;
}());
export { RecherchePage };
//# sourceMappingURL=recherche.page.js.map