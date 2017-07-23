webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__text_joke_text_joke__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__photo_joke_photo_joke__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_joke_video_joke__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mine_mine__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.textJoke = __WEBPACK_IMPORTED_MODULE_1__text_joke_text_joke__["a" /* TextJokePage */];
        this.photoJoke = __WEBPACK_IMPORTED_MODULE_2__photo_joke_photo_joke__["a" /* PhotoJokePage */];
        this.videoJoke = __WEBPACK_IMPORTED_MODULE_3__video_joke_video_joke__["a" /* VideoJokePage */];
        this.mine = __WEBPACK_IMPORTED_MODULE_4__mine_mine__["a" /* MinePage */];
        console.log(this);
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="textJoke" tabTitle="段子" tabIcon="home" tabBadgeStyle="danger"></ion-tab>\n    <ion-tab [root]="photoJoke" tabTitle="图片" tabIcon="images"></ion-tab>\n    <ion-tab [root]="videoJoke" tabTitle="视频" tabIcon="videocam"></ion-tab>\n    <ion-tab [root]="mine" tabTitle="我的" tabIcon="person"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextJokePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__joke_detail_joke_detail__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextJokePage = (function () {
    function TextJokePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.pet = "new";
        this.hotDatas = [];
        this.newDatas = [];
        this.hotDatas = [{
                name: 'hot-zhangsan',
                age: 12
            }, {
                name: 'hot-zhangsan1',
                age: 12
            }, {
                name: 'hot-zhangsan2',
                age: 12
            }, {
                name: 'hot-zhangsan3',
                age: 12
            }, {
                name: 'hot-zhangsan4',
                age: 12
            }, {
                name: 'hot-zhangsan5',
                age: 12
            }, {
                name: 'hot-zhangsan6',
                age: 12
            }];
        this.newDatas = [{
                name: 'new-zhangsan',
                age: 12
            }, {
                name: 'new-zhangsan1',
                age: 12
            }, {
                name: 'new-zhangsan2',
                age: 12
            }, {
                name: 'new-zhangsan3',
                age: 12
            }, {
                name: 'new-zhangsan4',
                age: 12
            }, {
                name: 'new-zhangsan5',
                age: 12
            }, {
                name: 'new-zhangsan6',
                age: 12
            }];
        for (var _i = 0, _a = this.hotDatas; _i < _a.length; _i++) {
            var data = _a[_i];
            console.log(data.name);
        }
    }
    TextJokePage.prototype.goToOtherPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__joke_detail_joke_detail__["a" /* JokeDetailPage */]);
    };
    return TextJokePage;
}());
TextJokePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-text_joke',template:/*ion-inline-start:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/text_joke/text_joke.html"*/'<ion-header>\n    <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button class="joke-segment" value="new">\n        <div class="top-item">\n          <img class="bg" src="{{pet == \'new\' ? \'assets/images/ic_new_click.png\':\'assets/images/ic_new_normal.png\'}}" alt="">\n          <span class="text">最新</span>\n        </div>\n      </ion-segment-button>\n      <ion-segment-button class="joke-segment" value="hot">\n        <div class="top-item">\n          <img  class="bg" src="{{pet == \'hot\' ? \'assets/images/ic_hot_click.png\':\'assets/images/ic_hot_normal.png\'}}" alt="">\n          <span class="text">最热</span>\n        </div>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  <img class="header-bg" src="assets/images/bg_common_top.png" alt="">\n</ion-header>\n<ion-content>\n    This is Text Joke content!!!\n    <div [ngSwitch]="pet">\n        <ion-list *ngSwitchCase="\'new\'">\n          <ion-item  *ngFor="let item of newDatas; let i = index">\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-kitten-1.jpg">\n            </ion-thumbnail>\n            <h2>{{item.name}}</h2>\n          </ion-item>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'hot\'">\n          <ion-item *ngFor="let item of hotDatas; let i = index">\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-kitten-1.jpg">\n            </ion-thumbnail>\n            <h2>{{item.name}}</h2>\n          </ion-item>\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/text_joke/text_joke.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], TextJokePage);

//# sourceMappingURL=text_joke.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JokeDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JokeDetailPage = (function () {
    function JokeDetailPage() {
    }
    return JokeDetailPage;
}());
JokeDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-joke_detail',template:/*ion-inline-start:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/joke_detail/joke_detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            joke detail\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <p>\n        this is joke detail\n    </p>\n</ion-content>'/*ion-inline-end:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/joke_detail/joke_detail.html"*/
    })
], JokeDetailPage);

//# sourceMappingURL=joke_detail.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoJokePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoJokePage = (function () {
    function PhotoJokePage() {
        this.pet = "new";
    }
    return PhotoJokePage;
}());
PhotoJokePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-photo_joke',template:/*ion-inline-start:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/photo_joke/photo_joke.html"*/'<ion-header>\n    <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button class="joke-segment" value="new">\n        <div class="top-item">\n          <img class="bg" src="{{pet == \'new\' ? \'assets/images/ic_new_click.png\':\'assets/images/ic_new_normal.png\'}}" alt="">\n          <span class="text">最新</span>\n        </div>\n      </ion-segment-button>\n      <ion-segment-button class="joke-segment" value="hot">\n        <div class="top-item">\n          <img  class="bg" src="{{pet == \'hot\' ? \'assets/images/ic_hot_click.png\':\'assets/images/ic_hot_normal.png\'}}" alt="">\n          <span class="text">最热</span>\n        </div>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  <img class="header-bg" src="assets/images/bg_common_top.png" alt="">\n</ion-header>\n<ion-content>\n    <h1>photo joke</h1>\n</ion-content>'/*ion-inline-end:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/photo_joke/photo_joke.html"*/
    }),
    __metadata("design:paramtypes", [])
], PhotoJokePage);

//# sourceMappingURL=photo_joke.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoJokePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VideoJokePage = (function () {
    function VideoJokePage() {
        this.pet = "new";
    }
    return VideoJokePage;
}());
VideoJokePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-video_joke',template:/*ion-inline-start:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/video_joke/video_joke.html"*/'<ion-header>\n    <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button class="joke-segment" value="new">\n        <div class="top-item">\n          <img class="bg" src="{{pet == \'new\' ? \'assets/images/ic_new_click.png\':\'assets/images/ic_new_normal.png\'}}" alt="">\n          <span class="text">最新</span>\n        </div>\n      </ion-segment-button>\n      <ion-segment-button class="joke-segment" value="hot">\n        <div class="top-item">\n          <img  class="bg" src="{{pet == \'hot\' ? \'assets/images/ic_hot_click.png\':\'assets/images/ic_hot_normal.png\'}}" alt="">\n          <span class="text">最热</span>\n        </div>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  <img class="header-bg" src="assets/images/bg_common_top.png" alt="">\n</ion-header>\n<ion-content>\n    <h1>\n        this is video joke page!!!!\n    </h1>\n</ion-content>'/*ion-inline-end:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/video_joke/video_joke.html"*/
    })
], VideoJokePage);

//# sourceMappingURL=video_joke.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MinePage = (function () {
    function MinePage() {
    }
    return MinePage;
}());
MinePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mine',template:/*ion-inline-start:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/mine/mine.html"*/'<ion-header class="header">\n    <img class="header-bg" src="assets/images/bg_common_top.png" alt="">\n    <ion-navbar class="navbar">\n        <ion-title>\n           我的\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <h1 class="toolbar-title">\n        this is mine page!!!!\n    </h1>\n    <ion-list>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n    <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n    <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n    <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n    <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n    <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n    <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n    <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n    <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n    <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n    <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n    <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n    <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n    <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/mine/mine.html"*/
    })
], MinePage);

//# sourceMappingURL=mine.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_text_joke_text_joke__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_photo_joke_photo_joke__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_video_joke_video_joke__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_mine_mine__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_joke_detail_joke_detail__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_text_joke_text_joke__["a" /* TextJokePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_photo_joke_photo_joke__["a" /* PhotoJokePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_video_joke_video_joke__["a" /* VideoJokePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_mine_mine__["a" /* MinePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_joke_detail_joke_detail__["a" /* JokeDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                tabsHideOnSubPages: true,
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */],],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_text_joke_text_joke__["a" /* TextJokePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_photo_joke_photo_joke__["a" /* PhotoJokePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_video_joke_video_joke__["a" /* VideoJokePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_mine_mine__["a" /* MinePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_joke_detail_joke_detail__["a" /* JokeDetailPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map