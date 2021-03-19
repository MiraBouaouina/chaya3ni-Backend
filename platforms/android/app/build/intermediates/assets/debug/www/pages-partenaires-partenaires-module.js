(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-partenaires-partenaires-module"],{

/***/ "./src/app/pages/partenaires/partenaires.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/partenaires/partenaires.module.ts ***!
  \*********************************************************/
/*! exports provided: PartenairesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartenairesPageModule", function() { return PartenairesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _partenaires_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partenaires.page */ "./src/app/pages/partenaires/partenaires.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _partenaires_page__WEBPACK_IMPORTED_MODULE_5__["PartenairesPage"]
    }
];
var PartenairesPageModule = /** @class */ (function () {
    function PartenairesPageModule() {
    }
    PartenairesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_partenaires_page__WEBPACK_IMPORTED_MODULE_5__["PartenairesPage"]]
        })
    ], PartenairesPageModule);
    return PartenairesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/partenaires/partenaires.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/partenaires/partenaires.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>Partenaires</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item-sliding *ngFor=\"let partenaire of partenaire\">\n          <ion-item>\n            <ion-card>\n                <img src=\"{{partenaire.img}}\"/>\n                <ion-card-header>{{partenaire.name}}</ion-card-header>\n                <ion-label><strong>Adresse : {{partenaire.Adress}}</strong></ion-label>\n                <ion-card-content>\n                  {{partenaire.description}}\n                  </ion-card-content>\n                  <!--{{partenaire.siteweb}}*/-->\n                  <ion-item href=\"{{partenaire.siteweb}}\" class=\"activated\" (click)=\"window.open(this.href, '_system');\">\n                      <ion-icon name=\"globe\" slot=\"start\"></ion-icon>\n                      <ion-label>Siteweb</ion-label>\n                    </ion-item>\n            </ion-card>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/partenaires/partenaires.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/partenaires/partenaires.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  display: flex;\n  flex-direction: column;\n  width: 100% !important;\n  margin: 0 !important; }\n  ion-card.no-radius {\n    border-radius: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFydGVuYWlyZXMvRTpcXGRlYWx0bi9zcmNcXGFwcFxccGFnZXNcXHBhcnRlbmFpcmVzXFxwYXJ0ZW5haXJlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFJSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixvQkFBb0IsRUFBQTtFQVB4QjtJQUVRLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFydGVuYWlyZXMvcGFydGVuYWlyZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jYXJkIHtcclxuICAgICYubm8tcmFkaXVzIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/partenaires/partenaires.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/partenaires/partenaires.page.ts ***!
  \*******************************************************/
/*! exports provided: PartenairesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartenairesPage", function() { return PartenairesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/pages/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partenaires',
            template: __webpack_require__(/*! ./partenaires.page.html */ "./src/app/pages/partenaires/partenaires.page.html"),
            styles: [__webpack_require__(/*! ./partenaires.page.scss */ "./src/app/pages/partenaires/partenaires.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], PartenairesPage);
    return PartenairesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-partenaires-partenaires-module.js.map