(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"],{

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.page */ "./src/app/pages/about/about.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]
    }
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Nous Contacter</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"bg-white\" no-margin>\n    <ion-card-content>\n      <h1 margin-bottom>\n        <ion-text color=\"primary\" ><strong>Interface de repport des bugs et suggestion pour l'admin</strong></ion-text>\n      </h1>\n        <form [formGroup]=\"contactForm\" class=\"list-form\">\n          <ion-item no-padding class=\"animated fadeInUp\">\n            <ion-label position=\"floating\">\n              <ion-icon name=\"clipboard\" item-start></ion-icon>\n              Sujet\n            </ion-label>\n            <ion-input color=\"secondary\" type=\"text\" formControlName=\"sujet\" text-center></ion-input>\n          </ion-item>\n          <p ion-text class=\"text08\" *ngIf=\"!contactForm.get('sujet').valid && contactForm.get('sujet').touched \">\n            <ion-text color=\"warning\">\n              *Champ obligatoire\n            </ion-text>\n          </p>\n          <ion-item no-padding class=\"animated fadeInUp\">\n            <ion-label position=\"floating\">\n              <ion-icon name=\"mail\" item-start></ion-icon>\n              Email\n            </ion-label>\n            <ion-input color=\"secondary\" type=\"email\" formControlName=\"email\" text-center></ion-input>\n          </ion-item>\n          <p ion-text class=\"text08\" *ngIf=\"!contactForm.get('email').valid && contactForm.get('email').touched \">\n            <ion-text color=\"warning\">\n              *Champ obligatoire\n            </ion-text>\n          </p>\n          <ion-input color=\"secondary\" type=\"hidden\" formControlName=\"id\" text-center></ion-input>\n          <ion-input color=\"secondary\" type=\"hidden\" formControlName=\"name\" text-center></ion-input>\n          <ion-item no-padding class=\"animated fadeInUp\">\n            <ion-label position=\"floating\">\n              <ion-icon name=\"paper\" item-start></ion-icon>\n              Message\n            </ion-label>\n            <ion-textarea color=\"secondary\"  formControlName=\"msg\" text-center></ion-textarea>\n          </ion-item>\n          <p ion-text class=\"text08\" *ngIf=\"!contactForm.get('msg').valid && contactForm.get('msg').touched \">\n            <ion-text color=\"warning\">\n              *Champ obligatoire\n            </ion-text>\n          </p>\n          <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"dark\" (click)= \"envoyer(contactForm) \"[disabled]=\"!contactForm.valid\" tappable>\n            <ion-icon name=\"send\"></ion-icon>\n            envoyer\n          </ion-button>   \n</form>  \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/about/about.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light))\n    ; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvRTpcXGRlYWx0bi9zcmNcXGFwcFxccGFnZXNcXGFib3V0XFxhYm91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUTtJQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSwgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSlcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/about/about.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/pages/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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






var AboutPage = /** @class */ (function () {
    function AboutPage(http, navCtrl, menuCtrl, toastCtrl, alertCtrl, loadingCtrl, formBuilder, user, router) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.user = user;
        this.router = router;
    }
    AboutPage.prototype.ngOnInit = function () {
        var _this = this;
        this.contactForm = this.formBuilder.group({
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(70), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)(\.[A-Za-z]{2,})$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'sujet': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(70), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'msg': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(70), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'name': ['',],
            'id': ['',],
        });
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ 'Authorization': localStorage.getItem('jwtToken') })
        };
        this.http.get(this.user.uri + "/userProfile", httpOptions).subscribe(function (data) {
            _this.userDetails = data;
            _this.contactForm.get('id').setValue(_this.userDetails._id);
            _this.contactForm.get('name').setValue(_this.userDetails.fullName);
            console.log(_this.userDetails._id, _this.userDetails.fullName);
        }, function (err) {
            console.log(err);
        });
    };
    AboutPage.prototype.envoyer = function (form) {
        var _this = this;
        this.http.post(this.user.uri + "/message", form.value).subscribe(function (res) {
            _this.presentToast();
            _this.contactForm.reset();
        }, function (err) {
            _this.erreurToast();
        });
    };
    AboutPage.prototype.presentToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Message envoyer avec succees vous allez recevoir un reponse via email dans la prochaine 48H',
                            duration: 6000,
                            showCloseButton: true,
                            closeButtonText: "X"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutPage.prototype.erreurToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Operation echouee',
                            duration: 2000,
                            showCloseButton: true,
                            closeButtonText: "X"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/pages/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/pages/about/about.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-about-about-module.js.map