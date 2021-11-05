(self["webpackChunkclase3"] = self["webpackChunkclase3"] || []).push([["common"],{

/***/ 8225:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 3150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 2954);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 9461);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 7330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 2377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 2954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 1269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 1652:
/*!*********************************************************************************!*\
  !*** ./src/app/contactos/asistencia-manual/asistencia-manual-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsistenciaManualPageRoutingModule": () => (/* binding */ AsistenciaManualPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _asistencia_manual_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asistencia-manual.page */ 5527);




const routes = [
    {
        path: '',
        component: _asistencia_manual_page__WEBPACK_IMPORTED_MODULE_0__.AsistenciaManualPage
    }
];
let AsistenciaManualPageRoutingModule = class AsistenciaManualPageRoutingModule {
};
AsistenciaManualPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AsistenciaManualPageRoutingModule);



/***/ }),

/***/ 907:
/*!*************************************************************************!*\
  !*** ./src/app/contactos/asistencia-manual/asistencia-manual.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsistenciaManualPageModule": () => (/* binding */ AsistenciaManualPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _asistencia_manual_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asistencia-manual-routing.module */ 1652);
/* harmony import */ var _asistencia_manual_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asistencia-manual.page */ 5527);







let AsistenciaManualPageModule = class AsistenciaManualPageModule {
};
AsistenciaManualPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _asistencia_manual_routing_module__WEBPACK_IMPORTED_MODULE_0__.AsistenciaManualPageRoutingModule
        ],
        declarations: [_asistencia_manual_page__WEBPACK_IMPORTED_MODULE_1__.AsistenciaManualPage]
    })
], AsistenciaManualPageModule);



/***/ }),

/***/ 5527:
/*!***********************************************************************!*\
  !*** ./src/app/contactos/asistencia-manual/asistencia-manual.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsistenciaManualPage": () => (/* binding */ AsistenciaManualPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_asistencia_manual_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./asistencia-manual.page.html */ 8304);
/* harmony import */ var _asistencia_manual_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asistencia-manual.page.scss */ 4713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _contactos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contactos.service */ 8160);







let AsistenciaManualPage = class AsistenciaManualPage {
    constructor(router, toastController, contactoService) {
        this.router = router;
        this.toastController = toastController;
        this.contactoService = contactoService;
        this.contact = {
            id: ' ',
            nombre: '',
            apellidos: '',
            email: '',
        };
    }
    ngOnInit() {
    }
    onSubmit() {
        const navigationExtras = {
            state: {
                contact: this.contact
            }
        };
        if (this.validateModel(this.contact)) {
            this.contactoService.addContacto(this.contact.id.valueOf(), this.contact.nombre.valueOf(), this.contact.apellidos.valueOf(), this.contact.email.valueOf()),
                this.presentToast('Datos registrados correctamente');
            this.router.navigate(['/contactos'], navigationExtras);
        }
        else {
            this.presentToast('Falta completar: ' + this.campo);
        }
    }
    /**
      * Muestra un toast al usuario (mensaje flotante)
      * @param message Mensaje a presentar al usuario
      * @param duration Duración el toast, este es opcional
      */
    presentToast(message, duration) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: duration ? duration : 2000
            });
            toast.present();
        });
    }
    validateModel(model) {
        for (var [key, value] of Object.entries(model)) {
            if (value === '') {
                this.campo = key;
                return false;
            }
        }
        return true;
    }
};
AsistenciaManualPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _contactos_service__WEBPACK_IMPORTED_MODULE_2__.ContactosService }
];
AsistenciaManualPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-asistencia-manual',
        template: _raw_loader_asistencia_manual_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_asistencia_manual_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AsistenciaManualPage);



/***/ }),

/***/ 8160:
/*!************************************************!*\
  !*** ./src/app/contactos/contactos.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactosService": () => (/* binding */ ContactosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 476);



let ContactosService = class ContactosService {
    constructor(toastController) {
        this.toastController = toastController;
        this.listaContactos = [
            {
                id: 1,
                nombre: 'Juan',
                apellidos: 'Perez Gómez',
                email: 'jp@gmail.com'
            },
            {
                id: 2,
                nombre: 'Maria',
                apellidos: 'Silva Vera',
                email: 'asdasdadsa@gmail.com'
            },
            {
                id: 3,
                nombre: 'Maria',
                apellidos: 'Silva Vera',
                email: 'asdasdadsa@gmail.com'
            },
            {
                id: 4,
                nombre: 'Maria',
                apellidos: 'Silva Vera',
                email: 'asdasdadsa@gmail.com'
            },
            {
                id: 5,
                nombre: 'Maria',
                apellidos: 'Silva Vera',
                email: 'asdasdadsa@gmail.com'
            },
            {
                id: 6,
                nombre: 'Maria',
                apellidos: 'Silva Vera',
                email: 'asdasdadsa@gmail.com'
            },
            {
                id: 7,
                nombre: 'Maria',
                apellidos: 'Silva Vera',
                email: 'asdasdadsa@gmail.com'
            },
            {
                id: 8,
                nombre: 'Maria',
                apellidos: 'Silva Vera',
                email: 'asdasdadsa@gmail.com'
            },
            {
                id: 9,
                nombre: 'Maria',
                apellidos: 'Silva Vera',
                email: 'asdasdadsa@gmail.com'
            },
            {
                id: 10,
                nombre: 'Maria',
                apellidos: 'Silva Vera',
                email: 'asdasdadsa@gmail.com'
            },
        ];
    }
    getContactos() {
        return [...this.listaContactos];
    }
    getContacto(contactoId) {
        return Object.assign({}, this.listaContactos.find(contacto => { return contacto.id === contactoId; }));
    }
    addContacto(id, nombre, apellidos, email) {
        this.listaContactos.push({
            id: this.listaContactos.length + 1,
            nombre,
            apellidos,
            email
        });
    }
    /**
     * Muestra un toast al usuario (mensaje flotante)
     * @param message Mensaje a presentar al usuario
     * @param duration Duración el toast, este es opcional
     */
    presentToast(message, duration) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: duration ? duration : 2000
            });
            toast.present();
        });
    }
    deleteContacto(contactoId) {
        this.listaContactos = this.listaContactos.filter(contacto => { return contacto.id !== contactoId; });
    }
};
ContactosService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
ContactosService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ContactosService);



/***/ }),

/***/ 4845:
/*!*******************************************************************************!*\
  !*** ./src/app/contactos/detalle-contacto/detalle-contacto-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleContactoPageRoutingModule": () => (/* binding */ DetalleContactoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _detalle_contacto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-contacto.page */ 9862);




const routes = [
    {
        path: '',
        component: _detalle_contacto_page__WEBPACK_IMPORTED_MODULE_0__.DetalleContactoPage
    }
];
let DetalleContactoPageRoutingModule = class DetalleContactoPageRoutingModule {
};
DetalleContactoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetalleContactoPageRoutingModule);



/***/ }),

/***/ 9313:
/*!***********************************************************************!*\
  !*** ./src/app/contactos/detalle-contacto/detalle-contacto.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleContactoPageModule": () => (/* binding */ DetalleContactoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _detalle_contacto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-contacto-routing.module */ 4845);
/* harmony import */ var _detalle_contacto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-contacto.page */ 9862);







let DetalleContactoPageModule = class DetalleContactoPageModule {
};
DetalleContactoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detalle_contacto_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetalleContactoPageRoutingModule
        ],
        declarations: [_detalle_contacto_page__WEBPACK_IMPORTED_MODULE_1__.DetalleContactoPage]
    })
], DetalleContactoPageModule);



/***/ }),

/***/ 9862:
/*!*********************************************************************!*\
  !*** ./src/app/contactos/detalle-contacto/detalle-contacto.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleContactoPage": () => (/* binding */ DetalleContactoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_detalle_contacto_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./detalle-contacto.page.html */ 5063);
/* harmony import */ var _detalle_contacto_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-contacto.page.scss */ 9689);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _contactos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contactos.service */ 8160);






let DetalleContactoPage = class DetalleContactoPage {
    constructor(activateRoute, contactoService) {
        this.activateRoute = activateRoute;
        this.contactoService = contactoService;
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            const idContactoRecibido = paramMap.get('contactoId');
            alert(idContactoRecibido);
            alert(this.contactoService.getContacto(parseInt(idContactoRecibido)));
            this.contacto = this.contactoService.getContacto(parseInt(idContactoRecibido));
        });
    }
};
DetalleContactoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _contactos_service__WEBPACK_IMPORTED_MODULE_2__.ContactosService }
];
DetalleContactoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-detalle-contacto',
        template: _raw_loader_detalle_contacto_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_detalle_contacto_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetalleContactoPage);



/***/ }),

/***/ 3185:
/*!******************************************!*\
  !*** ./src/app/input/input.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_input_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./input.component.html */ 6340);
/* harmony import */ var _input_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.component.scss */ 5464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let InputComponent = class InputComponent {
    constructor() { }
};
InputComponent.ctorParameters = () => [];
InputComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
InputComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-input',
        template: _raw_loader_input_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_input_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InputComponent);



/***/ }),

/***/ 7698:
/*!***************************************!*\
  !*** ./src/app/input/input.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputModule": () => (/* binding */ InputModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.component */ 3185);





let InputModule = class InputModule {
};
InputModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule],
        exports: [_input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent]
    })
], InputModule);



/***/ }),

/***/ 1803:
/*!*******************************************************!*\
  !*** ./src/app/login/signup/signup-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 2303);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 5980:
/*!***********************************************!*\
  !*** ./src/app/login/signup/signup.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 1803);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 2303);
/* harmony import */ var _input_input_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../input/input.module */ 7698);








let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _input_input_module__WEBPACK_IMPORTED_MODULE_2__.InputModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule,
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage],
    })
], SignupPageModule);



/***/ }),

/***/ 2303:
/*!*********************************************!*\
  !*** ./src/app/login/signup/signup.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 1804);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 5407);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuario.service */ 8707);







let SignupPage = class SignupPage {
    constructor(router, toastController, usuarioService) {
        this.router = router;
        this.toastController = toastController;
        this.usuarioService = usuarioService;
        this.usuario = {
            name: '',
            user: '',
            password: '',
            confirm_password: ''
        };
    }
    ngOnInit() {
    }
    onSubmit() {
        const navigationExtras = {
            state: {
                user: this.usuario
            }
        };
        if (this.usuario.confirm_password != this.usuario.password) {
            this.presentToast('Las contraseñas no coinciden');
        }
        else {
            if (this.validateModel(this.usuario)) {
                this.usuarioService.addUsuario(this.usuario.name.valueOf(), this.usuario.user.valueOf(), this.usuario.password.valueOf()),
                    this.presentToast('Datos registrados correctamente');
                this.router.navigate(['/login'], navigationExtras);
            }
            else {
                this.presentToast('Falta completar: ' + this.campo);
            }
        }
    }
    /**
      * Muestra un toast al usuario (mensaje flotante)
      * @param message Mensaje a presentar al usuario
      * @param duration Duración el toast, este es opcional
      */
    presentToast(message, duration) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: duration ? duration : 2000
            });
            toast.present();
        });
    }
    validateModel(model) {
        for (var [key, value] of Object.entries(model)) {
            if (value === '') {
                this.campo = key;
                return false;
            }
        }
        return true;
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuariosService }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignupPage);



/***/ }),

/***/ 8707:
/*!*************************************************!*\
  !*** ./src/app/login/signup/usuario.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuariosService": () => (/* binding */ UsuariosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let UsuariosService = class UsuariosService {
    constructor() {
        this.listaUsuario = [
            {
                name: 'User',
                user: 'usuario',
                password: '1234'
            },
        ];
    }
    getUsuario(usuarioInput) {
        return Object.assign({}, this.listaUsuario.find(usuario => { return usuario.user === usuarioInput; }));
    }
    addUsuario(name, user, password) {
        this.listaUsuario.push({
            name,
            user,
            password
        });
    }
};
UsuariosService.ctorParameters = () => [];
UsuariosService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], UsuariosService);



/***/ }),

/***/ 4713:
/*!*************************************************************************!*\
  !*** ./src/app/contactos/asistencia-manual/asistencia-manual.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #f5f5f3;\n}\nion-toolbar ion-button {\n  text-transform: initial;\n  font-size: 17px;\n}\nion-content {\n  --background: #f5f5f3;\n}\nion-content ion-item {\n  border-radius: 50px;\n  height: 55px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.08);\n  --highlight-height: 0px;\n}\nion-content ion-item ion-input {\n  font-size: 18px;\n  --padding-top: 20px;\n  --padding-bottom: 15px;\n  --padding-start: 5px;\n}\nion-content ion-item a {\n  font-size: 17px;\n  letter-spacing: 0.5px;\n  text-decoration: none;\n}\nion-content h1 {\n  text-align: center;\n  font-weight: 700;\n  font-size: 26px;\n  color: #010100;\n  margin-bottom: 15%;\n}\nion-content #form {\n  margin-top: 15%;\n  padding-left: 30px;\n  padding-right: 30px;\n}\nion-content #form ion-button {\n  margin-top: 35px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n  --box-shadow: none;\n}\nion-content p {\n  text-align: center;\n  color: #b6b6b6;\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaXN0ZW5jaWEtbWFudWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7QUFDSTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBQUNOO0FBR0U7RUFxQkUscUJBQUE7QUFwQko7QUFDSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsdUJBQUE7QUFDTjtBQUNNO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUNWO0FBRU07RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQUFWO0FBS0k7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUhOO0FBTUk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUpOO0FBTU07RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQVFJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFOTiIsImZpbGUiOiJhc2lzdGVuY2lhLW1hbnVhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xuICBcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLWNvbnRlbnQge1xuXG4gICAgaW9uLWl0ZW17XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgYm94LXNoYWRvdzogMXB4IDhweCA4cHggMHB4IHJnYmEoMCwwLDAsMC4wOCk7XG4gICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDBweDtcbiAgXG4gICAgICBpb24taW5wdXR7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgICAgIH1cbiAgXG4gICAgICBhIHtcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgfVxuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmMztcbiAgXG4gICAgaDEge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgIGNvbG9yOiAjMDEwMTAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTUlO1xuICAgIH1cbiAgXG4gICAgI2Zvcm0ge1xuICAgICAgbWFyZ2luLXRvcDogMTUlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgXG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBib3gtc2hhZG93OiAxcHggOHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgcCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogI2I2YjZiNjtcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ 9689:
/*!***********************************************************************!*\
  !*** ./src/app/contactos/detalle-contacto/detalle-contacto.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhbGxlLWNvbnRhY3RvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 5464:
/*!********************************************!*\
  !*** ./src/app/input/input.component.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  border-radius: 50px;\n  height: 55px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.08);\n  --highlight-height: 0px;\n}\nion-item ion-input {\n  font-size: 18px;\n  --padding-top: 20px;\n  --padding-bottom: 15px;\n  --padding-start: 5px;\n}\nion-item a {\n  font-size: 17px;\n  letter-spacing: 0.5px;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSx1QkFBQTtBQUNKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBQ1I7QUFFSTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBQVIiLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBib3gtc2hhZG93OiAxcHggOHB4IDhweCAwcHggcmdiYSgwLDAsMCwwLjA4KTtcbiAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDBweDtcblxuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ 5407:
/*!***********************************************!*\
  !*** ./src/app/login/signup/signup.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #f5f5f3;\n}\nion-toolbar ion-button {\n  text-transform: initial;\n  font-size: 17px;\n}\nion-content {\n  --background: #f5f5f3;\n}\nion-content ion-item {\n  border-radius: 50px;\n  height: 55px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.08);\n  --highlight-height: 0px;\n}\nion-content ion-item ion-input {\n  font-size: 18px;\n  --padding-top: 20px;\n  --padding-bottom: 15px;\n  --padding-start: 5px;\n}\nion-content ion-item a {\n  font-size: 17px;\n  letter-spacing: 0.5px;\n  text-decoration: none;\n}\nion-content h1 {\n  text-align: center;\n  font-weight: 700;\n  font-size: 26px;\n  color: #010100;\n  margin-bottom: 15%;\n}\nion-content #form {\n  margin-top: 15%;\n  padding-left: 30px;\n  padding-right: 30px;\n}\nion-content #form ion-button {\n  margin-top: 35px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n  --box-shadow: none;\n}\nion-content p {\n  text-align: center;\n  color: #b6b6b6;\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKO0FBQ0k7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUFDTjtBQUdFO0VBcUJFLHFCQUFBO0FBcEJKO0FBQ0k7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLHVCQUFBO0FBQ047QUFDTTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFDVjtBQUVNO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFBVjtBQUtJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFITjtBQU1JO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFKTjtBQU1NO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0FBSlI7QUFRSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTk4iLCJmaWxlIjoic2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XG4gIFxuICAgIGlvbi1idXR0b24ge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgfVxuICB9XG4gIFxuICBpb24tY29udGVudCB7XG5cbiAgICBpb24taXRlbXtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICBib3gtc2hhZG93OiAxcHggOHB4IDhweCAwcHggcmdiYSgwLDAsMCwwLjA4KTtcbiAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMHB4O1xuICBcbiAgICAgIGlvbi1pbnB1dHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICAgICAgfVxuICBcbiAgICAgIGEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICB9XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xuICBcbiAgICBoMSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgY29sb3I6ICMwMTAxMDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNSU7XG4gICAgfVxuICBcbiAgICAjZm9ybSB7XG4gICAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBcbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCA4cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBwIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjYjZiNmI2O1xuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB9XG4gIH0iXX0= */");

/***/ }),

/***/ 8304:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactos/asistencia-manual/asistencia-manual.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button color=\"primary\" routerLink=\"/home\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <h1>Registro De Asistencia<br />Manual</h1>\n\n    <div id=\"form\">\n        <ion-item class=\"ion-margin-bottom\">\n            <ion-input [(ngModel)]=\"contact.nombre\" placeholder=\"Nombre\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-item class=\"ion-margin-bottom\">\n            <ion-input [(ngModel)]=\"contact.apellidos\" placeholder=\"Apellidos\" type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item class=\"ion-margin-bottom\">\n            <ion-input [(ngModel)]=\"contact.email\" placeholder=\"email@ejemplo.com\" [type]=\"type\"></ion-input>\n        </ion-item>\n\n        <ion-button expand=\"block\" shape=\"round\" (click)=\"onSubmit()\">Registrar Asistencia</ion-button>\n    </div>\n\n</ion-content>");

/***/ }),

/***/ 5063:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactos/detalle-contacto/detalle-contacto.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title slot=\"start\" color=\"primary\">{{contacto.nombre}} {{contacto.apellidos}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" routerLink=\"/contactos\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> \n  <ion-item>\n    <ion-text>{{contacto.email}}</ion-text>\n  </ion-item>\n</ion-content>  \n\n");

/***/ }),

/***/ 6340:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/input/input.component.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-item class=\"ion-margin-bottom\">\n  <ion-input [type]=\"type\" [placeholder]=\"placeholder\"></ion-input> \n</ion-item>\n");

/***/ }),

/***/ 1804:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/signup/signup.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button color=\"primary\" routerLink=\"/login\">\n          Acceder\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <h1>Registro De<br />Usuario</h1>\n  \n    <div id=\"form\">\n      <ion-item class=\"ion-margin-bottom\">\n        <ion-input [(ngModel)]=\"usuario.name\" placeholder=\"Nombre\" [type]=\"text\"></ion-input> \n      </ion-item>\n\n      <ion-item class=\"ion-margin-bottom\">\n        <ion-input [(ngModel)]=\"usuario.user\"  placeholder=\"Nombre de Usuario\" [type]=\"text\"></ion-input> \n      </ion-item>\n  \n      <ion-item class=\"ion-margin-bottom\">\n        <ion-input [(ngModel)]=\"usuario.password\" type=\"password\" placeholder=\"Contraseña\"></ion-input> \n      </ion-item>\n  \n      <ion-item class=\"ion-margin-bottom\">\n        <ion-input [(ngModel)]=\"usuario.confirm_password\" type=\"password\" placeholder=\"Confirme Contraseña\"></ion-input> \n      </ion-item>\n  \n      <ion-button expand=\"block\" shape=\"round\" (click)=\"onSubmit()\">Registro</ion-button>\n    </div>\n    <p>Al oprimir 'Registro' estas aceptando <br />nuestros terminos y condiciones.</p>\n  </ion-content>");

/***/ })

}]);
//# sourceMappingURL=common.js.map