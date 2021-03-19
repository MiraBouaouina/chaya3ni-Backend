(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-profile-edit-profile-module"],{

/***/ "./src/app/pages/edit-profile/edit-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/pages/edit-profile/edit-profile.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_5__["EditProfilePage"]
    }
];
var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_5__["EditProfilePage"]]
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile\">\n  <ion-card no-margin>\n    <ion-card-content class=\"bg-profile\">\n      <h1 class=\"fw500\">{{userDetails.fullName}}</h1>\n      <h2 color=\"light\" margin-bottom>Utilisateur</h2>\n    </ion-card-content>\n  \n    <ion-grid fixed no-padding>\n      <ion-row>\n        <ion-col size=\"12\" padding>\n\n          <ion-list margin-bottom>\n\n            <form [formGroup]=\"onRegisterForm\" class=\"list-form\">\n              <ion-item no-padding class=\"animated fadeInUp\">\n                <ion-label position=\"floating\">\n                  <ion-icon name=\"contact\" item-start></ion-icon>\n                  Nom et Prenom\n                </ion-label>\n                <ion-input color=\"secondary\" type=\"text\" formControlName=\"fullName\"></ion-input>\n              </ion-item>\n              <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('fullName').touched && onRegisterForm.get('fullName').hasError('required')\">\n                <ion-text color=\"warning\">\n                  *champ obligatoire\n                </ion-text>\n              </p>\n        \n              <ion-item no-padding class=\"animated fadeInUp\">\n                <ion-label position=\"floating\">\n                  <ion-icon name=\"mail\" item-start></ion-icon>\n                  Email\n                </ion-label>\n                <ion-input color=\"secondary\" type=\"email\" formControlName=\"email\" ></ion-input>\n              </ion-item>\n              <p ion-text class=\"text08\" *ngIf=\" onRegisterForm.get('email').touched && onRegisterForm.get('email').hasError('required')\">\n                <ion-text color=\"warning\">\n                  *champ obligatoire\n                </ion-text>\n              </p>\n              <ion-item no-padding class=\"animated fadeInUp\">\n                <ion-label position=\"floating\">\n                  <ion-icon name=\"lock\" item-start></ion-icon>\n                  Nouveau mot de passe\n                </ion-label>\n                <ion-input color=\"secondary\" type=\"password\" formControlName=\"password\" ></ion-input>\n              </ion-item>\n              <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('password').touched && onRegisterForm.get('password').hasError('required')\">\n                <ion-text color=\"warning\">\n                  *champ obligatoire\n                </ion-text>\n              </p>\n              <ion-item no-padding class=\"animated fadeInUp\">\n                <ion-label position=\"floating\">\n                  <ion-icon name=\"lock\" item-start></ion-icon>\n                  Confirmer nouveau mot de passe\n                </ion-label>\n                <ion-input color=\"secondary\" type=\"password\" formControlName=\"password2\" ></ion-input>\n              </ion-item>\n              <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('password2').touched && onRegisterForm.hasError('notSame')\">\n                <ion-text color=\"warning\">\n                  *Les deux mot de passes ne correspont pas\n                </ion-text>\n              </p>\n              <ion-item no-padding class=\"animated fadeInUp\">\n                <ion-label position=\"floating\">\n                  <ion-icon name=\"calendar\" item-start></ion-icon>\n                  Date de naissance\n                </ion-label>\n                  <ion-datetime style=\"color:rgb(10, 10, 10)\" :pickerOptions=\"customPickerOptions\"  formControlName=\"dnaiss\"></ion-datetime>\n                </ion-item>    \n                  <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('dnaiss').touched && onRegisterForm.get('dnaiss').hasError('required')\">\n                <ion-text color=\"warning\">\n                  *champ obligatoire\n                </ion-text>\n              </p>\n              <ion-item no-padding class=\"animated fadeInUp\">\n                <ion-label position=\"floating\">\n                  <ion-icon name=\"call\" item-start></ion-icon>\n                  Numero de téléphone\n                </ion-label>\n                <ion-input color=\"secondary\" type=\"tel\" formControlName=\"tel\" ></ion-input>\n              </ion-item>\n              <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('tel').touched && onRegisterForm.get('tel').hasError('required')\">\n                <ion-text color=\"warning\">\n                  *champ obligatoire\n                </ion-text>\n              </p>\n            </form>\n          </ion-list>\n\n          \n  \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n    <ion-button size=\"large\" expand=\"full\" color=\"dark\" (click)=\"sendData(onRegisterForm.get('fullName').value,onRegisterForm.get('email').value,onRegisterForm.get('password2').value,onRegisterForm.get('dnaiss').value,onRegisterForm.get('tel').value,userDetails._id)\" no-margin [disabled]=\"mdp1 != mdp2\">Edit</ion-button>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light))\n  ; }\n\n.profile ion-card {\n  width: 100%;\n  border-radius: 0;\n  background-color: #fff; }\n\n.profile ion-card ion-card-content {\n    padding: 32px;\n    background-color: var(--ion-color-primary);\n    color: #fff;\n    text-align: center; }\n\n.profile ion-card ion-card-content img {\n      height: 128px;\n      width: 128px;\n      border-radius: 50%;\n      border: solid 4px #fff;\n      display: inline;\n      box-shadow: 0 0 28px rgba(255, 255, 255, 0.65); }\n\n.profile ion-card ion-card-content h1 {\n      margin-top: .5rem; }\n\n.profile ion-buttom button {\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL0U6XFxkZWFsdG4vc3JjXFxhcHBcXHBhZ2VzXFxlZGl0LXByb2ZpbGVcXGVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSTtFQUFhLEVBQUE7O0FBSWpCO0VBRUksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQkFBc0IsRUFBQTs7QUFKMUI7SUFNTSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTs7QUFUeEI7TUFZUSxhQUFhO01BQ2IsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixzQkFBc0I7TUFDdEIsZUFBZTtNQUNmLDhDQUEyQyxFQUFBOztBQWpCbkQ7TUFxQlEsaUJBQWlCLEVBQUE7O0FBckJ6QjtFQStCTSxTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKVxuICB9XG59XG5cbi5wcm9maWxlIHtcbiAgaW9uLWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDMycHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxMjhweDtcbiAgICAgICAgd2lkdGg6IDEyOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogc29saWQgNHB4ICNmZmY7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDI4cHggcmdiYSgyNTUsMjU1LDI1NSwgLjY1KTtcbiAgICAgIH1cblxuICAgICAgaDEge1xuICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24taXRlbSB7XG4gIH1cblxuICBpb24tYnV0dG9tIHtcbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/pages/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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






var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, loadingCtrl, toastCtrl, router, user, http, fb) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.user = user;
        this.http = http;
        this.fb = fb;
    }
    EditProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Authorization': localStorage.getItem('jwtToken') })
        };
        this.http.get(this.user.uri + "/userProfile", httpOptions).subscribe(function (data) {
            _this.userDetails = data;
            _this.onRegisterForm.get('fullName').setValue(_this.userDetails.fullName);
            _this.onRegisterForm.get('email').setValue(_this.userDetails.email);
            _this.onRegisterForm.get('dnaiss').setValue(_this.userDetails.datenaiss);
            _this.onRegisterForm.get('tel').setValue(_this.userDetails.Numtel);
            return _this.userDetails;
        }, function (err) {
            console.log(err);
        });
        this.onRegisterForm = this.fb.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            /* email: ['', Validators.required],*/
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(70), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)(\.[A-Za-z]{2,})$'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password2: ['',],
            dnaiss: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])],
            tel: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(12)
                ])]
        }, { validator: this.checkPasswords });
    };
    EditProfilePage.prototype.checkPasswords = function (group) {
        var pass = group.controls.password.value;
        var confirmPass = group.controls.password2.value;
        return pass === confirmPass ? null : { notSame: true };
    };
    EditProfilePage.prototype.sendData = function (name, email, mdp, dnaiss, tel, id) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, obj;
            var _this = this;
            return __generator(this, function (_a) {
                if (mdp) {
                    obj = {
                        name: name,
                        email: email,
                        mdp: mdp,
                        dnaiss: dnaiss,
                        tel: tel
                    };
                    console.log(obj);
                    this.http.post(this.user.uri + "/editProfile/" + ("" + id), obj).subscribe(function (res) {
                        _this.logeToast();
                        _this.ngOnInit();
                    }, function (err) {
                        _this.logrToast();
                        _this.ngOnInit();
                    });
                }
                else {
                    obj = {
                        name: name,
                        email: email,
                        dnaiss: dnaiss,
                        tel: tel
                    };
                    this.http.post(this.user.uri + "/editProfile2/" + ("" + id), obj).subscribe(function (res) {
                        _this.logeToast();
                        _this.ngOnInit();
                    }, function (err) {
                        _this.logrToast();
                        _this.ngOnInit();
                    });
                    console.log(obj);
                }
                return [2 /*return*/];
            });
        });
    };
    EditProfilePage.prototype.logeToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Modification reussi veuillez utilisez vous nouvelles cordonnes lors de ta prochaine connexion ',
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
    EditProfilePage.prototype.logrToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'operation echouée',
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
    EditProfilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.page.html */ "./src/app/pages/edit-profile/edit-profile.page.html"),
            styles: [__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/pages/edit-profile/edit-profile.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EditProfilePage);
    return EditProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-profile-edit-profile-module.js.map