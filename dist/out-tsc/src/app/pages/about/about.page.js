var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
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
            'email': ['', [Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)(\.[A-Za-z]{2,})$'), Validators.required]],
            'sujet': ['', [Validators.maxLength(70), Validators.required]],
            'msg': ['', [Validators.maxLength(70), Validators.required]],
            'name': ['',],
            'id': ['',],
        });
        var httpOptions = {
            headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
        };
        this.http.get('http://localhost:4000/user/userProfile', httpOptions).subscribe(function (data) {
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
        this.http.post("http://localhost:4000/user/message", form.value).subscribe(function (res) {
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
        Component({
            selector: 'app-about',
            templateUrl: './about.page.html',
            styleUrls: ['./about.page.scss'],
        }),
        __metadata("design:paramtypes", [HttpClient,
            NavController,
            MenuController,
            ToastController,
            AlertController,
            LoadingController,
            FormBuilder,
            UserService,
            Router])
    ], AboutPage);
    return AboutPage;
}());
export { AboutPage };
//# sourceMappingURL=about.page.js.map