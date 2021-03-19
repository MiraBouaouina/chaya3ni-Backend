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
import { NavController, AlertController, MenuController, ToastController, PopoverController, ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
// Modals
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { ImagePage } from './../modal/image/image.page';
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../../components/notifications/notifications.component';
import { Router } from '@angular/router';
var HomeResultsPage = /** @class */ (function () {
    function HomeResultsPage(http, navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl, geolocation, nativeGeocoder, user, router) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.user = user;
        this.router = router;
        this.searchKey = '';
        this.yourLocation = '123 Test Street';
        this.themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
    }
    HomeResultsPage.prototype.logsToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
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
    HomeResultsPage.prototype.ngOnInit = function () {
        var _this = this;
        var httpOptions = {
            headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
        };
        this.http.get(this.user.uri + "/userProfile", httpOptions).subscribe(function (data) {
            _this.userDetails = data;
        }, function (err) {
            console.log(err);
        });
        var self = this;
        this.http.get(this.user.uri + "/getprom").subscribe(function (data) {
            _this.promotion = data;
            console.log(_this.promotion);
        }, function (err) {
            if (err.status === 401) {
                console.log("erreur");
            }
        });
        console.log(this.promotion);
        this.geolocation.getCurrentPosition({ maximumAge: 300000, timeout: 30000, enableHighAccuracy: true }).then(function (resp) {
            self.lat = resp.coords.latitude;
            self.lng = resp.coords.longitude;
            console.log(self.lat);
            console.log(self.lng);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    HomeResultsPage.prototype.check = function (ln, la) {
        ln = parseFloat(ln);
        la = parseFloat(la);
        var p = 0.017453292519943295;
        var c = Math.cos;
        var a = 0.5 - c((la - this.lat) * p) / 2 + c(this.lat * p) * c((la) * p) * (1 - c(((ln - this.lng) * p))) / 2;
        var dis = (12742 * Math.asin(Math.sqrt(a)));
        if (dis < 200)
            return true;
        else
            return false;
    };
    HomeResultsPage.prototype.distance = function (ln, la) {
        ln = parseFloat(ln);
        la = parseFloat(la);
        var p = 0.017453292519943295;
        var c = Math.cos;
        var a = 0.5 - c((la - this.lat) * p) / 2 + c(this.lat * p) * c((la) * p) * (1 - c(((ln - this.lng) * p))) / 2;
        var dis = (12742 * Math.asin(Math.sqrt(a)));
        dis = Math.round(dis);
        return dis;
    };
    HomeResultsPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
    };
    HomeResultsPage.prototype.settings = function () {
        this.navCtrl.navigateForward('settings');
    };
    HomeResultsPage.prototype.alertLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var changeLocation;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Change Location',
                            message: 'Type your Address.',
                            inputs: [
                                {
                                    name: 'location',
                                    placeholder: 'Enter your new Location',
                                    type: 'text'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Change',
                                    handler: function (data) { return __awaiter(_this, void 0, void 0, function () {
                                        var toast;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    console.log('Change clicked', data);
                                                    this.yourLocation = data.location;
                                                    return [4 /*yield*/, this.toastCtrl.create({
                                                            message: 'Location was change successfully',
                                                            duration: 3000,
                                                            position: 'top',
                                                            closeButtonText: 'OK',
                                                            showCloseButton: true
                                                        })];
                                                case 1:
                                                    toast = _a.sent();
                                                    toast.present();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        changeLocation = _a.sent();
                        changeLocation.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeResultsPage.prototype.searchFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: SearchFilterPage
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomeResultsPage.prototype.presentImage = function (image) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: ImagePage,
                            componentProps: { value: image }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomeResultsPage.prototype.onOrderDelete = function (proID) {
        this.router.navigate(['/promo'], { queryParams: { page: proID } });
    };
    HomeResultsPage.prototype.notifications = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: NotificationsComponent,
                            event: ev,
                            animated: true,
                            showBackdrop: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomeResultsPage.prototype.test = function (proid, userid) {
        var obj = {
            proid: proid,
            userid: userid
        };
        console.log(obj);
        this.http.post(this.user.uri + "/addfav", obj).subscribe(function (res) {
            console.log("true");
        }, function (errorResp) {
            console.log("false");
        });
    };
    HomeResultsPage.prototype.isfav = function (proid, userid) {
        var obj = {
            proid: proid,
            userid: userid
        };
        this.http.post(this.user.uri + "/isfav", obj).subscribe(function (res) {
            return true;
        }, function (errorResp) {
            return false;
        });
    };
    HomeResultsPage.prototype.del = function (proid, userid) {
        var _this = this;
        var obj = {
            proid: proid,
            userid: userid
        };
        console.log("test");
        this.http.post(this.user.uri + "/isfav", obj).subscribe(function (res) {
            _this.fav = res;
        }, function (errorResp) {
            console.log("false");
        });
        this.http.delete(this.user.uri + "/delfav" + ("" + this.fav._id)).subscribe(function (res) {
            _this.ngOnInit();
        }, function (err) {
            console.log("false");
        });
    };
    HomeResultsPage.prototype.search = function (msg) { console.log(msg); };
    HomeResultsPage = __decorate([
        Component({
            selector: 'app-home-results',
            templateUrl: './home-results.page.html',
            styleUrls: ['./home-results.page.scss']
        }),
        __metadata("design:paramtypes", [HttpClient,
            NavController,
            MenuController,
            PopoverController,
            AlertController,
            ModalController,
            ToastController,
            Geolocation,
            NativeGeocoder,
            UserService,
            Router])
    ], HomeResultsPage);
    return HomeResultsPage;
}());
export { HomeResultsPage };
//# sourceMappingURL=home-results.page.js.map