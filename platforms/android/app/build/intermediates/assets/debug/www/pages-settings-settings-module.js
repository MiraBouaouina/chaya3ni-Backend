(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Liste Favoris</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item-sliding *ngFor=\"let promotion of promotion\">\n          <div *ngFor=\"let favoris of favoris\">\n          <ion-item  *ngIf=\"favoris.id_prom === promotion._id && favoris.id_user === userDetails._id\">\n            <ion-card>\n                \n              <div style=\"text-align: right;\"  >\n              <ion-icon  (click)=\"delete(favoris._id)\" style=\"size: 15px;color:black\" name=\"trash\"  slot=\"end\"></ion-icon></div>\n                <img src=\"{{promotion.img}}\"/>\n                <strong>{{distance(promotion.Longitude,promotion.Latitude)}} Km</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              \n                <ion-card-header>{{promotion.name}}</ion-card-header>\n                <ion-label><strong><span style=\"text-decoration: line-through; font-size: 22px;\n                  font-weight: 700;\n                  text-transform: uppercase;\n                  display: inline-block;\">{{promotion.prixas}}<sup>DT</sup> </span>    <span style=\"color: #d00ff7;font-size: 22px;\n                  font-weight: 700;\n                  text-transform: uppercase;\n                  display: inline-block;\">&nbsp;&nbsp;&nbsp;{{promotion.prixas - (promotion.prixas/ 100)*promotion.reduction }}   <sup>DT</sup></span><span class=\"blink_me\">&nbsp;&nbsp;{{promotion.reduction}}% </span></strong></ion-label>\n                  <!--{{partenaire.siteweb}}*/-->\n                  <ion-button  color=\"secondary\" (click)=\"onOrderDelete(promotion._id)\">\n                      <ion-icon name=\"eye\" slot=\"start\"></ion-icon>\n                      <ion-label>Plus de detail</ion-label>\n                    </ion-button>\n            </ion-card>\n          </ion-item>\n        </div>\n        </ion-item-sliding>\n      </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/settings/settings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light); }\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium); }\n\n:host ion-card {\n  display: flex;\n  flex-direction: column;\n  width: 100% !important;\n  margin: 0 !important; }\n\n:host ion-card.no-radius {\n    border-radius: 0; }\n\n.blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n  color: #ff7c02;\n  font-size: 28px;\n  font-weight: 700;\n  text-transform: uppercase;\n  display: inline-block; }\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0; } }\n\n@keyframes blinker {\n  50% {\n    opacity: 0; } }\n\nion-icon {\n  font-size: 30px;\n  color: #8cc8fa; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MvRTpcXGRlYWx0bi9zcmNcXGFwcFxccGFnZXNcXHNldHRpbmdzXFxzZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFTSxvQ0FBYSxFQUFBOztBQUZuQjtFQU1NLGdCQUFnQjtFQUNoQixpREFBaUQsRUFBQTs7QUFQdkQ7RUFjTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixvQkFBb0IsRUFBQTs7QUFqQjFCO0lBWVUsZ0JBQWdCLEVBQUE7O0FBUTFCO0VBQ0UsNkNBQXFDO1VBQXJDLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0U7SUFBTSxVQUFVLEVBQUEsRUFBQTs7QUFEbEI7RUFDRTtJQUFNLFVBQVUsRUFBQSxFQUFBOztBQUVsQjtFQUNBLGVBQWU7RUFDZixjQUNBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgfVxuXG4gIGlvbi1pdGVtIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB9XG5cbiAgaW9uLWNhcmQge1xuICAgICAgJi5uby1yYWRpdXMge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICB9XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxufVxuLmJsaW5rX21lIHtcbiAgYW5pbWF0aW9uOiBibGlua2VyIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgY29sb3I6ICNmZjdjMDI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rZXIgeyAgXG4gIDUwJSB7IG9wYWNpdHk6IDA7IH1cbn1cbmlvbi1pY29ue1xuZm9udC1zaXplOiAzMHB4O1xuY29sb3I6ICM4Y2M4ZmFcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/settings/settings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/pages/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, user, router, http, geolocation, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.router = router;
        this.http = http;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    SettingsPage.prototype.ngOnInit = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('jwtToken') })
        };
        this.http.get(this.user.uri + "/userProfile", httpOptions).subscribe(function (data) {
            _this.userDetails = data;
        }, function (err) {
            console.log(err);
        });
        this.http.get(this.user.uri + "/getprom").subscribe(function (data) {
            _this.promotion = data;
            console.log(_this.promotion);
        }, function (err) {
            if (err.status === 401) {
                console.log("erreur");
            }
        });
        this.http.get(this.user.uri + "/getfav").subscribe(function (data) {
            _this.favoris = data;
            console.log(_this.favoris, 'favoris');
        }, function (err) {
            if (err.status === 401) {
                console.log("erreur");
            }
        });
        this.geolocation.getCurrentPosition({ maximumAge: 300000, timeout: 30000, enableHighAccuracy: true }).then(function (resp) {
            _this.lat = resp.coords.latitude;
            _this.lng = resp.coords.longitude;
            console.log(_this.lat);
            console.log(_this.lng);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    SettingsPage.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirmer suppression',
                            message: 'Voulez vous supprimer cette promotion de la liste favoris',
                            buttons: [
                                {
                                    text: 'Anuuler',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Confirmer',
                                    handler: function () {
                                        _this.http.delete(_this.user.uri + "/delfav/" + ("" + id)).subscribe(function (res) {
                                            _this.suc();
                                            _this.ngOnInit();
                                        }, function (err) {
                                            _this.err();
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.err = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Operation echouée ',
                            duration: 4000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.suc = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Promotion supprimée de favoris 💔',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.distance = function (ln, la) {
        ln = parseFloat(ln);
        la = parseFloat(la);
        var p = 0.017453292519943295;
        var c = Math.cos;
        var a = 0.5 - c((la - this.lat) * p) / 2 + c(this.lat * p) * c((la) * p) * (1 - c(((ln - this.lng) * p))) / 2;
        var dis = (12742 * Math.asin(Math.sqrt(a)));
        dis = Math.round(dis);
        return dis;
    };
    SettingsPage.prototype.editProfile = function () {
        this.navCtrl.navigateForward('edit-profile');
    };
    SettingsPage.prototype.onOrderDelete = function (proID) {
        this.router.navigate(['/promo'], { queryParams: { page: proID } });
    };
    SettingsPage.prototype.logout = function () {
        this.navCtrl.navigateRoot('/');
    };
    SettingsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/pages/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/settings/settings.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module.js.map