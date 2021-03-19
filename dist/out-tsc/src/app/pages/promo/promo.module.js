var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BarRatingModule } from "ngx-bar-rating";
import { PromoPage } from './promo.page';
import { IonicRatingModule } from 'ionic4-rating';
var routes = [
    {
        path: '',
        component: PromoPage
    }
];
var PromoPageModule = /** @class */ (function () {
    function PromoPageModule() {
    }
    PromoPageModule = __decorate([
        NgModule({
            imports: [
                IonicRatingModule,
                ReactiveFormsModule,
                BarRatingModule,
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PromoPage]
        })
    ], PromoPageModule);
    return PromoPageModule;
}());
export { PromoPageModule };
//# sourceMappingURL=promo.module.js.map