webpackJsonp([0],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page2__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Module = (function () {
    function Module() {
    }
    return Module;
}());
Module = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__page2__["a" /* Page2Page */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page2__["a" /* Page2Page */])
        ]
    })
], Module);

//# sourceMappingURL=page2.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page2Page = (function () {
    function Page2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return Page2Page;
}());
Page2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-page2',template:/*ion-inline-start:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/page2/page2.html"*/'<ion-content padding>\n  <h1>\n    This is the second page\n  </h1>\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et iaculis mauris. Nunc blandit viverra enim vehicula efficitur. Sed neque neque, tempus ac molestie non, blandit ut eros. Cras vulputate id nunc eget efficitur. Maecenas a dictum orci. Nullam sodales et est in euismod. Ut eget nibh consequat, molestie metus in, tristique lacus. Phasellus a elementum lectus. Morbi cursus mauris dapibus odio convallis convallis. Nulla et nisi nec augue consectetur rhoncus. Ut in tellus sit amet eros bibendum placerat ut a mi.\n  </p>\n  <p>\n    Quisque sagittis et nunc id dapibus. Curabitur placerat nec sem id hendrerit. Mauris tempus ante ac ante semper, non semper lacus maximus. Mauris in sem eros. Cras interdum nisl mollis magna lacinia, vitae vehicula enim ornare. Curabitur et lectus vel dolor venenatis pulvinar. Nullam malesuada vitae turpis at cursus.\n  </p>\n  <p>\n    Quisque turpis nisl, semper vel scelerisque sit amet, accumsan eu tellus. Maecenas non justo interdum, bibendum nisi eget, egestas enim. Aliquam suscipit ultrices magna, porttitor dapibus ipsum rhoncus at. Vivamus consectetur tortor a accumsan finibus. Aenean eleifend a tortor non porta. Sed iaculis eros sed lorem lacinia, ac imperdiet nisl molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nullam finibus condimentum eleifend. Pellentesque vel sapien et sem posuere ornare eu ac leo.\n  </p>\n  <p>\n    Praesent non ullamcorper turpis. Praesent eleifend est eget iaculis lobortis. Fusce elementum arcu lacus. Cras sed erat convallis, euismod augue at, euismod nisi. Morbi ac ligula rhoncus, venenatis sem et, posuere dui. Vivamus porta viverra massa, elementum vehicula diam euismod sed. Curabitur euismod justo magna, dapibus gravida est cursus sed. Ut nec blandit purus. Phasellus a auctor nibh.\n  </p>\n  <p>\n    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut faucibus mauris et sapien fermentum vehicula. Cras consectetur, nisi vel elementum viverra, turpis nibh tempor lacus, sit amet faucibus mi ex lobortis tellus. Aenean lobortis, augue et laoreet vehicula, arcu massa molestie mauris, vitae ullamcorper enim tortor vel ligula. Suspendisse quis facilisis leo, nec tempus tortor. Sed quis faucibus nisi. Cras molestie ornare aliquam. Integer faucibus commodo mauris a tempor. Aliquam rhoncus magna vulputate erat posuere sagittis. Vivamus tincidunt finibus ante quis condimentum. Vestibulum eget elit sed sapien suscipit aliquam ut nec ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut eget erat turpis. Nunc vitae maximus augue, et lacinia sapien.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/page2/page2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], Page2Page);

//# sourceMappingURL=page2.js.map

/***/ })

});
//# sourceMappingURL=0.js.map