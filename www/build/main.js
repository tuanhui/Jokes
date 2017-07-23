webpackJsonp([2],{

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

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/page1/page1.module": [
		269,
		1
	],
	"../pages/page2/page2.module": [
		270,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 148;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__text_joke_text_joke__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__photo_joke_photo_joke__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_joke_video_joke__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mine_mine__ = __webpack_require__(198);
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
        // tabs:any = TabJokePage;
        this.textJoke = __WEBPACK_IMPORTED_MODULE_1__text_joke_text_joke__["a" /* TextJokePage */];
        this.photoJoke = __WEBPACK_IMPORTED_MODULE_2__photo_joke_photo_joke__["a" /* PhotoJokePage */];
        this.videoJoke = __WEBPACK_IMPORTED_MODULE_3__video_joke_video_joke__["a" /* VideoJokePage */];
        this.mine = __WEBPACK_IMPORTED_MODULE_4__mine_mine__["a" /* MinePage */];
        console.log(this);
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="textJoke" tabTitle="段子" tabIcon="home" tabBadgeStyle="danger"></ion-tab>\n    <ion-tab [root]="photoJoke" tabTitle="图片" tabIcon="images"></ion-tab>\n    <ion-tab [root]="videoJoke" tabTitle="视频" tabIcon="videocam"></ion-tab>\n    <ion-tab [root]="mine" tabTitle="我的" tabIcon="person"></ion-tab>\n</ion-tabs> '/*ion-inline-end:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextJokePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Http } from '@angular/http';

var TextJokePage = (function () {
    function TextJokePage(loadingCtrl, api, navCtrl) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.navCtrl = navCtrl;
        this.pet = "new";
        this.hotJokes = [];
        this.newJokes = [];
        this.items = [];
        this.mPageSize = 20;
        this.loadFinished = { "new": true, "hot": true };
        api.getTextNewJokes(1, this.mPageSize).then(function (res) {
            _this.newJokes = res["data"];
        });
    }
    ;
    TextJokePage.prototype.ngAfterViewInit = function () {
        console.log("init --start");
        console.log("init --end");
        this.mScrollBar = document.querySelector("div.scroll-content");
        this.mScrollPos = { "new": 0, "hot": 0 };
        this.mScrollBar.addEventListener('scroll', this.onScroll.bind(this));
        this.mPages = { "new": 1, "hot": 1 };
    };
    TextJokePage.prototype.onScroll = function (event) {
        this.mScrollPos[this.pet] = this.mScrollBar.scrollTop;
    };
    TextJokePage.prototype.segmentChanged = function (event) {
        this.mScrollBar.scrollTop = this.mScrollPos[event.value];
    };
    //刷新
    TextJokePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    //加载更多
    TextJokePage.prototype.doInfinite = function (infiniteScroll) {
        console.log('Begin async operation');
        setTimeout(function () {
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    return TextJokePage;
}());
TextJokePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-text_joke',template:/*ion-inline-start:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/text_joke/text_joke.html"*/'<ion-header>\n    <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="pet" (ionChange)="segmentChanged($event)">\n      <ion-segment-button class="joke-segment" value="new">\n        <div class="top-item">\n          <img class="bg" src="{{pet == \'new\' ? \'assets/images/ic_new_click.png\':\'assets/images/ic_new_normal.png\'}}" alt="">\n          <span class="text">最新</span>\n        </div>\n      </ion-segment-button>\n      <ion-segment-button class="joke-segment" value="hot">\n        <div class="top-item">\n          <img  class="bg" src="{{pet == \'hot\' ? \'assets/images/ic_hot_click.png\':\'assets/images/ic_hot_normal.png\'}}" alt="">\n          <span class="text">最热</span>\n        </div>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  <img class="header-bg" src="assets/images/bg_common_top.png" alt="">\n</ion-header>\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="Pull to refresh"\n            refreshingSpinner="circles"\n            refreshingText="Refreshing...">\n    </ion-refresher-content>\n    </ion-refresher>\n    <div [ngSwitch]="pet">\n        <div *ngSwitchCase="\'new\'">\n            <ion-list class="joke-list" no-lines>\n                <ion-item *ngFor="let item of newJokes" class="joke-item" text-wrap>\n                    <div class="joke-item-container">\n                        <div class="user">\n                        <img class="avatar" src="{{item.user.avatar}}">  \n                        <span class="nickname">{{item.user.nickname}}</span>  \n                        <span class="time">{{item.create_time}}</span>  \n                        </div>\n                        <p class="content">\n                            {{item.content}}\n                        </p>\n                        <div class="operate">\n                            <ion-icon name="star"></ion-icon>\n                            <ion-icon name="star"></ion-icon>\n                            <ion-icon name="star"></ion-icon>\n                            <ion-icon name="star"></ion-icon>\n                        </div>\n                    </div>\n                    <img src="assets/images/bg_common_bottom.png" alt="">\n                </ion-item>\n            </ion-list>\n            <div class="loading" *ngIf="newJokes.length == 0">\n                <ion-spinner name="circles" duration="1000"></ion-spinner>\n                正在加载 ...\n            </div>\n        </div>\n        <div *ngSwitchCase="\'hot\'">\n            <ion-list>\n                <ion-item *ngFor="let item of hotJokes" class="joke-item">\n                </ion-item>\n            </ion-list>\n            <div class="loading" *ngIf="hotJokes.length == 0">\n                <ion-spinner name="circles" duration="1000"></ion-spinner>\n                正在加载 ...\n            </div>\n        </div>\n    </div>\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="! loadFinished[pet]">\n        <ion-infinite-scroll-content\n            loadingSpinner="circles"\n            loadingText="Loading more data...">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <div class="finished" *ngIf="loadFinished[pet]">\n        <span class="line left"></span>\n        <span class="txt">已加载完毕</span>\n        <span class="line right"></span>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/text_joke/text_joke.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], TextJokePage);

//# sourceMappingURL=text_joke.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ApiServiceProvider = (function () {
    function ApiServiceProvider(http) {
        this.http = http;
        console.log('Hello ApiServiceProvider Provider');
    }
    //获取最新段子
    ApiServiceProvider.prototype.getTextNewJokes = function (page, pagesize) {
        var _this = this;
        return new Promise(function (resolve) {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            _this.http.get('assets/new_joke_list.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    //获取最热段子
    ApiServiceProvider.prototype.getTextHotJokes = function (page, pagesize) {
        var _this = this;
        return new Promise(function (resolve) {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            _this.http.get('assets/hot_joke_list.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    ApiServiceProvider.prototype.load = function () {
        var _this = this;
        if (this.data) {
            // already loaded data
            return Promise.resolve(this.data);
        }
        // don't have the data yet
        return new Promise(function (resolve) {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            _this.http.get('assets/joke_list.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    return ApiServiceProvider;
}());
ApiServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ApiServiceProvider);

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 196:
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

/***/ 197:
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

/***/ 198:
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MinePage = (function () {
    function MinePage() {
        this.datas = [];
        this.slides = [
            {
                title: "Welcome to the Docs!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "assets/img/ica-slidebox-img-1.png",
            },
            {
                title: "What is Ionic?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/img/ica-slidebox-img-2.png",
            },
            {
                title: "What is Ionic Cloud?",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/img/ica-slidebox-img-3.png",
            }
        ];
        for (var i = 0; i < 30; i++) {
            this.datas.push(this.datas.length);
        }
    }
    return MinePage;
}());
MinePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/mine/mine.html"*/'<ion-header class="header">\n    <img class="header-bg" src="assets/images/bg_common_top.png" alt="">\n    <ion-navbar class="navbar">\n        <ion-title>\n           我的\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content class="tutorial-page">\n  <ion-slides pager>\n    <ion-slide>\n      <ion-list>\n          <ion-item *ngFor="let i of datas">{{i}}</ion-item>\n      </ion-list>\n    </ion-slide>\n    <ion-slide>\n      <ion-list>\n          <ion-item *ngFor="let i of datas">{{i}}</ion-item>\n      </ion-list>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/pages/mine/mine.html"*/
    }),
    __metadata("design:paramtypes", [])
], MinePage);

//# sourceMappingURL=mine.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_text_joke_text_joke__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_photo_joke_photo_joke__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_video_joke_video_joke__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mine_mine__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_joke_detail_joke_detail__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_api_service_api_service__ = __webpack_require__(195);
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
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_text_joke_text_joke__["a" /* TextJokePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_photo_joke_photo_joke__["a" /* PhotoJokePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_video_joke_video_joke__["a" /* VideoJokePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_mine_mine__["a" /* MinePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_joke_detail_joke_detail__["a" /* JokeDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                tabsHideOnSubPages: true,
            }, {
                links: [
                    { loadChildren: '../pages/page1/page1.module#Module', name: 'Page1Page', segment: 'page1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/page2/page2.module#Module', name: 'Page2Page', segment: 'page2', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */],],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_text_joke_text_joke__["a" /* TextJokePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_photo_joke_photo_joke__["a" /* PhotoJokePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_video_joke_video_joke__["a" /* VideoJokePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_mine_mine__["a" /* MinePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_joke_detail_joke_detail__["a" /* JokeDetailPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_13__providers_api_service_api_service__["a" /* ApiServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/chentuanhui/Desktop/项目/ionic/Joke/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 268:
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

/***/ })

},[199]);
//# sourceMappingURL=main.js.map