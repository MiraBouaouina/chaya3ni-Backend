(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"login auth-page\">\n\n  <div class=\"auth-content\">\n    <div padding-horizontal text-center>\n      <div class=\"logo\"></div>\n      <h3 no-margin>\n        <ion-text color=\"light\" class=\"fw700\">\n          <ion-text color=\"Light\">Inscription</ion-text>\n        </ion-text>\n      </h3>\n    </div>\n    <form [formGroup]=\"onRegisterForm\" class=\"list-form\">\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"contact\" item-start></ion-icon>\n          Nom et Prenom\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"text\" formControlName=\"fullName\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('fullName').touched && onRegisterForm.get('fullName').hasError('required')\">\n        <ion-text color=\"warning\">\n          *champ obligatoire\n        </ion-text>\n      </p>\n\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"mail\" item-start></ion-icon>\n          Email\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"email\" formControlName=\"email\" ></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\" onRegisterForm.get('email').touched && onRegisterForm.get('email').hasError('required')\">\n        <ion-text color=\"warning\">\n          *champ obligatoire\n        </ion-text>\n      </p>\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"lock\" item-start></ion-icon>\n          Mot de passe\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"password\" formControlName=\"password\" ></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('password').touched && onRegisterForm.get('password').hasError('required')\">\n        <ion-text color=\"warning\">\n          *champ obligatoire\n        </ion-text>\n      </p>\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"calendar\" item-start></ion-icon>\n          Date de naissance\n        </ion-label>\n          <ion-datetime style=\"color:white\" :pickerOptions=\"customPickerOptions\"  formControlName=\"dnaiss\"></ion-datetime>\n        </ion-item>    \n          <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('dnaiss').touched && onRegisterForm.get('dnaiss').hasError('required')\">\n        <ion-text color=\"warning\">\n          *champ obligatoire\n        </ion-text>\n      </p>\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"call\" item-start></ion-icon>\n          Numero de téléphone\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"tel\" formControlName=\"tel\" ></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('tel').touched && onRegisterForm.get('tel').hasError('required')\">\n        <ion-text color=\"warning\">\n          *champ obligatoire\n        </ion-text>\n      </p>\n    </form>\n    <div margin-top>\n      <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"dark\" (click)=\"inscrit(onRegisterForm)\"  [disabled]=\"!onRegisterForm.valid\"\n        tappable>\n        <ion-icon name=\"log-in\"></ion-icon>\n        S'inscrire\n      </ion-button>\n      <p text-center>\n        <ion-text color=\"light\">\n          Ou s'inscrire avec:\n        </ion-text>\n      </p>\n      <ion-grid class=\"btn-group\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-button shape=\"round\" expand=\"full\" color=\"secondary\">\n              <ion-icon slot=\"icon-only\" name=\"logo-facebook\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button shape=\"round\" expand=\"full\" color=\"secondary\">\n              <ion-icon slot=\"icon-only\" name=\"logo-twitter\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button shape=\"round\" expand=\"full\" color=\"secondary\">\n              <ion-icon slot=\"icon-only\" name=\"logo-googleplus\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div text-center margin-top>\n      <span (click)=\"goToLogin()\" tappable>\n        <ion-text color=\"light\">\n          <strong>J'ai déja un compte!</strong>\n        </ion-text>\n      </span>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary))\n  ; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvRTpcXGRlYWx0bi9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSTtFQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpKVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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





var RegisterPage = /** @class */ (function () {
    function RegisterPage(fb, us, navCtrl, menuCtrl, toastController, loadingCtrl) {
        this.fb = fb;
        this.us = us;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.createForm();
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.presentToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Inscription reussi',
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
    RegisterPage.prototype.erreurToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'email deja existe',
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
    RegisterPage.prototype.createForm = function () {
        this.onRegisterForm = this.fb.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            /* email: ['', Validators.required],*/
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(70), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)(\.[A-Za-z]{2,})$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dnaiss: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            tel: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12)
                ])]
        });
    };
    /*addUser(name,email, password) {
      this.us.addUser(name, email, password);
    }*/
    RegisterPage.prototype.inscrit = function (form) {
        var _this = this;
        this.us.postUser(form.value).subscribe(function (res) {
            _this.presentToast();
            _this.goToLogin();
        }, function (err) {
            _this.erreurToast();
        });
    };
    RegisterPage.prototype.goToLogin = function () {
        this.navCtrl.navigateRoot('/');
    };
    RegisterPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module.js.map