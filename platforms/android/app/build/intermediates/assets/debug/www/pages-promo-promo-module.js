(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-promo-promo-module"],{

/***/ "./src/app/pages/promo/promo.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/promo/promo.module.ts ***!
  \*********************************************/
/*! exports provided: PromoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoPageModule", function() { return PromoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bar-rating */ "./node_modules/ngx-bar-rating/index.js");
/* harmony import */ var _promo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./promo.page */ "./src/app/pages/promo/promo.page.ts");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _promo_page__WEBPACK_IMPORTED_MODULE_6__["PromoPage"]
    }
];
var PromoPageModule = /** @class */ (function () {
    function PromoPageModule() {
    }
    PromoPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_bar_rating__WEBPACK_IMPORTED_MODULE_5__["BarRatingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_promo_page__WEBPACK_IMPORTED_MODULE_6__["PromoPage"]]
        })
    ], PromoPageModule);
    return PromoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/promo/promo.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/promo/promo.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<img src=\"{{test.img}}\"/>\n<span style=\"font-size: 20px; color: blue\">\n  <ion-icon name=\"people\" color=\"primary\"></ion-icon> <sup>{{count}} Profiteurs</sup>\n     </span>\n<div class=\"hr\"> </div>\n  {{test.name}}<br>\n  <div class=\"hr\"> </div>\n  <strong><span style=\"text-decoration: line-through; font-size: 22px;\n                font-weight: 700;\n                text-transform: uppercase;\n                display: inline-block; color:rgb(152, 151, 153)\">{{test.prixas}}<sup>DT</sup> </span>    <span style=\"color: #000000;font-size: 22px;\n                font-weight: 700;\n                text-transform: uppercase;\n                display: inline-block;\">&nbsp;&nbsp;&nbsp;{{test.prixas - (test.prixas/ 100)*test.reduction }}   <sup>DT</sup></span><span class=\"blink_me\">&nbsp;&nbsp;{{test.reduction}}% </span></strong><br>\n <div class=\"hr\"> </div>\n \n {{test.description}} \n <div class=\"hr\"> </div>\n Temps rester pour profiter :\n <br>\n <div id=\"timer\">\n  <span id=\"days\">{{_days}}</span>jrs\n  <span id=\"hours\">{{_hours}}</span>hr\n  <span id=\"minutes\">{{_minutes}}</span>min\n  <span id=\"seconds\">{{_seconds}}</span>s\n</div> \n<div class=\"hr\"> </div>\n<strong>Adresse : </strong> {{test.adresse}}\n<div class=\"hr\"> </div>\n<div style=\"text-align: center;\">\n  <ion-button color=\"primary\"  class=\"activated\"  (click)=\"addprof(test._id,userDetails._id,test.lien);\">\n    <ion-icon name=\"flame\" ></ion-icon>\n    <ion-label>Profiter</ion-label>\n  </ion-button>\n</div>\nlaissez un commentaire :\n<form [formGroup]=\"commentForm\">\n<rating formControlName=\"rate\"\n        readonly=\"false\" \n        size=\"1\" \n        (rateChange)=\"onRateChange($event)\">\n</rating>\n<ion-input color=\"secondary\" type=\"hidden\" formControlName=\"id\" text-center></ion-input>\n<ion-input color=\"secondary\" type=\"hidden\" formControlName=\"name\" text-center></ion-input>\n<ion-input color=\"secondary\" type=\"hidden\" formControlName=\"idp\" text-center></ion-input>\n\n<ion-item>\n  <ion-input type=\"text\" placeholder=\"commentaire :\" formControlName=\"commentaire\"></ion-input>\n  <ion-button clear item-right (click)=\"commenter(commentForm)\">Commenter</ion-button>\n </ion-item>\n </form>\n <ion-list *ngFor=\"let cmnt of cmnt\">\n <ion-item>\n  <ion-avatar slot=\"start\">\n    <img src=\"assets/img/avatar.png\">\n  </ion-avatar>\n  <ion-label><h3>{{cmnt.name_user}}</h3>\n  <p>{{cmnt.Commentaire}}</p>\n  <p>{{cmnt.date.slice(0, -5).replace('T',' ')}}</p>\n</ion-label>\n</ion-item>\n<rating rate=\"{{cmnt.rate}}\"\n        readonly=\"true\" \n        size=\"min\" \n        (rateChange)=\"onRateChange($event)\"></rating>\n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/promo/promo.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/promo/promo.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n  color: #6302ff;\n  font-size: 28px;\n  font-weight: 700;\n  text-transform: uppercase;\n  display: inline-block; }\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0; } }\n\n@keyframes blinker {\n  50% {\n    opacity: 0; } }\n\n#timer {\n  font-family: Arial, sans-serif;\n  font-size: 22px;\n  color: #f3eded;\n  letter-spacing: -1px;\n  background-color: #33adff; }\n\n#timer span {\n  font-size: 22px;\n  color: #333;\n  margin: 10px 3px 10px 15px; }\n\n#timer span:first-child {\n  margin-left: 0; }\n\n.hr {\n  border-bottom: 1px solid #ccc;\n  margin: 10px 0;\n  width: 100%; }\n\nion-icon {\n  font-size: 30px;\n  color: #8cb2fa; }\n\n#rounded {\n  width: 100%;\n  height: 100px;\n  border-radius: 10px;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvbW8vRTpcXGRlYWx0bi9zcmNcXGFwcFxccGFnZXNcXHByb21vXFxwcm9tby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2Q0FBcUM7VUFBckMscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRTtJQUFNLFVBQVUsRUFBQSxFQUFBOztBQURsQjtFQUNFO0lBQU0sVUFBVSxFQUFBLEVBQUE7O0FBRWxCO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixjQUF5QjtFQUN6QixvQkFBb0I7RUFBQyx5QkFBbUMsRUFBQTs7QUFFMUQ7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGVBQWU7RUFDZixjQUNFLEVBQUE7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUdiLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb21vL3Byb21vLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibGlua19tZSB7XHJcbiAgICBhbmltYXRpb246IGJsaW5rZXIgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgY29sb3I6ICM2MzAyZmY7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBibGlua2VyIHsgIFxyXG4gICAgNTAlIHsgb3BhY2l0eTogMDsgfVxyXG4gIH1cclxuICAjdGltZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6IHJnYigyNDMsIDIzNywgMjM3KTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O2JhY2tncm91bmQtY29sb3I6IHJnYig1MSwgMTczLCAyNTUpO1xyXG4gIH1cclxuICAjdGltZXIgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIG1hcmdpbjogMTBweCAzcHggMTBweCAxNXB4O1xyXG4gIH1cclxuICAjdGltZXIgc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbiAgLmhyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzhjYjJmYVxyXG4gICAgICB9XHJcbiAgICAgICNyb3VuZGVkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAgXHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/promo/promo.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/promo/promo.page.ts ***!
  \*******************************************/
/*! exports provided: PromoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoPage", function() { return PromoPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/pages/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PromoPage = /** @class */ (function () {
    function PromoPage(router, route, http, user, iab, formBuilder) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.user = user;
        this.iab = iab;
        this.formBuilder = formBuilder;
        this.value = this.route.snapshot.queryParams['page'];
        console.log(this.value);
    }
    PromoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.commentForm = this.formBuilder.group({
            'commentaire': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(70), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            'rate': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            'name': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            'id': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            'idp': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
        });
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('jwtToken') })
        };
        this.http.get(this.user.uri + "/userProfile", httpOptions).subscribe(function (data) {
            _this.userDetails = data;
            _this.commentForm.get('id').setValue(_this.userDetails._id);
            _this.commentForm.get('name').setValue(_this.userDetails.fullName);
        }, function (err) {
            console.log(err);
        });
        this.http.get(this.user.uri + "/prom/" + ("" + this.value)).subscribe(function (data) {
            var self = _this;
            _this.test = data;
            _this.commentForm.get('idp').setValue(_this.test._id);
            console.log(_this.test);
            _this.test.datef = _this.test.datef.toString().replace('T00:00:00.000Z', '');
            _this._trialEndsAt = _this.test.datef;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) {
                _this._diff = Date.parse(_this._trialEndsAt) - Date.parse(new Date().toString());
            })).subscribe(function (x) {
                _this._days = _this.getDays(_this._diff);
                _this._hours = _this.getHours(_this._diff);
                _this._minutes = _this.getMinutes(_this._diff);
                _this._seconds = _this.getSeconds(_this._diff);
            });
        }, function (err) {
            if (err.status === 401) {
                console.log("erreur");
            }
        });
        console.log(this.value);
        this.http.get(this.user.uri + "/getprofit/" + ("" + this.value)).subscribe(function (data) {
            _this.count = data;
            console.log(_this.value);
            console.log(_this.count);
        }, function (err) {
            console.log(err);
        });
        var mo = this.value;
        console.log(mo);
        this.http.get(this.user.uri + "/getcomment/" + ("" + this.value)).subscribe(function (data) {
            _this.cmnt = data;
            console.log(_this.cmnt);
        }, function (err) {
            console.log(err);
        });
    };
    PromoPage.prototype.getDays = function (t) {
        return Math.floor(t / (1000 * 60 * 60 * 24));
    };
    PromoPage.prototype.getHours = function (t) {
        return Math.floor((t / (1000 * 60 * 60)) % 24);
    };
    PromoPage.prototype.getMinutes = function (t) {
        return Math.floor((t / 1000 / 60) % 60);
    };
    PromoPage.prototype.getSeconds = function (t) {
        return Math.floor((t / 1000) % 60);
    };
    PromoPage.prototype.commenter = function (form) {
        var _this = this;
        console.log(form.value);
        this.http.post(this.user.uri + "/comment/", form.value).subscribe(function (res) {
            _this.ngOnInit();
        }, function (err) {
            console.log("erreur");
        });
    };
    PromoPage.prototype.addprof = function (proid, userid, lien) {
        var obj = {
            proid: proid,
            userid: userid
        };
        console.log(obj);
        var browser = this.iab.create(lien);
        this.http.post(this.user.uri + "/addprof", obj).subscribe(function (res) {
            console.log("true");
        }, function (errorResp) {
            console.log("false");
        });
    };
    PromoPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-promo',
            template: __webpack_require__(/*! ./promo.page.html */ "./src/app/pages/promo/promo.page.html"),
            styles: [__webpack_require__(/*! ./promo.page.scss */ "./src/app/pages/promo/promo.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], PromoPage);
    return PromoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-promo-promo-module.js.map