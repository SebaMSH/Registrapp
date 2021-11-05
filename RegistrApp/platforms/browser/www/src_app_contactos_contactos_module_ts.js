(self["webpackChunkclase3"] = self["webpackChunkclase3"] || []).push([["src_app_contactos_contactos_module_ts"],{

/***/ 875:
/*!*******************************************************!*\
  !*** ./src/app/contactos/contactos-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactosPageRoutingModule": () => (/* binding */ ContactosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _contactos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactos.page */ 4042);




const routes = [
    {
        path: '',
        component: _contactos_page__WEBPACK_IMPORTED_MODULE_0__.ContactosPage
    },
    {
        path: 'detalle-contacto',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./detalle-contacto/detalle-contacto.module */ 9313)).then(m => m.DetalleContactoPageModule)
    },
    {
        path: 'asistencia-manual',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./asistencia-manual/asistencia-manual.module */ 907)).then(m => m.AsistenciaManualPageModule)
    }
];
let ContactosPageRoutingModule = class ContactosPageRoutingModule {
};
ContactosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactosPageRoutingModule);



/***/ }),

/***/ 5593:
/*!***********************************************!*\
  !*** ./src/app/contactos/contactos.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactosPageModule": () => (/* binding */ ContactosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _contactos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactos-routing.module */ 875);
/* harmony import */ var _contactos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactos.page */ 4042);







let ContactosPageModule = class ContactosPageModule {
};
ContactosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contactos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactosPageRoutingModule
        ],
        declarations: [_contactos_page__WEBPACK_IMPORTED_MODULE_1__.ContactosPage]
    })
], ContactosPageModule);



/***/ }),

/***/ 4042:
/*!*********************************************!*\
  !*** ./src/app/contactos/contactos.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactosPage": () => (/* binding */ ContactosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_contactos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contactos.page.html */ 1858);
/* harmony import */ var _contactos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactos.page.scss */ 3225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _contactos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactos.service */ 8160);





let ContactosPage = class ContactosPage {
    constructor(contactoService) {
        this.contactoService = contactoService;
        this.listaContactos = [];
    }
    ngOnInit() {
        this.listaContactos = this.contactoService.getContactos();
    }
};
ContactosPage.ctorParameters = () => [
    { type: _contactos_service__WEBPACK_IMPORTED_MODULE_2__.ContactosService }
];
ContactosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-contactos',
        template: _raw_loader_contactos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contactos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactosPage);

/* en este archivo del componente, se establecen las serie de variables que serán empleadas dentro del modulo */ 


/***/ }),

/***/ 3225:
/*!***********************************************!*\
  !*** ./src/app/contactos/contactos.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0b3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 1858:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactos/contactos.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" routerLink=\"/contactos\">Lista de Curso</ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" routerLink=\"/home\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list *ngFor=\"let element of listaContactos\">  \n    <ion-item [routerLink]=\"['./', element.id]\">\n      <ion-avatar slot=\"start\">\n        <ion-img src= \"assets/img/avatar.png\"></ion-img>\n      </ion-avatar>\n      <ion-label>\n        {{element.id}} {{element.nombre}} {{element.apellidos}}\n      </ion-label>\n    </ion-item>  \n  </ion-list>\n</ion-content>\n\n\n\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_contactos_contactos_module_ts.js.map