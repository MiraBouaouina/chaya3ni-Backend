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
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
var UserService = /** @class */ (function () {
    function UserService(http, toastController, navCtrl, router) {
        this.http = http;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
        this.uri = 'http://192.168.1.100:4000/user';
    }
    UserService.prototype.addUser = function (name, email, password) {
        var _this = this;
        var obj = {
            name: name,
            email: email,
            password: password
        };
        console.log(obj);
        this.http.post(this.uri + "/add", obj)
            .subscribe(function (res) {
            _this.presentToast();
            _this.goToLogin();
        }, function (errorResp) {
            _this.erreurToast();
        });
    };
    UserService.prototype.getIPInfo = function () {
        return this.http.get("https://ipapi.co/json/");
    };
    UserService.prototype.goToLogin = function () {
        this.navCtrl.navigateRoot('/');
    };
    UserService.prototype.presentToast = function () {
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
    UserService.prototype.erreurToast = function () {
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
    UserService.prototype.login = function (authCredentials) {
        return this.http.post(this.uri + "/authenticate", authCredentials, this.noAuthHeader);
    };
    UserService.prototype.postUser = function (user) {
        return this.http.post(this.uri + "/register", user, this.noAuthHeader);
    };
    UserService.prototype.getUserProfile = function () {
        return this.http.get(this.uri + "/userProfile");
    };
    //Helper Methods
    UserService.prototype.setToken = function (token) {
        localStorage.setItem('jwtToken', token);
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem('jwtToken');
    };
    UserService.prototype.deleteToken = function () {
        localStorage.removeItem('jwtToken');
    };
    UserService.prototype.getUserPayload = function () {
        var token = this.getToken();
        if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        else
            return null;
    };
    UserService.prototype.isLoggedIn = function () {
        var userPayload = this.getUserPayload();
        if (userPayload)
            return userPayload.exp > Date.now() / 1000;
        else
            return false;
    };
    UserService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, ToastController, NavController, Router])
    ], UserService);
    return UserService;
}());
export { UserService };
/* login(email: String, password: String){
   const obj = {
     email: email,
     password: password
   };
 this.http.post(`${this.uri}/login`,obj)
 .subscribe(
   res=>{this.router.navigate(['/home-results'])
   this.logsToast()} ,
   errorResp=>this.logeToast()
 )
 }
 async presentToast() {
   const toast = await this.toastController.create({
     message: 'Inscription reussi',
     duration: 2000
   });
   toast.present();
 }
 async erreurToast() {
   const toast = await this.toastController.create({
     message: 'email deja existe',
     duration: 2000
   });
   toast.present();
 }
 async logsToast() {
   const toast = await this.toastController.create({
     message: 'login avec succes',
     duration: 2000
   });
   toast.present();
 }
 async logeToast() {
   const toast = await this.toastController.create({
     message: 'login ou mot de passe est incorrecte',
     duration: 2000
   });
   toast.present();
 }
 goToLogin() {
   this.navCtrl.navigateRoot('/');
 }
 goToInscription() {
   this.navCtrl.navigateRoot('/registry');
 }
}*/ 
//# sourceMappingURL=user.service.js.map