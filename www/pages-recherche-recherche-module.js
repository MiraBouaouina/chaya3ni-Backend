(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recherche-recherche-module"],{

/***/ "./src/app/pages/recherche/recherche.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/recherche/recherche.module.ts ***!
  \*****************************************************/
/*! exports provided: RecherchePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecherchePageModule", function() { return RecherchePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _recherche_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recherche.page */ "./src/app/pages/recherche/recherche.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _recherche_page__WEBPACK_IMPORTED_MODULE_7__["RecherchePage"]
    }
];
var RecherchePageModule = /** @class */ (function () {
    function RecherchePageModule() {
    }
    RecherchePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
                _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_recherche_page__WEBPACK_IMPORTED_MODULE_7__["RecherchePage"]]
        })
    ], RecherchePageModule);
    return RecherchePageModule;
}());



/***/ }),

/***/ "./src/app/pages/recherche/recherche.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/recherche/recherche.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>Resultat de recherche</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item-sliding *ngFor=\"let promotion of promotion\">\n            <ion-item  *ngIf=\"((dist(promotion.Longitude,promotion.Latitude) < distance || distance === 0)&& (promotion.name.includes(mot)||mot === '' )&& (promotion.categorie === categorie|| categorie === '')&& (promotion.partenaire === partenaire|| partenaire === '')&&(promotion.reduction < reduction || reduction === 0)); else seter()\">\n            <ion-card>\n                <!--<div style=\"text-align: right;\" *ngIf=!isfav(promotion._id,userDetails._id)>\n              <ion-icon  (click)=\"test(promotion._id,userDetails._id)\" name=\"heart-empty\" style=\"color:red;\"slot=\"end\"></ion-icon></div>\n              <div style=\"text-align: right;\" *ngIf=isfav(promotion._id,userDetails._id)>\n              <ion-icon  (click)=\"del(promotion._id,userDetails._id)\" name=\"heart\" style=\"color:red;\"slot=\"end\"></ion-icon></div>-->\n                <img src=\"{{promotion.img}}\"/>\n                <strong>{{dist(promotion.Longitude,promotion.Latitude)}} Km</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              \n                <ion-card-header>{{promotion.name}}</ion-card-header>\n                <ion-label><strong><span style=\"text-decoration: line-through; font-size: 22px;\n                  font-weight: 700;\n                  text-transform: uppercase;\n                  display: inline-block;\">{{promotion.prixas}}<sup>DT</sup> </span>    <span style=\"color: #d00ff7;font-size: 22px;\n                  font-weight: 700;\n                  text-transform: uppercase;\n                  display: inline-block;\">&nbsp;&nbsp;&nbsp;{{promotion.prixas - (promotion.prixas/ 100)*promotion.reduction }}   <sup>DT</sup></span><span class=\"blink_me\">&nbsp;&nbsp;{{promotion.reduction}}% </span></strong></ion-label>\n                  <!--{{partenaire.siteweb}}*/-->\n                  <ion-button  color=\"secondary\" (click)=\"onOrderDelete(promotion._id)\">\n                      <ion-icon name=\"eye\" slot=\"start\"></ion-icon>\n                      <ion-label>Plus de detail</ion-label>\n                    </ion-button>\n                    \n            </ion-card>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n      <div *ngIf=\"error\"><strong>Aucune promotion trouvée</strong></div> \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/recherche/recherche.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/recherche/recherche.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light); }\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium); }\n\n:host ion-card {\n  display: flex;\n  flex-direction: column;\n  width: 100% !important;\n  margin: 0 !important; }\n\n:host ion-card.no-radius {\n    border-radius: 0; }\n\n.blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n  color: #ff7c02;\n  font-size: 28px;\n  font-weight: 700;\n  text-transform: uppercase;\n  display: inline-block; }\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0; } }\n\n@keyframes blinker {\n  50% {\n    opacity: 0; } }\n\nion-icon {\n  font-size: 30px;\n  color: #8cc8fa; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVjaGVyY2hlL0U6XFxkZWFsdG4vc3JjXFxhcHBcXHBhZ2VzXFxyZWNoZXJjaGVcXHJlY2hlcmNoZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxvQ0FBYSxFQUFBOztBQUZyQjtFQU1RLGdCQUFnQjtFQUNoQixpREFBaUQsRUFBQTs7QUFQekQ7RUFjUSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixvQkFBb0IsRUFBQTs7QUFqQjVCO0lBWVksZ0JBQWdCLEVBQUE7O0FBUTVCO0VBQ0ksNkNBQXFDO1VBQXJDLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0U7SUFBTSxVQUFVLEVBQUEsRUFBQTs7QUFEbEI7RUFDRTtJQUFNLFVBQVUsRUFBQSxFQUFBOztBQUVwQjtFQUNBLGVBQWU7RUFDZixjQUNFLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWNoZXJjaGUvcmVjaGVyY2hlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgJi5uby1yYWRpdXMge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4uYmxpbmtfbWUge1xyXG4gICAgYW5pbWF0aW9uOiBibGlua2VyIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGNvbG9yOiAjZmY3YzAyO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYmxpbmtlciB7ICBcclxuICAgIDUwJSB7IG9wYWNpdHk6IDA7IH1cclxuICB9XHJcbmlvbi1pY29ue1xyXG5mb250LXNpemU6IDMwcHg7XHJcbmNvbG9yOiAjOGNjOGZhXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/recherche/recherche.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/recherche/recherche.page.ts ***!
  \***************************************************/
/*! exports provided: RecherchePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecherchePage", function() { return RecherchePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var src_app_pages_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/user.service */ "./src/app/pages/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecherchePage = /** @class */ (function () {
    function RecherchePage(router, geolocation, route, http, user) {
        this.router = router;
        this.geolocation = geolocation;
        this.route = route;
        this.http = http;
        this.user = user;
        this.reduction = 0;
        this.distance = 0;
        this.error = false;
        this.c = 0;
        this.mot = this.route.snapshot.queryParams['mot'];
        if (!this.mot)
            this.mot = '';
        this.distance = this.route.snapshot.queryParams['distance'];
        if (!this.distance)
            this.distance = 0;
        this.categorie = this.route.snapshot.queryParams['categorie'];
        if (!this.categorie)
            this.categorie = '';
        this.partenaire = this.route.snapshot.queryParams['partenaire'];
        if (!this.partenaire)
            this.partenaire = '';
        this.reduction = this.route.snapshot.queryParams['reduction'];
        if (!this.reduction)
            this.reduction = 0;
        console.log(this.mot, this.distance, this.categorie, this.partenaire, this.reduction);
    }
    RecherchePage.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
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
    RecherchePage.prototype.dist = function (ln, la) {
        ln = parseFloat(ln);
        la = parseFloat(la);
        var p = 0.017453292519943295;
        var c = Math.cos;
        var a = 0.5 - c((la - this.lat) * p) / 2 + c(this.lat * p) * c((la) * p) * (1 - c(((ln - this.lng) * p))) / 2;
        var dis = (12742 * Math.asin(Math.sqrt(a)));
        dis = Math.round(dis);
        return dis;
    };
    RecherchePage.prototype.onOrderDelete = function (proID) {
        this.router.navigate(['/promo'], { queryParams: { page: proID } });
    };
    RecherchePage.prototype.seter = function () {
        if (this.error === false) {
            this.error = true;
        }
        else {
            this.error = false;
        }
    };
    RecherchePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recherche',
            template: __webpack_require__(/*! ./recherche.page.html */ "./src/app/pages/recherche/recherche.page.html"),
            styles: [__webpack_require__(/*! ./recherche.page.scss */ "./src/app/pages/recherche/recherche.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], src_app_pages_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], RecherchePage);
    return RecherchePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-recherche-recherche-module.js.map