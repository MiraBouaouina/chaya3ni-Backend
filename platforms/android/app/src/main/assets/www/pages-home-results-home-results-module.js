(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-results-home-results-module"],{

/***/ "./src/app/components/popmenu/popmenu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" class=\"animated fadeInDown\">\n  <ion-fab-button (click)=\"togglePopupMenu()\">\n    <ion-ripple-effect></ion-ripple-effect>\n    <ion-icon name=\"apps\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<div class=\"popup-menu\">\n  <div class=\"popup-menu-overlay\" [ngClass]=\"{'in': openMenu}\"></div>\n  <div class=\"popup-menu-panel\" [ngClass]=\"{'in': openMenu}\">\n    <div class=\"popup-menu-item\">\n      <ion-icon name=\"cog\" slot=\"middle\" size=\"large\"></ion-icon>\n      <span>Config</span>\n    </div>\n    <div class=\"popup-menu-item\">\n      <ion-icon name=\"beer\" slot=\"middle\" size=\"large\"></ion-icon>\n      <span>Activities</span>\n    </div>\n    <div class=\"popup-menu-item\">\n      <ion-icon name=\"person\" slot=\"middle\" size=\"large\"></ion-icon>\n      <span>Settings</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/popmenu/popmenu.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup-menu-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.15s ease-in-out;\n  background-image: linear-gradient(rgba(79, 36, 172, 0.85) 0%, rgba(79, 36, 172, 0.65) 100%); }\n  .popup-menu-overlay.in {\n    opacity: 1;\n    visibility: visible; }\n  .popup-menu-toggle {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  bottom: 10px;\n  left: 50%;\n  margin-left: -20px;\n  background-color: var(--ion-color-primary);\n  border-radius: 50%;\n  z-index: 101;\n  transition: all .25s ease-in-out; }\n  .popup-menu-toggle.out {\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    transition: all .15s ease-in-out; }\n  .popup-menu-toggle.out:before {\n      transition: all .15s ease-in-out;\n      -webkit-transform: scale(0);\n      transform: scale(0); }\n  .popup-menu-panel {\n  position: fixed;\n  width: 300px;\n  border-radius: 5%;\n  bottom: 80px;\n  left: 50%;\n  margin-left: -150px;\n  padding: 20px;\n  background-color: var(--ion-color-primary);\n  z-index: 102;\n  transition: all .25s ease-in-out;\n  transition-delay: .15s;\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  display: -moz-flex;\n  display: flex;\n  flex-wrap: wrap; }\n  .popup-menu-panel .popup-menu-item {\n    margin: auto;\n    -moz-flex: 1 0 30%;\n    flex: 1 0 30%;\n    display: -moz-flex;\n    display: flex;\n    -moz-flex-direction: column;\n    flex-direction: column;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    opacity: 0;\n    transition: all .25s ease-in-out; }\n  .popup-menu-panel .popup-menu-item ion-icon {\n      margin: 0 auto;\n      text-align: center;\n      color: #fff; }\n  .popup-menu-panel .popup-menu-item span {\n      padding: 0;\n      margin: 0 0 auto 0;\n      color: #fff;\n      text-align: center;\n      font-size: 12px;\n      text-transform: uppercase;\n      font-weight: 500;\n      line-height: 18px; }\n  .popup-menu-panel .popup-menu-item:active i {\n      color: #dd4135;\n      transition: all 0.15s; }\n  .popup-menu-panel .popup-menu-item:active span {\n      color: #dd4135;\n      transition: all .15s; }\n  .popup-menu-panel.in {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    transition-delay: 0s; }\n  .popup-menu-panel.in .popup-menu-item {\n      -webkit-transform: scale(1);\n      transform: scale(1);\n      opacity: 1;\n      transition-delay: .15s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3BtZW51L0U6XFxkZWFsdG4vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBvcG1lbnVcXHBvcG1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBRWxCLGlDQUFpQztFQUVqQywyRkFBcUYsRUFBQTtFQVp6RjtJQWNRLFVBQVU7SUFDVixtQkFBbUIsRUFBQTtFQUkzQjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUVaLGdDQUFnQyxFQUFBO0VBWHBDO0lBYVEsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBRW5CLGdDQUFnQyxFQUFBO0VBbEJ4QztNQXFCWSxnQ0FBZ0M7TUFDaEMsMkJBQTJCO01BQzNCLG1CQUFtQixFQUFBO0VBSy9CO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFFWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxZQUFZO0VBRVosZ0NBQWdDO0VBRWhDLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFJbkIsa0JBQWtCO0VBRWxCLGFBQWE7RUFJYixlQUFlLEVBQUE7RUE1Qm5CO0lBOEJRLFlBQVk7SUFJWixrQkFBa0I7SUFFbEIsYUFBYTtJQUliLGtCQUFrQjtJQUVsQixhQUFhO0lBSWIsMkJBQTJCO0lBRTNCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFVBQVU7SUFFVixnQ0FBZ0MsRUFBQTtFQXJEeEM7TUF1RFksY0FBYztNQUNkLGtCQUFrQjtNQUNsQixXQUFXLEVBQUE7RUF6RHZCO01BNERZLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YseUJBQXlCO01BQ3pCLGdCQUFnQjtNQUNoQixpQkFBaUIsRUFBQTtFQW5FN0I7TUF1RWdCLGNBQXFCO01BRXJCLHFCQUFxQixFQUFBO0VBekVyQztNQTRFZ0IsY0FBcUI7TUFFckIsb0JBQW9CLEVBQUE7RUE5RXBDO0lBbUZRLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFFbkIsb0JBQW9CLEVBQUE7RUF0RjVCO01Bd0ZZLDJCQUEyQjtNQUMzQixtQkFBbUI7TUFDbkIsVUFBVTtNQUVWLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3BtZW51L3BvcG1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQb3B1cCBNZW51IC8vXG4ucG9wdXAtbWVudS1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiYSg3OSwzNiwxNzIsIC44NSkgMCUsIHJnYmEoNzksMzYsMTcyLCAuNjUpIDEwMCUpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDc5LDM2LDE3MiwgLjg1KSAwJSwgcmdiYSg3OSwzNiwxNzIsIC42NSkgMTAwJSk7XG4gICAgJi5pbiB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxufVxuXG4ucG9wdXAtbWVudS10b2dnbGUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB6LWluZGV4OiAxMDE7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcbiAgICAmLm91dCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlLWluLW91dDtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBvcHVwLW1lbnUtcGFuZWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMzAwcHg7XG5cbiAgICBib3JkZXItcmFkaXVzOiA1JTtcbiAgICBib3R0b206IDgwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgei1pbmRleDogMTAyO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAuMTVzO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IC4xNXM7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gICAgLW1vei1mbGV4LXdyYXA6IHdyYXA7XG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLnBvcHVwLW1lbnUtaXRlbSB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMSAwIDMwJTtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxIDAgMzAlO1xuICAgICAgICAtbW96LWJveC1mbGV4OiAxIDAgMzAlO1xuICAgICAgICAtbW96LWZsZXg6IDEgMCAzMCU7XG4gICAgICAgIC1tcy1mbGV4OiAxIDAgMzAlO1xuICAgICAgICBmbGV4OiAxIDAgMzAlO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogLW1vei1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCBhdXRvIDA7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigyMjEsNjUsNTMpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xNXM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigyMjEsNjUsNTMpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xNXM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi5pbiB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgIC5wb3B1cC1tZW51LWl0ZW0ge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC4xNXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuMTVzO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/popmenu/popmenu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.ts ***!
  \*********************************************************/
/*! exports provided: PopmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopmenuComponent", function() { return PopmenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopmenuComponent = /** @class */ (function () {
    function PopmenuComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.openMenu = false;
    }
    PopmenuComponent.prototype.ngOnInit = function () {
    };
    PopmenuComponent.prototype.togglePopupMenu = function () {
        return this.openMenu = !this.openMenu;
    };
    PopmenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'popmenu',
            template: __webpack_require__(/*! ./popmenu.component.html */ "./src/app/components/popmenu/popmenu.component.html"),
            styles: [__webpack_require__(/*! ./popmenu.component.scss */ "./src/app/components/popmenu/popmenu.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], PopmenuComponent);
    return PopmenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-results/home-results.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.module.ts ***!
  \***********************************************************/
/*! exports provided: HomeResultsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResultsPageModule", function() { return HomeResultsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _components_popmenu_popmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/popmenu/popmenu.component */ "./src/app/components/popmenu/popmenu.component.ts");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _home_results_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-results.page */ "./src/app/pages/home-results/home-results.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _home_results_page__WEBPACK_IMPORTED_MODULE_8__["HomeResultsPage"]
    }
];
var HomeResultsPageModule = /** @class */ (function () {
    function HomeResultsPageModule() {
    }
    HomeResultsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
                _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_results_page__WEBPACK_IMPORTED_MODULE_8__["HomeResultsPage"], _components_popmenu_popmenu_component__WEBPACK_IMPORTED_MODULE_6__["PopmenuComponent"]]
        })
    ], HomeResultsPageModule);
    return HomeResultsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-text color=\"light\">\n          <ion-text color=\"light\" class=\"fw700\">DealTN</ion-text>\n        </ion-text>\n    </ion-title>\n    <!--<ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"notifications()\">\n        <ion-icon name=\"notifications\"></ion-icon>\n        <ion-badge color=\"dark\" slot=\"end\">2</ion-badge>\n      </ion-button>\n    </ion-buttons>-->\n  </ion-toolbar>\n  <ion-toolbar color=\"dark\">\n    <ion-searchbar [(ngModel)]=\"searchKey\" (keyup.enter)=search(searchKey)></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"searchFilter()\">\n        <ion-icon name=\"options\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding >\n <ion-button (click)=change() expand=\"full\">Tous Les promotions/promotions proches</ion-button>\n <div style=\"text-align:center;margin: 0 auto;\">\n <ion-text *ngIf=\"km=== 60\" ><strong>Les promotions proches</strong></ion-text>\n <ion-text *ngIf=\"km=== 1000\" ><strong>Toutes les promotions</strong></ion-text></div>\n  <ion-list>\n      <ion-item-sliding *ngFor=\"let promotion of promotion\">\n        <ion-item  *ngIf=\"((check(promotion.Longitude,promotion.Latitude)&& (searchKey === ''))||(searchKey != '' && promotion.name.includes(searchKey))); else seter() \">\n          <ion-card>  \n            <div   style=\"text-align: right;\" >\n            <ion-icon  (click)=\"test2(promotion._id,userDetails._id)\" name=\"{{tou(promotion._id,userDetails._id)}}\" style=\"color:red;\"slot=\"end\"></ion-icon></div>\n            <!--<div style=\"text-align: right;\" *ngIf=!isfav(promotion._id,userDetails._id)>\n              <ion-icon  (click)=\"test(promotion._id,userDetails._id)\" name=\"heart-empty\" style=\"color:red;\"slot=\"end\"></ion-icon></div>-->\n              <img src=\"{{promotion.img}}\"/>\n              <strong>{{distance(promotion.Longitude,promotion.Latitude)}} Km</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            \n              <ion-card-header>{{promotion.name}}</ion-card-header>\n              <ion-label><strong><span style=\"text-decoration: line-through; font-size: 22px;\n                font-weight: 700;\n                text-transform: uppercase;\n                display: inline-block;color :rgb(152, 151, 153)\">{{promotion.prixas}}<sup>DT</sup> </span>    <span style=\"color: #000000;font-size: 22px;\n                font-weight: 700;\n                text-transform: uppercase;\n                display: inline-block;\">&nbsp;&nbsp;&nbsp;{{promotion.prixas - (promotion.prixas/ 100)*promotion.reduction }}   <sup>DT</sup></span><span class=\"blink_me\">&nbsp;&nbsp;{{promotion.reduction}}% </span></strong></ion-label>\n                <!--{{partenaire.siteweb}}*/-->\n                <ion-button  color=\"secondary\" (click)=\"onOrderDelete(promotion._id)\">\n                    <ion-icon name=\"eye\" slot=\"start\"></ion-icon>\n                    <ion-label>Plus de detail</ion-label>\n                  </ion-button>\n          </ion-card>\n        </ion-item>\n      </ion-item-sliding>\n      <div *ngIf=\"error\"><strong>Aucune promotion trouvée</strong></div> \n    </ion-list>\n</ion-content>\n<!--<ion-content>\n  <ion-card no-margin class=\"no-radius\">\n    <ion-item lines=\"none\" color=\"medium\">\n      <ion-label>\n        <h2 no-margin class=\"fw500 no-margin\">\n          <ion-text color=\"dark\">Alert / Toast test</ion-text>\n        </h2>\n\n        <p class=\"text-11x no-margin\">\n          <ion-text  color=\"primary\">{{yourLocation}}</ion-text>\n        </p>\n      </ion-label>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\" color=\"primary\" (click)=\"alertLocation()\">\n        Location\n        <ion-icon name=\"locate\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-card>\n{{r}}\n  <ion-card class=\"bg-white\">\n    <ion-img [src]=\"themeCover\"></ion-img>\n    <ion-button expand=\"full\" color=\"dark\" (click)=\"presentImage(themeCover)\" no-margin>\n      Modal 1: Modal Image\n    </ion-button>\n  </ion-card>\n\n  <ion-button margin shape=\"round\" expand=\"full\" color=\"secondary\" (click)=\"searchFilter()\">\n    Modal 2: Search Filter\n  </ion-button>\n  \n  <popmenu></popmenu>\n</ion-content>-->\n  "

/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light); }\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium); }\n\n:host ion-card {\n  display: flex;\n  flex-direction: column;\n  width: 100% !important;\n  margin: 0 !important; }\n\n:host ion-card.no-radius {\n    border-radius: 0; }\n\n.blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n  color: #6302ff;\n  font-size: 28px;\n  font-weight: 700;\n  text-transform: uppercase;\n  display: inline-block; }\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0; } }\n\n@keyframes blinker {\n  50% {\n    opacity: 0; } }\n\nion-icon {\n  font-size: 30px;\n  color: #8cc8fa; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1yZXN1bHRzL0U6XFxkZWFsdG4vc3JjXFxhcHBcXHBhZ2VzXFxob21lLXJlc3VsdHNcXGhvbWUtcmVzdWx0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxvQ0FBYSxFQUFBOztBQUZyQjtFQU1RLGdCQUFnQjtFQUNoQixpREFBaUQsRUFBQTs7QUFQekQ7RUFjUSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixvQkFBb0IsRUFBQTs7QUFqQjVCO0lBWVksZ0JBQWdCLEVBQUE7O0FBUTVCO0VBQ0ksNkNBQXFDO1VBQXJDLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0U7SUFBTSxVQUFVLEVBQUEsRUFBQTs7QUFEbEI7RUFDRTtJQUFNLFVBQVUsRUFBQSxFQUFBOztBQUVwQjtFQUNBLGVBQWU7RUFDZixjQUNFLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lLXJlc3VsdHMvaG9tZS1yZXN1bHRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICB9XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQge1xuICAgICAgICAmLm5vLXJhZGl1cyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5ibGlua19tZSB7XG4gICAgYW5pbWF0aW9uOiBibGlua2VyIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBjb2xvcjogIzYzMDJmZjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBibGlua2VyIHsgIFxuICAgIDUwJSB7IG9wYWNpdHk6IDA7IH1cbiAgfVxuaW9uLWljb257XG5mb250LXNpemU6IDMwcHg7XG5jb2xvcjogIzhjYzhmYVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.ts ***!
  \*********************************************************/
/*! exports provided: HomeResultsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResultsPage", function() { return HomeResultsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/pages/user.service.ts");
/* harmony import */ var _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/modal/search-filter/search-filter.page */ "./src/app/pages/modal/search-filter/search-filter.page.ts");
/* harmony import */ var _modal_image_image_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../modal/image/image.page */ "./src/app/pages/modal/image/image.page.ts");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../components/notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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






// Modals


// Call notifications test by Popover and Custom Component.


var HomeResultsPage = /** @class */ (function () {
    function HomeResultsPage(http, navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl, geolocation, nativeGeocoder, user, router, changeDetectorRef) {
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
        this.changeDetectorRef = changeDetectorRef;
        this.km = 60;
        this.show = true;
        this.bouton = "heart-empty";
        this.error = false;
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Authorization': localStorage.getItem('jwtToken') })
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
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(this.lat, this.lng, options)
            .then(function (result) { return _this.city = JSON.stringify(result[0]); })
            .catch(function (error) { return console.log(error); });
    };
    HomeResultsPage.prototype.check = function (ln, la) {
        ln = parseFloat(ln);
        la = parseFloat(la);
        var p = 0.017453292519943295;
        var c = Math.cos;
        var a = 0.5 - c((la - this.lat) * p) / 2 + c(this.lat * p) * c((la) * p) * (1 - c(((ln - this.lng) * p))) / 2;
        var dis = (12742 * Math.asin(Math.sqrt(a)));
        if (dis < this.km)
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
    HomeResultsPage.prototype.searchFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_6__["SearchFilterPage"]
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
                            component: _modal_image_image_page__WEBPACK_IMPORTED_MODULE_7__["ImagePage"],
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
                            component: _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__["NotificationsComponent"],
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
        var _this = this;
        var obj = {
            proid: proid,
            userid: userid
        };
        console.log(obj);
        this.http.post(this.user.uri + "/addfav", obj).subscribe(function (res) {
            if (res == "erreur")
                _this.err();
            else
                _this.ngOnInit();
            ;
        }, function (err) {
            console.log("existe");
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
    HomeResultsPage.prototype.err = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Cette promotion est deja dans la liste favoris ',
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
    HomeResultsPage.prototype.suc = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Promotion ajoutée au favoris ❤️',
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
    HomeResultsPage.prototype.search = function (msg) { console.log(msg); };
    HomeResultsPage.prototype.test2 = function (idp, idu) {
        var _this = this;
        this.http.get(this.user.uri + "/getfav").subscribe(function (data) {
            _this.favoris = data;
            var found = false;
            for (var _i = 0, _a = _this.favoris; _i < _a.length; _i++) {
                var x = _a[_i];
                if (x.id_prom === idp && x.id_user === idu) {
                    found = true;
                }
            }
            if (found === true) {
                _this.bouton = "heart-empty";
                var id = void 0;
                for (var _b = 0, _c = _this.favoris; _b < _c.length; _b++) {
                    var x = _c[_b];
                    if (x.id_prom === idp && x.id_user === idu) {
                        id = x._id;
                    }
                }
                _this.http.delete(_this.user.uri + "/delfav/" + ("" + id)).subscribe(function (res) {
                }, function (err) {
                    _this.err();
                });
            }
            else {
                _this.bouton = "heart";
                var obj = {
                    proid: idp,
                    userid: idu
                };
                console.log(obj);
                _this.http.post(_this.user.uri + "/addfav", obj).subscribe(function (res) {
                    if (res == "erreur")
                        _this.err();
                    else
                        _this.ngOnInit();
                    ;
                }, function (err) {
                    console.log("existe");
                });
            }
            return true;
        }, function (err) {
            if (err.status === 401) {
                console.log("erreur");
            }
        });
        this.ngOnInit();
    };
    HomeResultsPage.prototype.tou = function (idp, idu) {
        var _this = this;
        console.log("test");
        var found;
        this.http.get(this.user.uri + "/getfav").subscribe(function (data) {
            _this.favoris = data;
        });
        for (var _i = 0, _a = this.favoris; _i < _a.length; _i++) {
            var y = _a[_i];
            if (y.id_prom === idp && y.id_user === idu) {
                found = true;
                console.log(idp, idu);
            }
            else {
                found = false;
            }
        }
        console.log(found);
        if (found != true) {
            return "heart-empty";
        }
        else {
            return "heart";
        }
    };
    HomeResultsPage.prototype.change = function () {
        if (this.km === 60) {
            this.km = 1000;
        }
        else {
            this.km = 60;
        }
    };
    HomeResultsPage.prototype.seter = function () {
        if (this.error === false) {
            this.error = true;
        }
        else {
            this.error = false;
        }
    };
    HomeResultsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-results',
            template: __webpack_require__(/*! ./home-results.page.html */ "./src/app/pages/home-results/home-results.page.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./home-results.page.scss */ "./src/app/pages/home-results/home-results.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"],
            _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], HomeResultsPage);
    return HomeResultsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-results-home-results-module.js.map