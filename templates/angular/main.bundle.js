webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n     <div class=\"container\">\n        <div class=\"row\">\n           <div class=\"col-md-5\">\n              <!-- Logo -->\n              <div class=\"logo\">\n                 <h1><a href=\"/dashboard\">Dashboard</a></h1>\n              </div>\n           </div>\n           <div class=\"col-md-5\">\n              <div class=\"row\">\n                <div class=\"col-lg-12\">\n                </div>\n              </div>\n           </div>\n           <div class=\"col-md-2\">\n              <div class=\"navbar navbar-inverse\" role=\"banner\">\n                  <nav class=\"collapse navbar-collapse bs-navbar-collapse navbar-right\" role=\"navigation\">\n                    <ul class=\"nav navbar-nav\">\n                   <li><a href=\"/logout\">Logout</a></li>\n                    </ul>\n                  </nav>\n              </div>\n           </div>\n        </div>\n     </div>\n</div>\n\n<div class=\"page-content\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <div class=\"sidebar content-box\" style=\"display: block;\">\n            <ul class=\"nav\">\n                <!-- Main menu -->\n                <li class=\"current\"><a routerLink=\"/dashboard\" routerLinkActive=\"active\"><i class=\"glyphicon glyphicon-home\"></i> Dashboard</a></li>\n                <li class=\"current\"><a routerLink=\"/dashboard/tables\"><i class=\"glyphicon glyphicon-list\"></i> Tables</a></li>\n            </ul>\n         </div>\n      </div>\n  <div class=\"col-md-8 col-md-offset-1\">\n    <div class=\"row\">\n        <router-outlet></router-outlet>\n\n    </div>\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_landing_landing_component__ = __webpack_require__("../../../../../src/app/components/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_tables_tables_component__ = __webpack_require__("../../../../../src/app/components/tables/tables.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 //importing the module
 //importing the module
 // <-- import the module
// import { OverlayModule } from "angular-io-overlay";
// import {DatePickerModule} from 'ng2-datepicker-bootstrap';
// import { NgDatepickerModule } from 'ng2-datepicker';










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_tables_tables_component__["a" /* TablesComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_router__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__["OrderModule"],
            // OverlayModule,
            __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_7_mydatepicker__["MyDatePickerModule"]
            // DatePickerModule,
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_15_angular2_cookie_services_cookies_service__["CookieService"],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

/*
Take note of the AppModule within app.module.ts. This is used to bootstrap the Angular app.
The @NgModule decorator takes metadata that lets Angular know how to run the app.
Everything that we create in this tutorial will be added to this object.
 */
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_tables_tables_component__ = __webpack_require__("../../../../../src/app/components/tables/tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BASE_URL = 'dashboard';
var appRoutes = [
    {
        path: BASE_URL,
        component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
    },
    {
        path: BASE_URL + '/tables',
        component: __WEBPACK_IMPORTED_MODULE_2__components_tables_tables_component__["a" /* TablesComponent */],
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"content-box-large\">\n        <div class=\"panel-heading\">\n            <div class=\"panel-title\">Add New Product</div>\n            <!-- {{diagnostic}} -->\n        </div>\n        <div class=\"panel-body\">\n            <form class=\"form-horizontal\" (ngSubmit)=\"NewProduct()\" role=\"form\" #ProductForm=\"ngForm\">\n              <div class=\"form-group\">\n                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Name</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"product.name\" placeholder=\"Name\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Company</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text\" class=\"form-control\" name=\"company\" [(ngModel)]=\"product.company\" placeholder=\"Company\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Batch No.</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text\" class=\"form-control\" name=\"batch\" [(ngModel)]=\"product.batch\" placeholder=\"Batch No\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Trader</label>\n                <div class=\"col-sm-10\">\n                  <textarea class=\"form-control\" [(ngModel)]=\"product.trader\" name=\"trader\" placeholder=\"Textarea\" rows=\"3\"></textarea>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Price Rate</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"number\" class=\"form-control\"name=\"price_rate\" [(ngModel)]=\"product.price\" placeholder=\"Price Rate\">\n\n                </div>\n              </div>\n              <div class=\"form-group\">\n                  <label class=\"col-sm-2 control-label\">Date</label>\n                  <div class=\"col-sm-10\" >\n                        <!-- <input type=\"date\"  name=\"date\" class=\"form-control\" [(ngModel)]=\"product.date\"> -->\n                        <my-date-picker name=\"date\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"product.date\" required></my-date-picker>\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-sm-offset-2 col-sm-10\">\n                  <button type=\"submit\" class=\"btn btn-primary\" >{{button}}</button>\n                </div>\n              </div>\n            </form>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product__ = __webpack_require__("../../../../../src/app/models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(service) {
        this.service = service;
        this.product = new __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* Product */](null, null, null, null, null, null);
        this.myDatePickerOptions = {
            dateFormat: 'yyyy-mm-dd',
            showTodayBtn: true,
        };
        this.button = "Add";
        this.date = 'asdf';
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.NewProduct = function () {
        this.button = "Adding..";
        this.product.date = this.product.date['formatted'];
        console.log(this.product);
        this.service.addProduct(this.product)
            .then(function (data) {
            console.log(data);
        });
        this.button = "Added";
    };
    Object.defineProperty(DashboardComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.product); },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.onChange = function (event) {
        console.log(event);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"container\">\n\t\t<div class=\"jumbotron\">\n\t\t\t<div style=\"text-align: center\">\n\t\t\t\t<h1>Welcome To Djangular</h1>\n\t\t\t<br>\n\t\t\t<a routerLink=\"login\"  class=\"btn btn-info\"> Login </a>\n\t\t\t<a routerLink=\"register\"  class=\"btn btn-info\"> Register </a>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
        console.log('landing page');
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/components/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container\">    \n        <div id=\"loginbox\" style=\"margin-top:50px;\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n            <div class=\"panel panel-info\" >\n                    <div class=\"panel-heading\">\n                        <div class=\"panel-title\">Sign In</div>\n                    </div>     \n                    <div style=\"padding-top:30px\" class=\"panel-body\" >\n                    {{diagnostic}}\n                        <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\n                           \n                        <form id=\"loginform\" class=\"form-horizontal\" role=\"form\" (ngSubmit)=\"LoginUser()\" #LoginForm=\"ngForm\">\n                                    \n                            <div style=\"margin-bottom: 25px\" class=\"input-group\">\n                              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                              <input id=\"login-username\" type=\"text\" required=\"true\" [(ngModel)]=\"user.username\" class=\"form-control\" type=\"text\" name=\"username\" value=\"\" placeholder=\"username or email\">                                        \n                            </div>\n                            <div style=\"margin-bottom: 25px\" class=\"input-group\">\n                                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n                                <input id=\"login-password\" type=\"password\" required=\"true\" [(ngModel)]=\"user.password\" class=\"form-control\" name=\"password\" placeholder=\"password\">\n                            </div>    \n                            <div class=\"input-group\">\n                              <div class=\"checkbox\">\n\t                            <label>\n\t                              <input id=\"login-remember\" type=\"checkbox\" name=\"remember\" value=\"1\"> Remember me\n\t                            </label>\n\t                          </div>\n\t                        </div>\n                          <div style=\"margin-top:10px\" class=\"form-group\">\n                              <div class=\"col-sm-12 controls\">\n                                <button id=\"btn-login\" type=\"submit\" class=\"btn btn-success\">Login  </button>\n                              </div>\n                          </div>\n                          <div class=\"form-group\">\n                              <div class=\"col-md-12 control\">\n                                  <div style=\"border-top: 1px solid#888; padding-top:15px; font-size:85%\" >\n                                      Don't have an account! \n                                  <a routerLink=\"/register\">\n                                      Sign Up Here\n                                  </a>\n                                  </div>\n                              </div>\n                          </div>    \n                            </form>     \n\n\n\n                        </div>                     \n                    </div>  \n        </div>\n\n    </div>\n    "

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(auth, cookieservice) {
        this.auth = auth;
        this.cookieservice = cookieservice;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */](null, null, null);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.LoginUser = function () {
        var _this = this;
        console.log("login user");
        this.auth.login(this.user)
            .then(function (data) {
            console.log(data);
            if (data.status == 200) {
                if (data.json()['status'] == 'success') {
                    _this.cookieservice.put('token', data.json()['token']);
                }
                else {
                    console.log('Invalid Credentials');
                }
            }
            else {
                console.log("Some error occured");
            }
        });
    };
    Object.defineProperty(LoginComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.user); },
        enumerable: true,
        configurable: true
    });
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
/* In Angular 4, we define a component by wrapping a config object with an @Component
 decorator. We can share code between packages by importing the classes we need; and,
 in this case, we import Component from the @angular/core package. The LoginComponent
 class is the component’s controller, and we use the export operator to make it available
 for other classes to import. */ 
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div id=\"signupbox\" style=\"margin-top:50px\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n      <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">\n              <div class=\"panel-title\">Sign Up\n              <a class=\"pull-right\" style=\"text-decoration: none\" id=\"signinlink\" routerLink=\"/login\">Sign In</a>\n              </div>\n{{diagnostic}}\n          </div>  \n          <div class=\"panel-body\" >\n              <form id=\"signupform\" class=\"form-horizontal\" role=\"form\">\n                  <div id=\"signupalert\" style=\"display:none\" class=\"alert alert-danger\">\n                      <p>Error:</p>\n                      <span></span>\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"email\" class=\"col-md-3 control-label\">Email</label>\n                      <div class=\"col-md-9\">\n                          <input type=\"text\" [(ngModel)]=\"user.username\" class=\"form-control\" name=\"username\" placeholder=\"Username\">\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"email\" class=\"col-md-3 control-label\">Email</label>\n                      <div class=\"col-md-9\">\n                          <input type=\"email\" [(ngModel)]=\"user.email\" class=\"form-control\" name=\"email\" placeholder=\"Email Address\">\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"password\" class=\"col-md-3 control-label\">Password</label>\n                      <div class=\"col-md-9\">\n                          <input type=\"password\" [(ngModel)]=\"user.password\" class=\"form-control\" name=\"passwd\" placeholder=\"Password\">\n                      </div>\n                  </div>\n                  <div class=\"form-group\">                                     \n                      <div class=\"col-md-offset-3 col-md-9\">\n                          <button id=\"btn-signup\" type=\"button\" class=\"btn btn-info\"><i class=\"icon-hand-right\"></i> Sign Up</button>\n                      </div>\n                  </div>    \n              </form>\n           </div>\n      </div>\n   </div> \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = (function () {
    function RegisterComponent() {
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */](null, null, null);
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(RegisterComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.user); },
        enumerable: true,
        configurable: true
    });
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/tables.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/tables.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"search\" name=\"search\" [(ngModel)]=\"filter\">\n</nav>\n<table class=\"table table-bordered table-hover\">\n  <thead>\n    <tr>\n      <th (click)=\"sort('date')\">Date\n          <span class=\"glyphicon sort-icon\" *ngIf=\"key =='date'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('name')\">Name\n          <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('company')\">Company\n          <span class=\"glyphicon sort-icon\" *ngIf=\"key =='company'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('trader')\">Trader\n          <span class=\"glyphicon sort-icon\" *ngIf=\"key =='trader'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('price')\">Price\n          <span class=\"glyphicon sort-icon\" *ngIf=\"key =='price'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n      <th (click)=\"sort('batch')\">Batch\n          <span class=\"glyphicon sort-icon\" *ngIf=\"key =='batch'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let product of products | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage:10, currentPage: p }; let i = index\">\n      <td>{{product.date}}</td>\n      <td>{{product.name}}</td>\n      <td>{{product.company}}</td>\n      <td>{{product.trader}}</td>\n      <td>{{product.price}}</td>\n      <td>{{product.batch}}</td>\n\n\n    </tr>\n  </tbody>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/tables/tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TablesComponent = (function () {
    function TablesComponent(service) {
        this.service = service;
        this.key = 'name'; //set default
        this.reverse = false;
        this.p = 1;
    }
    TablesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getProducts()
            .then(function (data) {
            console.log(data.json());
            _this.products = data.json();
        });
    };
    TablesComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    return TablesComponent;
}());
TablesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tables',
        template: __webpack_require__("../../../../../src/app/components/tables/tables.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tables/tables.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], TablesComponent);

var _a;
//# sourceMappingURL=tables.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product(name, company, trader, price, date, batch) {
        this.name = name;
        this.company = company;
        this.trader = trader;
        this.price = price;
        this.date = date;
        this.batch = batch;
    }
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username, password, email) {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, cookieservice) {
        this.http = http;
        this.cookieservice = cookieservice;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'content-type': 'application/json',
            'X-CSRFToken': this.cookieservice.get('csrftoken')
        });
    }
    AuthService.prototype.login = function (user) {
        var url = '/api-login-user/';
        console.log(document.cookie['csrftoken']);
        return this.http.post(url, user, { headers: this.headers }).toPromise();
    };
    AuthService.prototype.register = function (user) {
        var url = '/api-register-user/';
        return this.http.post(url, user, { headers: this.headers }).toPromise();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//http://www.pybloggers.com/2017/08/user-authentication-with-angular-4-and-flask/ 
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = (function () {
    function ProductService(http, cookieservice) {
        this.http = http;
        this.cookieservice = cookieservice;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'content-type': 'application/json',
            'X-CSRFToken': this.cookieservice.get('csrftoken')
        });
    }
    ProductService.prototype.getProducts = function () {
        var url = '/api/products/';
        return this.http.get(url, { headers: this.headers }).toPromise();
    };
    ProductService.prototype.addProduct = function (product) {
        var url = '/api/products/';
        return this.http.post(url, product, { headers: this.headers }).toPromise();
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]) === "function" && _b || Object])
], ProductService);

var _a, _b;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map