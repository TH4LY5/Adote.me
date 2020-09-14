(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button  expand=\"full\" color=\"success\" (click)=\"abrirFiltro()\">Filtro</ion-button>\n\n\n<p style=\"padding: 10px;\"><b>Os doguinhos</b></p>\n  <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\n    <ion-slide *ngFor=\"let card of [0,1,2,3,4,5,6]\" style=\"width: 150px; height: 200px; border: 2px solid #f8f8f8;\">\n      <ion-col>        \n        <ion-img (click)=\"abriDescricao();\" style=\"pointer-events:none; \" src=\"https://love.doghero.com.br/wp-content/uploads/2019/09/Golden.jpg.jpg\"></ion-img>\n        <ion-label style=\"text-align: start;\">Cachorrinho </ion-label>\n        <ion-button shape=\"block\" fill=\"outline\" (click)=\"abriDescricao();\" >Ver Mais</ion-button>\n      </ion-col>\n    </ion-slide>\n  </ion-slides>\n\n  <p style=\"padding: 10px;\"><b>Os gatinhos</b></p>\n  <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\n    <ion-slide *ngFor=\"let card of [0,1,2,3,4,5,6]\" style=\"width: 150px; height: 200px; border: 2px solid #f8f8f8;\">\n      <ion-col>        \n        <ion-img style=\"pointer-events:none; \" src=\"https://www.joanadarcam.com.br/wp-content/uploads/2020/02/images-92.jpeg\"></ion-img>\n        <ion-label style=\"text-align: start;\">Gatinho </ion-label>\n      </ion-col>\n    </ion-slide>\n  </ion-slides>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-select {\n  /* Applies to the value and placeholder color */\n  color: #545ca7;\n  /* Set a different placeholder color */\n  --placeholder-color: #971e49;\n  /* Set full opacity on the placeholder */\n  --placeholder-opacity: 1;\n}\n\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtDQUFBO0VBQ0EsY0FBQTtFQUVBLHNDQUFBO0VBQ0EsNEJBQUE7RUFFQSx3Q0FBQTtFQUNBLHdCQUFBO0FBREo7O0FBR0U7RUFDRSxXQUFBO0VBRUEsdUJBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VsZWN0IHtcbiAgICAvKiBBcHBsaWVzIHRvIHRoZSB2YWx1ZSBhbmQgcGxhY2Vob2xkZXIgY29sb3IgKi9cbiAgICBjb2xvcjogIzU0NWNhNztcbiAgXG4gICAgLyogU2V0IGEgZGlmZmVyZW50IHBsYWNlaG9sZGVyIGNvbG9yICovXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzk3MWU0OTtcbiAgXG4gICAgLyogU2V0IGZ1bGwgb3BhY2l0eSBvbiB0aGUgcGxhY2Vob2xkZXIgKi9cbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gIH1cbiAgaW9uLXNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _filtros_model_filtros_model_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filtros-model/filtros-model.page */ "./src/app/filtros-model/filtros-model.page.ts");
/* harmony import */ var _detalhe_produto_detalhe_produto_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../detalhe-produto/detalhe-produto.page */ "./src/app/detalhe-produto/detalhe-produto.page.ts");





let HomePage = class HomePage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    abrirFiltro() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _filtros_model_filtros_model_page__WEBPACK_IMPORTED_MODULE_3__["FiltrosModelPage"],
            });
            modal.present();
        });
    }
    abriDescricao() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _detalhe_produto_detalhe_produto_page__WEBPACK_IMPORTED_MODULE_4__["DetalheProdutoPage"],
            });
            modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map