var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FormBuilder, Validators } from '@angular/forms';
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
            'commentaire': ['', [Validators.maxLength(70), Validators.required]],
            'rate': ['', [Validators.required]],
            'name': ['', [Validators.required]],
            'id': ['', [Validators.required]],
            'idp': ['', [Validators.required]],
        });
        var httpOptions = {
            headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
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
            interval(1000).pipe(map(function (x) {
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
        this.http.get(this.user.uri + "/getcomment").subscribe(function (data) {
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
        Component({
            selector: 'app-promo',
            templateUrl: './promo.page.html',
            styleUrls: ['./promo.page.scss'],
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute, HttpClient, UserService, InAppBrowser, FormBuilder])
    ], PromoPage);
    return PromoPage;
}());
export { PromoPage };
//# sourceMappingURL=promo.page.js.map