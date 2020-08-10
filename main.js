(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _networks_networks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./networks/networks.component */ "./src/app/networks/networks.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









class AppComponent {
    constructor(appService) {
        this.appService = appService;
    }
    ngOnInit() {
        this.bio$ = this.appService.getBio();
        this.skills$ = this.appService.getSkills();
        this.experiences$ = this.appService.getExperiences();
        this.networks$ = this.appService.getNetworks();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["gen-root"]], decls: 18, vars: 12, consts: [[1, "app-content"], [3, "bio"], [3, "skills"], [3, "experiences"], [3, "networks"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "gen-bio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "gen-skills", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "gen-experience", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Where I am");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "gen-networks", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "gen-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.bio$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skills", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, ctx.skills$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experiences", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, ctx.experiences$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("networks", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 10, ctx.networks$));
    } }, directives: [_bio_bio_component__WEBPACK_IMPORTED_MODULE_2__["BioComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"], _networks_networks_component__WEBPACK_IMPORTED_MODULE_5__["NetworksComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".app-content[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: auto;\n}\n.app-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--yellow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFBRTtFQUVFLG9CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBoMiB7XG4gICAgLy8gZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gen-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _networks_networks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./networks/networks.component */ "./src/app/networks/networks.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"],
        _bio_bio_component__WEBPACK_IMPORTED_MODULE_7__["BioComponent"],
        _networks_networks_component__WEBPACK_IMPORTED_MODULE_8__["NetworksComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"],
                    _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"],
                    _bio_bio_component__WEBPACK_IMPORTED_MODULE_7__["BioComponent"],
                    _networks_networks_component__WEBPACK_IMPORTED_MODULE_8__["NetworksComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class AppService {
    constructor() { }
    getBio() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
            name: 'Antonio',
            surnames: 'Genaro',
            description: `Fullstack JavaScript developer (70% frontend / 30% backend). Kebab expert`,
            imgUrl: 'https://avatars2.githubusercontent.com/u/15797756',
            work: 'Software developer'
        });
    }
    getSkills() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([
            {
                name: 'General',
                fullWidth: true,
                skills: [
                    { name: 'JavaScript', favorite: true },
                    { name: 'TypeScript', favorite: true }
                ]
            },
            {
                name: 'Frontend',
                skills: [
                    { name: 'Angular', favorite: true },
                    { name: 'Ionic', favorite: true },
                    { name: 'Stencil.js' }
                ]
            },
            {
                name: 'Backend',
                skills: [
                    { name: 'Node.js', favorite: true },
                    { name: 'MySQL' },
                    { name: 'Nest.js' }
                ]
            },
            {
                name: 'Others',
                fullWidth: true,
                skills: [
                    { name: 'Git', favorite: true },
                    { name: 'Firebase' },
                    { name: 'Runnerty' }
                ]
            }
        ]);
    }
    getExperiences() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([
            { business: 'Coderty', startDate: new Date('2016-04'), work: 'Software developer' }
        ]);
    }
    getNetworks() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([
            { networkName: 'Github', userName: 'antoniogenaro', url: 'https://github.com/antoniogenaro', class: 'fab fa-github' },
            { networkName: 'Twitter', userName: 'antoniogenaro8', url: 'https://twitter.com/antoniogenaro8', class: 'fab fa-twitter' },
            { networkName: 'Linkedin', userName: 'antoniogenaro', url: 'https://www.linkedin.com/in/antoniogenaro', class: 'fab fa-linkedin' },
            { networkName: 'Email', userName: 'hey@genaro.dev', url: 'mailto:hey@genaro.dev', class: 'fas fa-envelope' }
        ]);
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/bio/bio.component.ts":
/*!**************************************!*\
  !*** ./src/app/bio/bio.component.ts ***!
  \**************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");



class BioComponent {
    constructor() { }
    ngOnInit() {
    }
}
BioComponent.ɵfac = function BioComponent_Factory(t) { return new (t || BioComponent)(); };
BioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BioComponent, selectors: [["gen-bio"]], inputs: { bio: "bio" }, decls: 10, vars: 5, consts: [["fxLayout", "row", 1, "bio-container"], [1, "bio-img"], [3, "src"], [1, "bio-info"]], template: function BioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.bio.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.bio.name, " ", ctx.bio.surnames, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bio.work);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bio.description);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"]], styles: [".bio-container[_ngcontent-%COMP%]   .bio-img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.bio-container[_ngcontent-%COMP%]   .bio-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 150px;\n  max-width: 150px;\n  border-radius: 50%;\n  border: 2px solid;\n}\n.bio-container[_ngcontent-%COMP%]   .bio-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: var(--blue);\n}\n.bio-container[_ngcontent-%COMP%]   .bio-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: var(--green);\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlvL2Jpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0FBQUo7QUFDSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ047QUFHSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUdJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRE4iLCJmaWxlIjoic3JjL2FwcC9iaW8vYmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJpby1jb250YWluZXIge1xuICAuYmlvLWltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGltZyB7XG4gICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZDtcbiAgICB9XG4gIH1cbiAgLmJpby1pbmZvIHtcbiAgICBoMSB7XG4gICAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIH1cbiAgICBoMiB7XG4gICAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgICAgY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gen-bio',
                templateUrl: './bio.component.html',
                styleUrls: ['./bio.component.scss']
            }]
    }], function () { return []; }, { bio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");




function ExperienceComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r1.work);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r1.business);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, experience_r1.startDate, "MMM yyyy"), " - ", experience_r1.endDate ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 7, experience_r1.endDate, "MMM yyyy") : "act.", " ");
} }
class ExperienceComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["gen-experience"]], inputs: { experiences: "experiences" }, decls: 2, vars: 1, consts: [[1, "experiences-container"], ["fxLayout", "column", "class", "experience-item", 4, "ngFor", "ngForOf"], ["fxLayout", "column", 1, "experience-item"], [1, "experience-item-work"], [1, "experience-item-business"], [1, "experience-item-dates"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExperienceComponent_div_1_Template, 9, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".experiences-container[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  margin-bottom: 5px;\n  border-bottom: 1px solid;\n}\n.experiences-container[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-item-work[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--blue);\n}\n.experiences-container[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-item-business[_ngcontent-%COMP%] {\n  font-weight: 300;\n  color: var(--green);\n}\n.experiences-container[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-item-dates[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBQUo7QUFDSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUNOO0FBQ0k7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQ047QUFDSTtFQUNFLGVBQUE7QUFDTiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBlcmllbmNlcy1jb250YWluZXIge1xuICAuZXhwZXJpZW5jZS1pdGVtIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgLmV4cGVyaWVuY2UtaXRlbS13b3JrIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICB9XG4gICAgLmV4cGVyaWVuY2UtaXRlbS1idXNpbmVzcyB7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgICB9XG4gICAgLmV4cGVyaWVuY2UtaXRlbS1kYXRlcyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gen-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.scss']
            }]
    }], function () { return []; }, { experiences: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["gen-footer"]], decls: 2, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This page is made from scratch with Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  font-size: 12px;\n  float: right;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gen-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/networks/networks.component.ts":
/*!************************************************!*\
  !*** ./src/app/networks/networks.component.ts ***!
  \************************************************/
/*! exports provided: NetworksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworksComponent", function() { return NetworksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");




function NetworksComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const network_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", network_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](network_r1.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](network_r1.networkName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](network_r1.userName);
} }
class NetworksComponent {
    constructor() { }
    ngOnInit() {
    }
}
NetworksComponent.ɵfac = function NetworksComponent_Factory(t) { return new (t || NetworksComponent)(); };
NetworksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NetworksComponent, selectors: [["gen-networks"]], inputs: { networks: "networks" }, decls: 2, vars: 1, consts: [[1, "networks-container"], ["class", "network-item", "fxLayout", "row", "fxLayoutAlign", "start center", 3, "href", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "network-item", 3, "href"], [1, "network-item-icon"], [1, "network-item-info"], [1, "network-item-name"], [1, "network-item-username"]], template: function NetworksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NetworksComponent_a_1_Template, 8, 5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.networks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"]], styles: [".networks-container[_ngcontent-%COMP%]   .network-item[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: inherit;\n  text-decoration: none;\n  padding-bottom: 5px;\n  border-bottom: 1px solid;\n}\n.networks-container[_ngcontent-%COMP%]   .network-item[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.networks-container[_ngcontent-%COMP%]   .network-item[_ngcontent-%COMP%]   .network-item-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  margin-right: 10px;\n}\n.networks-container[_ngcontent-%COMP%]   .network-item[_ngcontent-%COMP%]   .network-item-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.networks-container[_ngcontent-%COMP%]   .network-item[_ngcontent-%COMP%]   .network-item-info[_ngcontent-%COMP%]   .network-item-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--green);\n  font-weight: 300;\n}\n.networks-container[_ngcontent-%COMP%]   .network-item[_ngcontent-%COMP%]   .network-item-info[_ngcontent-%COMP%]   .network-item-username[_ngcontent-%COMP%] {\n  color: var(--blue);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV0d29ya3MvbmV0d29ya3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFBSjtBQUNJO0VBQ0UsMEJBQUE7QUFDTjtBQUNJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBQ047QUFBTTtFQUNFLGVBQUE7QUFFUjtBQUVNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUVNO0VBQ0Usa0JBQUE7QUFBUiIsImZpbGUiOiJzcmMvYXBwL25ldHdvcmtzL25ldHdvcmtzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldHdvcmtzLWNvbnRhaW5lciB7XG4gIC5uZXR3b3JrLWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gICAgLm5ldHdvcmstaXRlbS1pY29uIHtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLm5ldHdvcmstaXRlbS1pbmZvIHtcbiAgICAgIC5uZXR3b3JrLWl0ZW0tbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIH1cbiAgICAgIC5uZXR3b3JrLWl0ZW0tdXNlcm5hbWUge1xuICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NetworksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gen-networks',
                templateUrl: './networks.component.html',
                styleUrls: ['./networks.component.scss']
            }]
    }], function () { return []; }, { networks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SkillsComponent_div_1_div_4_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
} }
function SkillsComponent_div_1_div_4_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 100 / ctx_r6.maxValue, "%");
} }
function SkillsComponent_div_1_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkillsComponent_div_1_div_4_div_5_div_3_Template, 1, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r5.getValuePercent(skill_r3), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.valuesSeparator);
} }
function SkillsComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkillsComponent_div_1_div_4_i_2_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SkillsComponent_div_1_div_4_div_5_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r3.favorite);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r3.value);
} }
function SkillsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillsComponent_div_1_div_4_Template, 6, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grouping_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", grouping_r1.fullWidth ? 100 : 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grouping_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", grouping_r1.skills);
} }
class SkillsComponent {
    constructor() {
        this.maxValue = 5;
    }
    ngOnInit() {
        this.generateValuesSeparator();
    }
    getValuePercent(skill) {
        return skill.value / this.maxValue * 100;
    }
    generateValuesSeparator() {
        this.valuesSeparator = new Array(this.maxValue);
        console.log(this.valuesSeparator);
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["gen-skills"]], inputs: { skills: "skills" }, decls: 2, vars: 1, consts: [["fxLayout", "row wrap", "fxLayoutGap", "10px grid", 1, "skills-container"], ["fxFlex.lt-sm", "100", 3, "fxFlex", 4, "ngFor", "ngForOf"], ["fxFlex.lt-sm", "100", 3, "fxFlex"], [1, "skill-grouping"], [1, "skill-grouping-name"], ["class", "skill-item", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "8px", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "8px", 1, "skill-item"], [1, "skill-item-favorite"], ["class", "fas fa-star", 4, "ngIf"], ["fxFlex", "", 1, "skill-item-name"], ["class", "skill-item-value", 4, "ngIf"], [1, "fas", "fa-star"], [1, "skill-item-value"], [1, "skill-item-value-percent"], ["fxLayout", "row", 1, "skill-item-value-separators-container"], ["class", "skill-item-value-separator-item", 3, "width", 4, "ngFor", "ngForOf"], [1, "skill-item-value-separator-item"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillsComponent_div_1_Template, 5, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".skills-container[_ngcontent-%COMP%]   .skill-grouping[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n  margin-bottom: 5px;\n  height: 100%;\n}\n.skills-container[_ngcontent-%COMP%]   .skill-grouping[_ngcontent-%COMP%]   .skill-grouping-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 300;\n  color: var(--green);\n}\n.skills-container[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%]   .skill-item-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--blue);\n}\n.skills-container[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%]   .skill-item-value[_ngcontent-%COMP%] {\n  height: 16px;\n  border: 1px solid;\n  border-radius: 10px;\n  overflow: hidden;\n  width: 100%;\n  max-width: 300px;\n  display: inline-flex;\n}\n.skills-container[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%]   .skill-item-value[_ngcontent-%COMP%]   .skill-item-value-percent[_ngcontent-%COMP%] {\n  background-color: var(--red);\n  height: 100%;\n}\n.skills-container[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%]   .skill-item-value[_ngcontent-%COMP%]   .skill-item-value-separators-container[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 16px;\n  position: absolute;\n  overflow: hidden;\n  border-radius: 10px;\n  z-index: 9;\n}\n.skills-container[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%]   .skill-item-value[_ngcontent-%COMP%]   .skill-item-value-separators-container[_ngcontent-%COMP%]   .skill-item-value-separator-item[_ngcontent-%COMP%] {\n  border-left: 1px solid #dddddd;\n  height: 100%;\n}\n.skills-container[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%]   .skill-item-favorite[_ngcontent-%COMP%] {\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQUo7QUFDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ047QUFHSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUROO0FBR0k7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFETjtBQUVNO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FBQVI7QUFFTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUFSO0FBQ1E7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUFDVjtBQUdJO0VBQ0UsV0FBQTtBQUROIiwiZmlsZSI6InNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5za2lsbHMtY29udGFpbmVyIHtcbiAgLnNraWxsLWdyb3VwaW5nIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAuc2tpbGwtZ3JvdXBpbmctbmFtZSB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgICB9XG4gIH1cbiAgLnNraWxsLWl0ZW0ge1xuICAgIC5za2lsbC1pdGVtLW5hbWUge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIH1cbiAgICAuc2tpbGwtaXRlbS12YWx1ZSB7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAuc2tpbGwtaXRlbS12YWx1ZS1wZXJjZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgLnNraWxsLWl0ZW0tdmFsdWUtc2VwYXJhdG9ycy1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICAuc2tpbGwtaXRlbS12YWx1ZS1zZXBhcmF0b3ItaXRlbSB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuc2tpbGwtaXRlbS1mYXZvcml0ZSB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICB9XG4gIH1cbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gen-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { skills: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/anton/workspace/antoniogenaro-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map