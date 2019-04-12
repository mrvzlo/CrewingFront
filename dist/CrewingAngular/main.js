(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/account.component.scss":
/*!************************************************!*\
  !*** ./src/app/account/account.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/account/account.component.scss")]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;


/***/ }),

/***/ "./src/app/account/account.service.ts":
/*!********************************************!*\
  !*** ./src/app/account/account.service.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var serverurl_1 = __webpack_require__(/*! ../serverurl */ "./src/app/serverurl.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var AccountService = /** @class */ (function () {
    function AccountService(http, router) {
        this.http = http;
        this.router = router;
    }
    AccountService.prototype.signUp = function (model) {
        var url = serverurl_1.serverurl + "Account/SignUp";
        return this.http.post(url, model);
    };
    AccountService.prototype.signIn = function (model) {
        var url = serverurl_1.serverurl + "Account/SignIn";
        return this.http.post(url, model);
    };
    AccountService.prototype.loggedIn = function () {
        return !!this.getToken();
    };
    AccountService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AccountService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['home']);
    };
    AccountService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;


/***/ }),

/***/ "./src/app/account/sign-in/sign-in.component.html":
/*!********************************************************!*\
  !*** ./src/app/account/sign-in/sign-in.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-account></app-account>\n\n<div id=\"_SignIn\" class=\"tab-pane active\" role=\"tabpanel\">\n  <h4 class=\"text-center mb-3\">Registered user</h4>\n  <div class=\"row my-2 justify-content-around\">\n      <div class=\"error col-12\">{{errors.Sum}}</div>\n  </div>\n\n  <div class=\"row my-2 justify-content-around\">\n      <div class=\"col-md-2 text-center\">Email</div>\n      <div class=\"col-md-9\"><input type=\"text\" [(ngModel)]=\"model.Email\" id=\"email\" name=\"email\" autocomplete=\"email\"/></div>\n      <div class=\"error col-12\">{{errors.Email}}</div>\n  </div>\n  <div class=\"row my-2 justify-content-around\">\n      <div class=\"col-md-2 text-center\">Password</div>\n      <div class=\"col-md-9\"><input type=\"password\" [(ngModel)]=\"model.Password\" id=\"password\" name=\"password\" autocomplete=\"password\"/></div>\n      <div class=\"error col-12\">{{errors.Password}}</div>\n  </div>\n  <div class=\"row justify-content-center\">\n      <input type=\"submit\" class=\"col-md-2 col-4 btn btn-main py-2\" (click)=\"signIn()\" value=\"Sign in\"/>\n  </div>\n  <div class=\"row justify-content-end\">\n      <a routerLink=\"../signup\">Create an account</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/account/sign-in/sign-in.component.scss":
/*!********************************************************!*\
  !*** ./src/app/account/sign-in/sign-in.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/account/sign-in/sign-in.component.ts":
/*!******************************************************!*\
  !*** ./src/app/account/sign-in/sign-in.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var sign_in_model_1 = __webpack_require__(/*! ./sign-in.model */ "./src/app/account/sign-in/sign-in.model.ts");
var account_service_1 = __webpack_require__(/*! ../account.service */ "./src/app/account/account.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var SignInComponent = /** @class */ (function () {
    function SignInComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.model = new sign_in_model_1.SignIn;
        this.errors = {
            Email: "",
            Password: "",
            Sum: "",
        };
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.signIn = function () {
        var _this = this;
        this.accountService.signIn(this.model).subscribe(function (res) {
            if (res.success) {
                localStorage.setItem('token', res.token);
                localStorage.setItem('role', res.role);
                _this.router.navigate(["group"]);
            }
            else {
                _this.errors.Email = res.result.Errors.Email;
                _this.errors.Password = res.result.Errors.Password;
                _this.errors.Sum = res.result.Errors.Sum;
            }
        });
    };
    SignInComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/account/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/account/sign-in/sign-in.component.scss")]
        }),
        tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService, router_1.Router])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;


/***/ }),

/***/ "./src/app/account/sign-in/sign-in.model.ts":
/*!**************************************************!*\
  !*** ./src/app/account/sign-in/sign-in.model.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SignIn = /** @class */ (function () {
    function SignIn() {
    }
    return SignIn;
}());
exports.SignIn = SignIn;


/***/ }),

/***/ "./src/app/account/sign-up/sign-up.component.html":
/*!********************************************************!*\
  !*** ./src/app/account/sign-up/sign-up.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"text-center mb-3\">New user</h4>\n<div class=\"row my-2 justify-content-around\">\n    <div class=\"error col-12\">{{errors.Sum}}</div>\n</div>\n<div class=\"row my-2 justify-content-around\">\n    <div class=\"col-md-2 text-center\">Email</div>\n    <div class=\"col-md-9\"><input type=\"text\" [(ngModel)]=\"model.Email\"/></div>\n    <div class=\"error col-12\">{{errors.Email}}</div>\n</div>\n<div class=\"row my-2 justify-content-around\">\n    <div class=\"col-md-2 text-center\">Password</div>\n    <div class=\"col-md-9\"><input type=\"password\" [(ngModel)]=\"model.Password\"/></div>\n    <div class=\"error col-12\">{{errors.Password}}</div>\n</div>\n<div class=\"row my-2 justify-content-around\">\n    <div class=\"col-md-2 text-center\">Confirm</div>\n    <div class=\"col-md-9\"><input type=\"password\" [(ngModel)]=\"model.Confirm\"/></div>\n    <div class=\"error col-12\">{{errors.Confirm}}</div>\n</div>\n<div class=\"row justify-content-center\">\n    <input type=\"submit\" class=\"col-md-2 col-4 btn btn-main py-2\" (click)=\"signUp()\"  value=\"Sign up\"/>\n</div>\n<div class=\"row justify-content-end\">\n    <a routerLink=\"../signin\">Have an account?</a>\n</div>"

/***/ }),

/***/ "./src/app/account/sign-up/sign-up.component.scss":
/*!********************************************************!*\
  !*** ./src/app/account/sign-up/sign-up.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/account/sign-up/sign-up.component.ts":
/*!******************************************************!*\
  !*** ./src/app/account/sign-up/sign-up.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var sign_up_model_1 = __webpack_require__(/*! ./sign-up.model */ "./src/app/account/sign-up/sign-up.model.ts");
var account_service_1 = __webpack_require__(/*! ../account.service */ "./src/app/account/account.service.ts");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.model = new sign_up_model_1.SignUp;
        this.errors = {
            Email: "",
            Password: "",
            Confirm: "",
            Sum: "",
        };
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.signUp = function () {
        var _this = this;
        this.accountService.signUp(this.model).subscribe(function (res) {
            if (res.success) {
                localStorage.setItem('token', res.token);
                _this.router.navigate(["group"]);
            }
            else {
                _this.errors.Email = res.result.Errors.Email;
                _this.errors.Password = res.result.Errors.Password;
                _this.errors.Confirm = res.result.Errors.Confirm;
                _this.errors.Sum = res.result.Errors.Sum;
            }
        });
    };
    SignUpComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/account/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/account/sign-up/sign-up.component.scss")]
        }),
        tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService, router_1.Router])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;


/***/ }),

/***/ "./src/app/account/sign-up/sign-up.model.ts":
/*!**************************************************!*\
  !*** ./src/app/account/sign-up/sign-up.model.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SignUp = /** @class */ (function () {
    function SignUp() {
    }
    return SignUp;
}());
exports.SignUp = SignUp;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var group_component_1 = __webpack_require__(/*! ./group/group.component */ "./src/app/group/group.component.ts");
var home_component_1 = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var sign_in_component_1 = __webpack_require__(/*! ./account/sign-in/sign-in.component */ "./src/app/account/sign-in/sign-in.component.ts");
var sign_up_component_1 = __webpack_require__(/*! ./account/sign-up/sign-up.component */ "./src/app/account/sign-up/sign-up.component.ts");
var group_info_component_1 = __webpack_require__(/*! ./group/group-info/group-info.component */ "./src/app/group/group-info/group-info.component.ts");
var auth_guard_1 = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
var person_component_1 = __webpack_require__(/*! ./person/person.component */ "./src/app/person/person.component.ts");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'account', redirectTo: '/account/signin', pathMatch: 'full' },
    { path: 'account/signin', component: sign_in_component_1.SignInComponent },
    { path: 'account/signup', component: sign_up_component_1.SignUpComponent },
    { path: 'group', component: group_component_1.GroupComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'group/:name', component: group_info_component_1.GroupInfoComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'person/:guid', component: person_component_1.PersonComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'home', component: home_component_1.HomeComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<main class=\"container\">\n    <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CrewingAngular';
    }
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var account_component_1 = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
var navbar_component_1 = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
var group_component_1 = __webpack_require__(/*! ./group/group.component */ "./src/app/group/group.component.ts");
var home_component_1 = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var person_component_1 = __webpack_require__(/*! ./person/person.component */ "./src/app/person/person.component.ts");
var sign_in_component_1 = __webpack_require__(/*! ./account/sign-in/sign-in.component */ "./src/app/account/sign-in/sign-in.component.ts");
var sign_up_component_1 = __webpack_require__(/*! ./account/sign-up/sign-up.component */ "./src/app/account/sign-up/sign-up.component.ts");
var group_info_component_1 = __webpack_require__(/*! ./group/group-info/group-info.component */ "./src/app/group/group-info/group-info.component.ts");
var account_service_1 = __webpack_require__(/*! ./account/account.service */ "./src/app/account/account.service.ts");
var group_service_1 = __webpack_require__(/*! ./group/group.service */ "./src/app/group/group.service.ts");
var auth_guard_1 = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
var interceptor_service_1 = __webpack_require__(/*! ./interceptor.service */ "./src/app/interceptor.service.ts");
var group_create_component_1 = __webpack_require__(/*! ./group/group-create/group-create.component */ "./src/app/group/group-create/group-create.component.ts");
var group_remove_component_1 = __webpack_require__(/*! ./group/group-remove/group-remove.component */ "./src/app/group/group-remove/group-remove.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                account_component_1.AccountComponent,
                navbar_component_1.NavbarComponent,
                group_component_1.GroupComponent,
                home_component_1.HomeComponent,
                person_component_1.PersonComponent,
                sign_in_component_1.SignInComponent,
                sign_up_component_1.SignUpComponent,
                group_info_component_1.GroupInfoComponent,
                group_create_component_1.GroupCreateComponent,
                group_remove_component_1.GroupRemoveComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule
            ],
            providers: [account_service_1.AccountService, group_service_1.GroupService, auth_guard_1.AuthGuard,
                { provide: http_1.HTTP_INTERCEPTORS, useClass: interceptor_service_1.InterceptorService, multi: true }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var account_service_1 = __webpack_require__(/*! ./account/account.service */ "./src/app/account/account.service.ts");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(accountService, router) {
        this.accountService = accountService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.accountService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['account']);
            return false;
        }
    };
    AuthGuard = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/app/group/group-create/group-create.component.html":
/*!****************************************************************!*\
  !*** ./src/app/group/group-create/group-create.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"row my-2 justify-content-around\">\n      <div class=\"col-md-5 text-center\">Group name</div>\n      <div class=\"col-md-8\"><input type=\"text\" [(ngModel)]=\"model.Name\" id=\"name\" name=\"name\" autocomplete=\"name\"/></div>\n      <div class=\"error col-12\">{{errors}}</div>\n      <input type=\"submit\" class=\"col-md-2 col-4 btn btn-main my-2\" (click)=\"create()\" value=\"Add\"/>\n  </div>"

/***/ }),

/***/ "./src/app/group/group-create/group-create.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/group/group-create/group-create.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwL2dyb3VwLWNyZWF0ZS9ncm91cC1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/group/group-create/group-create.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/group/group-create/group-create.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var group_service_1 = __webpack_require__(/*! ../group.service */ "./src/app/group/group.service.ts");
var group_component_1 = __webpack_require__(/*! ../group.component */ "./src/app/group/group.component.ts");
var group_creation_model_1 = __webpack_require__(/*! ./group-creation.model */ "./src/app/group/group-create/group-creation.model.ts");
var GroupCreateComponent = /** @class */ (function () {
    function GroupCreateComponent(groupService, groupView) {
        this.groupService = groupService;
        this.groupView = groupView;
        this.model = new group_creation_model_1.GroupCreation;
    }
    GroupCreateComponent.prototype.ngOnInit = function () {
    };
    GroupCreateComponent.prototype.create = function () {
        var _this = this;
        this.groupService.createGroup(this.model).subscribe(function (res) {
            if (res.success) {
                _this.groupView.showGroups();
                _this.groupView.showCreation(false);
            }
            else {
                _this.errors = res.result.Errors.Name;
            }
        });
    };
    GroupCreateComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-group-create',
            template: __webpack_require__(/*! ./group-create.component.html */ "./src/app/group/group-create/group-create.component.html"),
            styles: [__webpack_require__(/*! ./group-create.component.scss */ "./src/app/group/group-create/group-create.component.scss")]
        }),
        tslib_1.__metadata("design:paramtypes", [group_service_1.GroupService, group_component_1.GroupComponent])
    ], GroupCreateComponent);
    return GroupCreateComponent;
}());
exports.GroupCreateComponent = GroupCreateComponent;


/***/ }),

/***/ "./src/app/group/group-create/group-creation.model.ts":
/*!************************************************************!*\
  !*** ./src/app/group/group-create/group-creation.model.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GroupCreation = /** @class */ (function () {
    function GroupCreation() {
    }
    return GroupCreation;
}());
exports.GroupCreation = GroupCreation;


/***/ }),

/***/ "./src/app/group/group-info/group-info.component.html":
/*!************************************************************!*\
  !*** ./src/app/group/group-info/group-info.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"group\" class=\"row justify-content-center\">\n    <div class=\"col-6\">\n        <div class=\"h4 my-2 text-center\">{{group.Name}} owners</div>\n        <table class=\"table table-hover text-center\">\n            <tr><td *ngFor=\"let p of owners; index as i;\" class=\"m-2\" routerLink=\"/person/{{p.Guid}}\">{{p.FirstName}} {{p.LastName}}</td></tr>\n            <tr><td class=\"col-12 text-center\">Add new</td></tr>\n        </table>\n    </div>\n    <div class=\"col-6\">\n        <div class=\"h4 my-2 text-center\">{{group.Name}} members</div>\n        <table class=\"table table-hover text-center\">\n            <tr><td *ngFor=\"let p of members; index as i;\" class=\"m-2\" routerLink=\"/person/{{p.Guid}}\">{{p.FirstName}} {{p.LastName}}</td></tr>\n            <tr><td class=\"col-12 text-center\">Add new</td></tr>\n        </table>\n    </div>\n</div>\n<div *ngIf=\"!group\">\n    This group was not found\n</div>\n<button (click)=\"goBack()\" class=\"btn btn-main float-right\">Go back</button>\n"

/***/ }),

/***/ "./src/app/group/group-info/group-info.component.scss":
/*!************************************************************!*\
  !*** ./src/app/group/group-info/group-info.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwL2dyb3VwLWluZm8vZ3JvdXAtaW5mby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/group/group-info/group-info.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/group/group-info/group-info.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var group_model_1 = __webpack_require__(/*! ../group.model */ "./src/app/group/group.model.ts");
var group_service_1 = __webpack_require__(/*! src/app/group/group.service */ "./src/app/group/group.service.ts");
var person_service_1 = __webpack_require__(/*! src/app/person/person.service */ "./src/app/person/person.service.ts");
var GroupInfoComponent = /** @class */ (function () {
    function GroupInfoComponent(route, groupService, location, personService) {
        this.route = route;
        this.groupService = groupService;
        this.location = location;
        this.personService = personService;
    }
    GroupInfoComponent.prototype.ngOnInit = function () {
        this.getGroup();
    };
    GroupInfoComponent.prototype.getGroup = function () {
        var _this = this;
        var name = this.route.snapshot.paramMap.get('name');
        this.groupService.getGroup(name).subscribe(function (res) {
            _this.group = res;
            _this.getOwners();
            _this.getMembers();
        });
    };
    GroupInfoComponent.prototype.getMembers = function () {
        var _this = this;
        this.personService.getMembersList(this.group.Guid).subscribe(function (res) { return _this.members = res; });
    };
    GroupInfoComponent.prototype.getOwners = function () {
        var _this = this;
        this.personService.getOnwersList(this.group.Guid).subscribe(function (res) { return _this.owners = res; });
    };
    GroupInfoComponent.prototype.goBack = function () {
        this.location.back();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", group_model_1.Group)
    ], GroupInfoComponent.prototype, "group", void 0);
    GroupInfoComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-group-info',
            template: __webpack_require__(/*! ./group-info.component.html */ "./src/app/group/group-info/group-info.component.html"),
            styles: [__webpack_require__(/*! ./group-info.component.scss */ "./src/app/group/group-info/group-info.component.scss")]
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            group_service_1.GroupService,
            common_1.Location,
            person_service_1.PersonService])
    ], GroupInfoComponent);
    return GroupInfoComponent;
}());
exports.GroupInfoComponent = GroupInfoComponent;


/***/ }),

/***/ "./src/app/group/group-remove/group-remove.component.html":
/*!****************************************************************!*\
  !*** ./src/app/group/group-remove/group-remove.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/group/group-remove/group-remove.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/group/group-remove/group-remove.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwL2dyb3VwLXJlbW92ZS9ncm91cC1yZW1vdmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/group/group-remove/group-remove.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/group/group-remove/group-remove.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var GroupRemoveComponent = /** @class */ (function () {
    function GroupRemoveComponent() {
    }
    GroupRemoveComponent.prototype.ngOnInit = function () {
    };
    GroupRemoveComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-group-remove',
            template: __webpack_require__(/*! ./group-remove.component.html */ "./src/app/group/group-remove/group-remove.component.html"),
            styles: [__webpack_require__(/*! ./group-remove.component.scss */ "./src/app/group/group-remove/group-remove.component.scss")]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], GroupRemoveComponent);
    return GroupRemoveComponent;
}());
exports.GroupRemoveComponent = GroupRemoveComponent;


/***/ }),

/***/ "./src/app/group/group.component.html":
/*!********************************************!*\
  !*** ./src/app/group/group.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <table class=\"table table-hover w-100 col-6\">\n        <tr *ngFor=\"let item of groupList; index as i;\" class=\"m-2\">\n            <td>\n                <a class=\"text-dark\" routerLink=\"/group/{{item.Name}}\">{{item.Name}}</a>\n            </td>\n            <td><a class=\"text-right\" (click)=\"showRemoving(item.Guid)\" *ngIf=\"roleService.isAdmin()\">❌</a></td>\n        </tr>\n        <tr *ngIf=\"roleService.isManagerOrH()\">\n            <td colspan=\"2\"><a class=\"bg-main\" (click)=\"showCreation()\">Add new</a></td>\n        </tr>\n    </table>\n    <div class=\"col-6\">\n        <app-group-remove></app-group-remove>\n        <app-group-create *ngIf=\"showGroupCreation\"></app-group-create>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/group/group.component.scss":
/*!********************************************!*\
  !*** ./src/app/group/group.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {\n  padding: 0; }\n\ntd a {\n  display: block;\n  padding: 0.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAvQzpcXFVzZXJzXFx2bGFkaW1pclxcc291cmNlXFxyZXBvc1xcQ3Jld2luZ0FuZ3VsYXIvc3JjXFxhcHBcXGdyb3VwXFxncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ncm91cC9ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRke1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxudGQgYXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/group/group.component.ts":
/*!******************************************!*\
  !*** ./src/app/group/group.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var group_service_1 = __webpack_require__(/*! ./group.service */ "./src/app/group/group.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var role_service_1 = __webpack_require__(/*! ../role.service */ "./src/app/role.service.ts");
var GroupComponent = /** @class */ (function () {
    function GroupComponent(groupService, router, roleService) {
        this.groupService = groupService;
        this.router = router;
        this.roleService = roleService;
    }
    GroupComponent.prototype.showCreation = function (show) {
        if (show === void 0) { show = !this.showGroupCreation; }
        this.showGroupCreation = show;
    };
    GroupComponent.prototype.ngOnInit = function () {
        this.showGroups();
    };
    GroupComponent.prototype.showRemoving = function (guid) {
        this.removeable = guid;
    };
    GroupComponent.prototype.showGroups = function () {
        var _this = this;
        this.groupService.getGroupList().subscribe(function (res) { return _this.groupList = res; }, function (err) {
            if (err instanceof http_1.HttpErrorResponse) {
                if (err.status === 401)
                    _this.router.navigate(['account']);
            }
        });
    };
    GroupComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-group',
            template: __webpack_require__(/*! ./group.component.html */ "./src/app/group/group.component.html"),
            styles: [__webpack_require__(/*! ./group.component.scss */ "./src/app/group/group.component.scss")]
        }),
        tslib_1.__metadata("design:paramtypes", [group_service_1.GroupService, router_1.Router, role_service_1.RoleService])
    ], GroupComponent);
    return GroupComponent;
}());
exports.GroupComponent = GroupComponent;


/***/ }),

/***/ "./src/app/group/group.model.ts":
/*!**************************************!*\
  !*** ./src/app/group/group.model.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Group = /** @class */ (function () {
    function Group() {
    }
    return Group;
}());
exports.Group = Group;


/***/ }),

/***/ "./src/app/group/group.service.ts":
/*!****************************************!*\
  !*** ./src/app/group/group.service.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var serverurl_1 = __webpack_require__(/*! ../serverurl */ "./src/app/serverurl.ts");
var GroupService = /** @class */ (function () {
    function GroupService(http) {
        this.http = http;
    }
    GroupService.prototype.getGroupList = function () {
        var url = serverurl_1.serverurl + "Group/List";
        return this.http.get(url);
    };
    GroupService.prototype.getGroup = function (name) {
        var url = serverurl_1.serverurl + "Group/Info?name=" + name;
        return this.http.get(url);
    };
    GroupService.prototype.createGroup = function (model) {
        var url = serverurl_1.serverurl + "Group/Create";
        return this.http.post(url, model);
    };
    GroupService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], GroupService);
    return GroupService;
}());
exports.GroupService = GroupService;


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{version}}</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var home_service_1 = __webpack_require__(/*! ./home.service */ "./src/app/home/home.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(homeService) {
        this.homeService = homeService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.showVersion();
    };
    HomeComponent.prototype.showVersion = function () {
        var _this = this;
        this.homeService.getVersion().subscribe(function (res) { return _this.version = res; });
    };
    HomeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib_1.__metadata("design:paramtypes", [home_service_1.HomeService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/home/home.service.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var serverurl_1 = __webpack_require__(/*! ../serverurl */ "./src/app/serverurl.ts");
var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.getVersion = function () {
        var url = serverurl_1.serverurl + "home/get";
        return this.http.get(url);
    };
    HomeService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;


/***/ }),

/***/ "./src/app/interceptor.service.ts":
/*!****************************************!*\
  !*** ./src/app/interceptor.service.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var account_service_1 = __webpack_require__(/*! ./account/account.service */ "./src/app/account/account.service.ts");
var InterceptorService = /** @class */ (function () {
    function InterceptorService(injector) {
        this.injector = injector;
    }
    InterceptorService.prototype.intercept = function (req, next) {
        var accountService = this.injector.get(account_service_1.AccountService);
        var tokenReq = req.clone({ setHeaders: { Authorization: 'Bearer ' + accountService.getToken() } });
        return next.handle(tokenReq);
    };
    InterceptorService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.Injector])
    ], InterceptorService);
    return InterceptorService;
}());
exports.InterceptorService = InterceptorService;


/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-main p-0 sticky-top\">\n  <div class=\"container p-0\">\n      <nav class=\"navbar py-1 font-weight-bold navbar-expand justify-content-md-around navbar-dark\">\n          <div class=\"collapse navbar-collapse justify-content-center\" id=\"nav\">\n            <ul class=\"navbar-nav flex-fill w-100 flex-nowrap justify-content-start\">\n                <li class=\"nav-item\"><a routerLink=\"/home\" routerLinkActive=\"active\" class=\"nav-link\">Home</a></li>\n                <li class=\"nav-item\"><a routerLink=\"/group\" routerLinkActive=\"active\" class=\"nav-link\">Groups</a></li>\n            </ul>\n            <ul class=\"navbar-nav flex-fill w-100 flex-nowrap justify-content-end\">\n              <li *ngIf=\"!accountService.loggedIn()\" class=\"nav-item\"><a routerLink=\"/account\" routerLinkActive=\"active\" class=\"nav-link\">Login</a></li>\n              <li *ngIf=\"accountService.loggedIn()\" class=\"nav-item\"><a (click)=\"accountService.logout()\" class=\"nav-link\">Logout</a></li>\n            </ul>\n          </div>\n      </nav>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var account_service_1 = __webpack_require__(/*! ../account/account.service */ "./src/app/account/account.service.ts");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(accountService) {
        this.accountService = accountService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/person/person.component.html":
/*!**********************************************!*\
  !*** ./src/app/person/person.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"text-center\">Person info</h4>\n\n<div *ngIf=\"success\">\n    <h6 class=\"alert alert-success text-center\">Changes were succesfully saved</h6>\n</div>\n<div *ngIf=\"!success && errors\">\n    <h6 class=\"col-12 text-center alert alert-danger\">{{errors}}</h6>\n</div>\n\n<div *ngIf=\"person\">\n    <table class=\"table table-bordered user-info\">\n        <tr class=\"v-none\"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>\n        <tr>\n            <td colspan=\"4\">First name</td>\n            <td colspan=\"14\"><input type=\"text\" [(ngModel)]=\"person.FirstName\"/></td>\n        </tr>\n        <tr>\n            <td colspan=\"4\">Last name</td>\n            <td colspan=\"14\"><input type=\"text\" [(ngModel)]=\"person.LastName\"/></td>\n        </tr>\n        <tr>\n            <td colspan=\"4\">Nationality</td>\n            <td colspan=\"5\"><input type=\"text\" [(ngModel)]=\"person.Nationality\"/></td>\n            <td colspan=\"4\">Birth date</td>\n            <td colspan=\"5\"><input type=\"text\" [(ngModel)]=\"person.BirthDate\"/></td>\n        </tr>\n        <tr>\n            <td colspan=\"4\">Address</td>\n            <td colspan=\"14\"><input type=\"text\" [(ngModel)]=\"person.Address\"/></td>\n        </tr>\n        <tr>\n            <td colspan=\"4\">Width</td>\n            <td colspan=\"2\"><input type=\"number\" [(ngModel)]=\"person.Width\"/></td>\n            <td colspan=\"4\">Height</td>\n            <td colspan=\"2\"><input type=\"number\" [(ngModel)]=\"person.Height\"/></td>\n            <td colspan=\"4\">Blood group</td>\n            <td colspan=\"2\"><input type=\"text\" [(ngModel)]=\"person.BloodGroup\"/></td>\n        </tr>\n        <tr>\n            <td colspan=\"4\">Email</td>\n            <td colspan=\"14\"><input type=\"text\" [(ngModel)]=\"person.Email\"/></td>\n        </tr>\n        <!--User is admin or user is manager and password is null or user is me-->\n        <tr >\n            <td colspan=\"4\">Password</td>\n            <td colspan=\"5\"><input type=\"password\" [(ngModel)]=\"person.Password\"/></td>\n            <td colspan=\"4\">Password confirm</td>\n            <td colspan=\"5\"><input type=\"password\" [(ngModel)]=\"person.PasswordConfirm\"/></td>\n        </tr>\n    </table>\n    <div class=\"row justify-content-center\">\n        <button class=\"col-2 btn btn-success\" (click)=\"update()\">Confirm</button>\n        <div class=\"col-1\"></div>\n        <button class=\"col-2 btn btn-secondary\" (click)=\"goBack()\">Back</button>\n    </div>\n</div>\n\n<div *ngIf=\"!person\" class=\"row justify-content-center\">\n    <button class=\"col-2 btn btn-secondary\" (click)=\"goBack()\">Back</button>\n</div>"

/***/ }),

/***/ "./src/app/person/person.component.scss":
/*!**********************************************!*\
  !*** ./src/app/person/person.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr td {\n  width: 5.55%; }\n\ntbody > tr:first-child td {\n  visibility: hidden;\n  padding: 0; }\n\nh6 {\n  margin: 0 0 0.5rem 0;\n  padding: 0.4rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uL0M6XFxVc2Vyc1xcdmxhZGltaXJcXHNvdXJjZVxccmVwb3NcXENyZXdpbmdBbmd1bGFyL3NyY1xcYXBwXFxwZXJzb25cXHBlcnNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksb0JBQW9CO0VBQ3BCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi9wZXJzb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ciB0ZHtcclxuICAgIHdpZHRoOiA1LjU1JTtcclxufVxyXG5cclxudGJvZHkgPiB0cjpmaXJzdC1jaGlsZCB0ZHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmg2e1xyXG4gICAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/person/person.component.ts":
/*!********************************************!*\
  !*** ./src/app/person/person.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var person_model_1 = __webpack_require__(/*! ./person.model */ "./src/app/person/person.model.ts");
var person_service_1 = __webpack_require__(/*! ./person.service */ "./src/app/person/person.service.ts");
var PersonComponent = /** @class */ (function () {
    function PersonComponent(personService, route, location) {
        this.personService = personService;
        this.route = route;
        this.location = location;
    }
    PersonComponent.prototype.ngOnInit = function () {
        this.getPerson();
    };
    PersonComponent.prototype.getPerson = function () {
        var _this = this;
        var guid = this.route.snapshot.paramMap.get('guid');
        this.personService.getPerson(guid).subscribe(function (res) {
            _this.person = res;
            if (res == null) {
                _this.success = false;
                _this.errors = "You have no access or record was not found";
            }
        });
    };
    PersonComponent.prototype.update = function () {
        var _this = this;
        this.personService.postPerson(this.person).subscribe(function (res) {
            if (res.success) {
                _this.success = true;
            }
            else {
                _this.success = false;
                _this.errors = res.result.Errors.Sum;
            }
        });
    };
    PersonComponent.prototype.goBack = function () {
        this.location.back();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", person_model_1.PersonInfo)
    ], PersonComponent.prototype, "person", void 0);
    PersonComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-person',
            template: __webpack_require__(/*! ./person.component.html */ "./src/app/person/person.component.html"),
            styles: [__webpack_require__(/*! ./person.component.scss */ "./src/app/person/person.component.scss")]
        }),
        tslib_1.__metadata("design:paramtypes", [person_service_1.PersonService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;


/***/ }),

/***/ "./src/app/person/person.model.ts":
/*!****************************************!*\
  !*** ./src/app/person/person.model.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PersonInfo = /** @class */ (function () {
    function PersonInfo() {
    }
    return PersonInfo;
}());
exports.PersonInfo = PersonInfo;


/***/ }),

/***/ "./src/app/person/person.service.ts":
/*!******************************************!*\
  !*** ./src/app/person/person.service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var serverurl_1 = __webpack_require__(/*! ../serverurl */ "./src/app/serverurl.ts");
var PersonService = /** @class */ (function () {
    function PersonService(http) {
        this.http = http;
    }
    PersonService.prototype.getMembersList = function (guid) {
        var url = serverurl_1.serverurl + "Group/Members/?groupGuid=" + guid;
        return this.http.get(url);
    };
    PersonService.prototype.getOnwersList = function (guid) {
        var url = serverurl_1.serverurl + "Group/Owners/?groupGuid=" + guid;
        return this.http.get(url);
    };
    PersonService.prototype.getPerson = function (guid) {
        var url = serverurl_1.serverurl + "Person/Info/?guid=" + guid;
        return this.http.get(url);
    };
    PersonService.prototype.postPerson = function (person) {
        var url = serverurl_1.serverurl + "Person/ChangeInfo";
        return this.http.post(url, person);
    };
    PersonService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], PersonService);
    return PersonService;
}());
exports.PersonService = PersonService;


/***/ }),

/***/ "./src/app/role.service.ts":
/*!*********************************!*\
  !*** ./src/app/role.service.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var RoleService = /** @class */ (function () {
    function RoleService() {
    }
    RoleService.prototype.isAdmin = function () {
        return localStorage.getItem('role') == "Admin";
    };
    RoleService.prototype.isManager = function () {
        return localStorage.getItem('role') == "Manager";
    };
    RoleService.prototype.isCaptain = function () {
        return localStorage.getItem('role') == "Captain";
    };
    RoleService.prototype.isManagerOrH = function () {
        return this.isAdmin() || this.isManager();
    };
    RoleService.prototype.isCaptainOrH = function () {
        return this.isCaptainOrH() || this.isCaptain();
    };
    RoleService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RoleService);
    return RoleService;
}());
exports.RoleService = RoleService;


/***/ }),

/***/ "./src/app/serverurl.ts":
/*!******************************!*\
  !*** ./src/app/serverurl.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.serverurl = "https://crewingweb.azurewebsites.net/api/";
// remote https://crewingweb.azurewebsites.net/api/
// local http://localhost:1785/api/


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vladimir\source\repos\CrewingAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map