(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular\angular practice\projectmerge\project\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/must-match.validator */ "h2xV");
/* harmony import */ var _models_lawyer_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/lawyer.model */ "caOc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_bcn_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/bcn.service */ "9ZKw");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





















function RegisterComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Birthdate is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_39_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_39_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegisterComponent_mat_error_39_mat_error_1_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RegisterComponent_mat_error_39_mat_error_2_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.data.email.errors == null ? null : ctx_r4.data.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.data.email.errors == null ? null : ctx_r4.data.email.errors.email);
} }
function RegisterComponent_mat_error_44_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Contact number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_44_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Contact number must be lenght of 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegisterComponent_mat_error_44_mat_error_1_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RegisterComponent_mat_error_44_mat_error_2_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.data.phnno.errors == null ? null : ctx_r5.data.phnno.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.data.phnno.errors == null ? null : ctx_r5.data.phnno.errors.pattern);
} }
function RegisterComponent_mat_error_455_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_458_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_460_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Validating...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_463_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " A valid BCN is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_464_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " This bcn is not registered (Use 123456789123) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_469_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "University Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_474_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Year is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_474_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "year must be a valid in the format YYYY");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_474_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegisterComponent_mat_error_474_mat_error_1_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RegisterComponent_mat_error_474_mat_error_2_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.data.year.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.data.year.errors.pattern);
} }
function RegisterComponent_mat_error_479_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Area of Practice is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_484_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_484_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password must be at least 8 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_484_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegisterComponent_mat_error_484_mat_error_1_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RegisterComponent_mat_error_484_mat_error_2_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.data.password.errors == null ? null : ctx_r14.data.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.data.password.errors.minlength);
} }
function RegisterComponent_mat_error_489_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_489_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Passwords must match");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_489_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegisterComponent_mat_error_489_mat_error_1_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RegisterComponent_mat_error_489_mat_error_2_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r15.data.confirmpassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r15.data.confirmpassword.errors.mustMatch);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function (a0) { return { "is-loading": a0 }; };
const _c2 = function (a0) { return { "is-danger": a0 }; };
const _c3 = function () { return ["/login"]; };
class RegisterComponent {
    constructor(formBuilder, router, _snackBar, authSer, bcnService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this._snackBar = _snackBar;
        this.authSer = authSer;
        this.bcnService = bcnService;
        this.submitted = false;
        this.maxDate = new Date();
        this.hide = true;
        this.hide1 = true;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            birthdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            phnno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^\d{10}$/)]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            year: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^\d{4}$/)]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            uni: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            prac: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]],
            confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            bcn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required], [this.bcnService.bcnValidator()]],
            nationality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_1__["MustMatch"])('password', 'confirmpassword')
        });
    }
    hasError(field, error) {
        if (error === 'any' || error === '') {
            return (this.registerForm.controls[field].dirty &&
                this.registerForm.controls[field].invalid);
        }
        //  this.frmLogin.controls[field].pending;
        return (this.registerForm.controls[field].dirty &&
            this.registerForm.controls[field].hasError(error));
    }
    get data() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        const value = this.registerForm.value;
        const form = new _models_lawyer_model__WEBPACK_IMPORTED_MODULE_2__["Lawyer"](value.firstname, value.lastname, value.birthdate, value.email, value.phnno, value.year, value.address, value.uni, value.city, value.gender, value.prac, value.password, value.bcn, value.nationality);
        this.authSer.createLawyer(form, "lawyer");
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_bcn_service__WEBPACK_IMPORTED_MODULE_7__["BcnValidationService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 498, vars: 44, consts: [[1, "bg-image"], [1, "grid-container", "bg-text"], [1, "vache", 2, "text-align", "center"], ["fxLayout", "column", 3, "formGroup", "ngSubmit"], [1, "w-100"], ["type", "text", "matInput", "", "placeholder", "First Name", "formControlName", "firstname"], ["matSuffix", ""], [4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Last Name", "formControlName", "lastname"], ["matInput", "", "formControlName", "birthdate", 3, "matDatepicker", "max"], [3, "for"], ["color", "primary"], ["picker2", ""], ["aria-label", "Select", "matInput", "", "required", "", "placeholder", "Gender", "formControlName", "gender", 1, "w-100"], ["value", "Male", 2, "margin-left", "5px"], ["value", "Female", 2, "margin-left", "5px"], ["value", "Other", 2, "margin-left", "5px"], ["matInput", "", "placeholder", "abc@example.com", "formControlName", "email", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Contact number", "formControlName", "phnno", 3, "ngClass"], ["formControlName", "nationality"], ["value", "Afghan"], ["value", "Albanian"], ["value", "Algerian"], ["value", "American"], ["value", "Andorran"], ["value", "Angolan"], ["value", "Antiguans"], ["value", "Argentinean"], ["value", "Armenian"], ["value", "Australian"], ["value", "Austrian"], ["value", "Azerbaijani"], ["value", "Bahamian"], ["value", "Bahraini"], ["value", "Bangladeshi"], ["value", "Barbadian"], ["value", "Barbudans"], ["value", "Batswana"], ["value", "Belarusian"], ["value", "Belgian"], ["value", "Belizean"], ["value", "Beninese"], ["value", "Bhutanese"], ["value", "Bolivian"], ["value", "Bosnian"], ["value", "Brazilian"], ["value", "British"], ["value", "Bruneian"], ["value", "Bulgarian"], ["value", "Burkinabe"], ["value", "Burmese"], ["value", "Burundian"], ["value", "Cambodian"], ["value", "Cameroonian"], ["value", "Canadian"], ["value", "Cape Verdean"], ["value", "Central African"], ["value", "Chadian"], ["value", "Chilean"], ["value", "Chinese"], ["value", "Colombian"], ["value", "Comoran"], ["value", "Congolese"], ["value", "Costa Rican"], ["value", "Croatian"], ["value", "Cuban"], ["value", "Cypriot"], ["value", "Czech"], ["value", "Danish"], ["value", "Djibouti"], ["value", "Dominican"], ["value", "Dutch"], ["value", "Dutchman"], ["value", "Dutchwoman"], ["value", "East Timorese"], ["value", "Ecuadorean"], ["value", "Egyptian"], ["value", "Emirian"], ["value", "Equatorial Guinean"], ["value", "Eritrean"], ["value", "Estonian"], ["value", "Ethiopian"], ["value", "Fijian"], ["value", "Filipino"], ["value", "Finnish"], ["value", "French"], ["value", "Gabonese"], ["value", "Gambian"], ["value", "Georgian"], ["value", "German"], ["value", "Ghanaian"], ["value", "Greek"], ["value", "Grenadian"], ["value", "Guatemalan"], ["value", "Guinea-Bissauan"], ["value", "Guinean"], ["value", "Guyanese"], ["value", "Haitian"], ["value", "Herzegovinian"], ["value", "Honduran"], ["value", "Hungarian"], ["value", "I-Kiribati"], ["value", "Icelander"], ["value", "Indian"], ["value", "Indonesian"], ["value", "Iranian"], ["value", "Iraqi"], ["value", "Irish"], ["value", "Israeli"], ["value", "Italian"], ["value", "Ivorian"], ["value", "Jamaican"], ["value", "Japanese"], ["value", "Jordanian"], ["value", "Kazakhstani"], ["value", "Kenyan"], ["value", "Kittian and Nevisian"], ["value", "Kuwaiti"], ["value", "Kyrgyz"], ["value", "Laotian"], ["value", "Latvian"], ["value", "Lebanese"], ["value", "Liberian"], ["value", "Libyan"], ["value", "Liechtensteiner"], ["value", "Lithuanian"], ["value", "Luxembourger"], ["value", "Macedonian"], ["value", "Malagasy"], ["value", "Malawian"], ["value", "Malaysian"], ["value", "Maldivan"], ["value", "Malian"], ["value", "Maltese"], ["value", "Marshallese"], ["value", "Mauritanian"], ["value", "Mauritian"], ["value", "Mexican"], ["value", "Micronesian"], ["value", "Moldovan"], ["value", "Monacan"], ["value", "Mongolian"], ["value", "Moroccan"], ["value", "Mosotho"], ["value", "Motswana"], ["value", "Mozambican"], ["value", "Namibian"], ["value", "Nauruan"], ["value", "Nepalese"], ["value", "Netherlander"], ["value", "New Zealander"], ["value", "Ni-Vanuatu"], ["value", "Nicaraguan"], ["value", "Nigerian"], ["value", "Nigerien"], ["value", "North Korean"], ["value", "Northern Irish"], ["value", "Norwegian"], ["value", "Omani"], ["value", "Pakistani"], ["value", "Palauan"], ["value", "Panamanian"], ["value", "Papua New Guinean"], ["value", "Paraguayan"], ["value", "Peruvian"], ["value", "Polish"], ["value", "Portuguese"], ["value", "Qatari"], ["value", "Romanian"], ["value", "Russian"], ["value", "Rwandan"], ["value", "Saint Lucian"], ["value", "Salvadoran"], ["value", "Samoan"], ["value", "San Marinese"], ["value", "Sao Tomean"], ["value", "Saudi"], ["value", "Scottish"], ["value", "Senegalese"], ["value", "Serbian"], ["value", "Seychellois"], ["value", "Sierra Leonean"], ["value", "Singaporean"], ["value", "Slovakian"], ["value", "Slovenian"], ["value", "Solomon Islander"], ["value", "Somali"], ["value", "South African"], ["value", "South Korean"], ["value", "Spanish"], ["value", "Sri Lankan"], ["value", "Sudanese"], ["value", "Surinamer"], ["value", "Swazi"], ["value", "Swedish"], ["value", "Swiss"], ["value", "Syrian"], ["value", "Taiwanese"], ["value", "Tajik"], ["value", "Tanzanian"], ["value", "Thai"], ["value", "Togolese"], ["value", "Tongan"], ["value", "Trinidadian or Tobagonian"], ["value", "Tunisian"], ["value", "Turkish"], ["value", "Tuvaluan"], ["value", "Ugandan"], ["value", "Ukrainian"], ["value", "Uruguayan"], ["value", "Uzbekistani"], ["value", "Venezuelan"], ["value", "Vietnamese"], ["value", "Welsh"], ["value", "Yemenite"], ["value", "Zambian"], ["value", "Zimbabwean"], ["type", "text", "matInput", "", "placeholder", "City", "formControlName", "city"], ["type", "text", "matInput", "", "placeholder", "Address", "formControlName", "address"], [1, "control", 3, "ngClass"], ["type", "text", "matInput", "", "placeholder", "Bar council number(i.e. 123456789123)", "formControlName", "bcn", 3, "ngClass"], ["type", "text", "matInput", "", "placeholder", "University", "formControlName", "uni"], ["type", "number", "matInput", "", "placeholder", "year since you are practicing", "formControlName", "year"], ["type", "text", "matInput", "", "placeholder", "Area of Practice", "formControlName", "prac"], ["type", "password", "matInput", "", "placeholder", "Password", "formControlName", "password", 3, "type", "ngClass"], ["matSuffix", "", 2, "cursor", "pointer", 3, "click"], ["type", "password", "matInput", "", "placeholder", "Confirm Password", "formControlName", "confirmpassword", 3, "type", "ngClass"], [1, "w-100", 2, "display", "flex"], ["mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-stroked-button", "", "color", "warn", "type", "reset", 2, "margin-left", "10px", 3, "click"], [1, "flex-spacer"], [2, "margin-top", "5px", 3, "routerLink"], [1, "invalid-feedback"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Register as a Lawyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "sentiment_very_satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, RegisterComponent_mat_error_10_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "sentiment_very_satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, RegisterComponent_mat_error_15_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Birthdate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "mat-datepicker-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "mat-datepicker", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, RegisterComponent_mat_error_24_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-radio-group", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Gender: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-radio-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-radio-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "female");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-radio-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Enter your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, RegisterComponent_mat_error_39_Template, 3, 2, "mat-error", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, RegisterComponent_mat_error_44_Template, 3, 2, "mat-error", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Nationality");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " Afghan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " Albanian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " Algerian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, " American ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, " Andorran ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, " Angolan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, " Antiguans ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " Argentinean ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, " Armenian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, " Australian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, " Austrian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, " Azerbaijani ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, " Bahamian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "mat-option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, " Bahraini ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "mat-option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, " Bangladeshi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "mat-option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, " Barbadian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "mat-option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, " Barbudans ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "mat-option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, " Batswana ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, " Belarusian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "mat-option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, " Belgian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "mat-option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, " Belizean ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "mat-option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, " Beninese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "mat-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, " Bhutanese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "mat-option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, " Bolivian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "mat-option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, " Bosnian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "mat-option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, " Brazilian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "mat-option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, " British ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "mat-option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, " Bruneian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "mat-option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, " Bulgarian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "mat-option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, " Burkinabe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "mat-option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, " Burmese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "mat-option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, " Burundian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "mat-option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, " Cambodian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "mat-option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, " Cameroonian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "mat-option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, " Canadian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "mat-option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, " Cape Verdean ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "mat-option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, " Central African ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "mat-option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, " Chadian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "mat-option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, " Chilean ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "mat-option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, " Chinese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "mat-option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, " Colombian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "mat-option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, " Comoran ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "mat-option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, " Congolese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "mat-option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, " Congolese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "mat-option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, " Costa Rican ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "mat-option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, " Croatian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "mat-option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, " Cuban ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "mat-option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, " Cypriot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "mat-option", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, " Czech ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "mat-option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, " Danish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "mat-option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, " Djibouti ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "mat-option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, " Dominican ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "mat-option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, " Dominican ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "mat-option", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](156, " Dutch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "mat-option", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, " Dutchman ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "mat-option", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, " Dutchwoman ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "mat-option", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162, " East Timorese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "mat-option", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, " Ecuadorean ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "mat-option", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166, " Egyptian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "mat-option", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, " Emirian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "mat-option", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](170, " Equatorial Guinean ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "mat-option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](172, " Eritrean ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "mat-option", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, " Estonian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "mat-option", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, " Ethiopian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "mat-option", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, " Fijian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "mat-option", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, " Filipino ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "mat-option", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, " Finnish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "mat-option", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, " French ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "mat-option", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, " Gabonese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "mat-option", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, " Gambian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "mat-option", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, " Georgian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "mat-option", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](192, " German ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "mat-option", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, " Ghanaian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "mat-option", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](196, " Greek ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "mat-option", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](198, " Grenadian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "mat-option", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](200, " Guatemalan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](201, "mat-option", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](202, " Guinea-Bissauan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "mat-option", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, " Guinean ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "mat-option", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](206, " Guyanese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](207, "mat-option", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, " Haitian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "mat-option", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, " Herzegovinian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "mat-option", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](212, " Honduran ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "mat-option", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](214, " Hungarian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "mat-option", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](216, " I-Kiribati ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "mat-option", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](218, " Icelander ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "mat-option", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](220, " Indian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "mat-option", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](222, " Indonesian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](223, "mat-option", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](224, " Iranian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "mat-option", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](226, " Iraqi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "mat-option", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](228, " Irish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "mat-option", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](230, " Irish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "mat-option", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, " Israeli ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "mat-option", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](234, " Italian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "mat-option", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, " Ivorian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "mat-option", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](238, " Jamaican ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](239, "mat-option", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](240, " Japanese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "mat-option", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, " Jordanian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "mat-option", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](244, " Kazakhstani ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "mat-option", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](246, " Kenyan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "mat-option", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](248, " Kittian and Nevisian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "mat-option", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](250, " Kuwaiti ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "mat-option", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](252, " Kyrgyz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "mat-option", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](254, " Laotian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "mat-option", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](256, " Latvian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "mat-option", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](258, " Lebanese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](259, "mat-option", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](260, " Liberian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "mat-option", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](262, " Libyan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](263, "mat-option", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](264, " Liechtensteiner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](265, "mat-option", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](266, " Lithuanian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](267, "mat-option", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](268, " Luxembourger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](269, "mat-option", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](270, " Macedonian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](271, "mat-option", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](272, " Malagasy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](273, "mat-option", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](274, " Malawian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](275, "mat-option", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](276, " Malaysian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](277, "mat-option", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](278, " Maldivan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](279, "mat-option", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](280, " Malian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](281, "mat-option", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](282, " Maltese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](283, "mat-option", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](284, " Marshallese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](285, "mat-option", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](286, " Mauritanian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](287, "mat-option", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](288, " Mauritian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](289, "mat-option", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](290, " Mexican ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](291, "mat-option", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, " Micronesian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "mat-option", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](294, " Moldovan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "mat-option", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](296, " Monacan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](297, "mat-option", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](298, " Mongolian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](299, "mat-option", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](300, " Moroccan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](301, "mat-option", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](302, " Mosotho ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](303, "mat-option", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](304, " Motswana ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](305, "mat-option", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](306, " Mozambican ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](307, "mat-option", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](308, " Namibian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](309, "mat-option", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](310, " Nauruan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](311, "mat-option", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](312, " Nepalese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](313, "mat-option", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](314, " Netherlander ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](315, "mat-option", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](316, " New Zealander ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](317, "mat-option", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](318, " Ni-Vanuatu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](319, "mat-option", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](320, " Nicaraguan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](321, "mat-option", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](322, " Nigerian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](323, "mat-option", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](324, " Nigerien ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](325, "mat-option", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](326, " North Korean ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](327, "mat-option", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](328, " Northern Irish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](329, "mat-option", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](330, " Norwegian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](331, "mat-option", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](332, " Omani ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](333, "mat-option", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](334, " Pakistani ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](335, "mat-option", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](336, " Palauan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](337, "mat-option", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](338, " Panamanian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](339, "mat-option", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](340, " Papua New Guinean ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](341, "mat-option", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](342, " Paraguayan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](343, "mat-option", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](344, " Peruvian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](345, "mat-option", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](346, " Polish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](347, "mat-option", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](348, " Portuguese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](349, "mat-option", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](350, " Qatari ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](351, "mat-option", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](352, " Romanian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](353, "mat-option", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](354, " Russian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](355, "mat-option", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](356, " Rwandan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](357, "mat-option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](358, " Saint Lucian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](359, "mat-option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](360, " Salvadoran ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](361, "mat-option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](362, " Samoan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](363, "mat-option", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](364, " San Marinese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](365, "mat-option", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](366, " Sao Tomean ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](367, "mat-option", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](368, " Saudi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](369, "mat-option", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](370, " Scottish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](371, "mat-option", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](372, " Senegalese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](373, "mat-option", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](374, " Serbian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](375, "mat-option", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](376, " Seychellois ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](377, "mat-option", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](378, " Sierra Leonean ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](379, "mat-option", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](380, " Singaporean ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](381, "mat-option", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](382, " Slovakian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](383, "mat-option", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](384, " Slovenian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](385, "mat-option", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](386, " Solomon Islander ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](387, "mat-option", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](388, " Somali ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](389, "mat-option", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](390, " South African ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](391, "mat-option", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](392, " South Korean ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](393, "mat-option", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](394, " Spanish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](395, "mat-option", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](396, " Sri Lankan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](397, "mat-option", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](398, " Sudanese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](399, "mat-option", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](400, " Surinamer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](401, "mat-option", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](402, " Swazi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](403, "mat-option", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](404, " Swedish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](405, "mat-option", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](406, " Swiss ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](407, "mat-option", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](408, " Syrian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](409, "mat-option", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](410, " Taiwanese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](411, "mat-option", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](412, " Tajik ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](413, "mat-option", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](414, " Tanzanian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](415, "mat-option", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](416, " Thai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](417, "mat-option", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](418, " Togolese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](419, "mat-option", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](420, " Tongan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](421, "mat-option", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](422, " Trinidadian or Tobagonian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](423, "mat-option", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](424, " Tunisian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](425, "mat-option", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](426, " Turkish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](427, "mat-option", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](428, " Tuvaluan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](429, "mat-option", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](430, " Ugandan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](431, "mat-option", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](432, " Ukrainian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](433, "mat-option", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](434, " Uruguayan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](435, "mat-option", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](436, " Uzbekistani ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](437, "mat-option", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](438, " Venezuelan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](439, "mat-option", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](440, " Vietnamese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](441, "mat-option", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](442, " Welsh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](443, "mat-option", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](444, " Welsh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](445, "mat-option", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](446, " Yemenite ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](447, "mat-option", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](448, " Zambian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](449, "mat-option", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](450, " Zimbabwean ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](451, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](452, "input", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](453, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](454, "location_city");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](455, RegisterComponent_mat_error_455_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](456, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](457, "textarea", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](458, RegisterComponent_mat_error_458_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](459, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](460, RegisterComponent_div_460_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](461, "div", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](462, "input", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](463, RegisterComponent_mat_error_463_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](464, RegisterComponent_mat_error_464_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](465, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](466, "input", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](467, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](468, "school");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](469, RegisterComponent_mat_error_469_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](470, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](471, "input", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](472, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](473, "date_range");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](474, RegisterComponent_mat_error_474_Template, 3, 2, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](475, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](476, "input", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](477, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](478, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](479, RegisterComponent_mat_error_479_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](480, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](481, "input", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](482, "mat-icon", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegisterComponent_Template_mat_icon_click_482_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](483);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](484, RegisterComponent_mat_error_484_Template, 3, 2, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](485, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](486, "input", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](487, "mat-icon", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegisterComponent_Template_mat_icon_click_487_listener() { return ctx.hide1 = !ctx.hide1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](488);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](489, RegisterComponent_mat_error_489_Template, 3, 2, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](490, "div", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](491, "button", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](492, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](493, "button", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_493_listener() { return ctx.onReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](494, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](495, "span", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](496, "a", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](497, "Already registered? Login here");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.firstname.errors == null ? null : ctx.data.firstname.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.lastname.errors == null ? null : ctx.data.lastname.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r2)("max", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.birthdate.errors == null ? null : ctx.data.birthdate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](31, _c0, ctx.submitted && ctx.data.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.data.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](33, _c0, ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.data.phnno.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](411);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.city.errors == null ? null : ctx.data.city.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.address.errors == null ? null : ctx.data.address.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.registerForm.get("bcn").pending);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](35, _c1, ctx.registerForm.controls["bcn"].pending));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](37, _c2, ctx.hasError("bcn", "any")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasError("bcn", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.registerForm.controls["bcn"].errors == null ? null : ctx.registerForm.controls["bcn"].errors.bcnExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.uni.errors == null ? null : ctx.data.uni.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.data.year.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.prac.errors == null ? null : ctx.data.prac.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](39, _c0, ctx.submitted && ctx.data.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.data.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.hide1 ? "password" : "text")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](41, _c0, ctx.submitted && ctx.data.confirmpassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.hide1 ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.data.confirmpassword.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](43, _c3));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepicker"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioButton"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__["DefaultClassDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]], styles: [".w-100[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    margin: 6px auto;\r\n\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  background-image: url('/assets/bg.jpg');\r\n  \r\n  filter: blur(8px);\r\n  -webkit-filter: blur(8px);\r\n\r\n  \r\n  height: 160%;\r\n\r\n  \r\n  background-position:inherit;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.vache[_ngcontent-%COMP%]{\r\n  margin: 20px auto;\r\n    font-family:Georgia, 'Times New Roman', Times, serif;\r\n    font-weight: bold;\r\n    font-size: medium;\r\n    font-style: normal;\r\n}\r\n\r\n.bg-text[_ngcontent-%COMP%] {\r\n  color: black;\r\n  \r\n  \r\n  position: absolute;\r\n  top: 20%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 2;\r\n  width: 50%;\r\n  height: 20%;\r\n  \r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCOztBQUVwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxUUFBcVE7RUFDclEsdUNBQXVDO0VBQ3ZDLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIseUJBQXlCOztFQUV6QixnQkFBZ0I7RUFDaEIsWUFBWTs7RUFFWixzQ0FBc0M7RUFDdEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7SUFDZixvREFBb0Q7SUFDcEQsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnctMTAwIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDZweCBhdXRvO1xyXG5cclxufVxyXG5cclxuLmJnLWltYWdlIHtcclxuICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbnByLmJyaWdodHNwb3RjZG4uY29tL2RpbXM0L2RlZmF1bHQvZmY5MzIxMy8yMTQ3NDgzNjQ3L3N0cmlwL3RydWUvY3JvcC8xODc1eDEyNTArMCswL3Jlc2l6ZS84ODB4NTg3IS9xdWFsaXR5LzkwLz91cmw9aHR0cDolMkYlMkZucHItYnJpZ2h0c3BvdC5zMy5hbWF6b25hd3MuY29tJTJGbGVnYWN5JTJGc2l0ZXMlMkZ3dnBuJTJGZmlsZXMlMkYyMDE1MTElMkZTY2FsZXNvZkp1c3RpY2UuanBnXCIpOyAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9iZy5qcGcnKTtcclxuICAvKiBBZGQgdGhlIGJsdXIgZWZmZWN0ICovXHJcbiAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuXHJcbiAgLyogRnVsbCBoZWlnaHQgKi9cclxuICBoZWlnaHQ6IDE2MCU7XHJcblxyXG4gIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246aW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi52YWNoZXtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGZvbnQtZmFtaWx5Okdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4uYmctdGV4dCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xyXG4gIC8qIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7ICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB6LWluZGV4OiAyO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgLyogcGFkZGluZzogMjBweDsgKi9cclxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "2TVA":
/*!**********************************************!*\
  !*** ./src/app/addcase/addcase.component.ts ***!
  \**********************************************/
/*! exports provided: AddcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcaseComponent", function() { return AddcaseComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_addcase_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/addcase.model */ "OiMz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
















const _c0 = ["addcase"];
class AddcaseComponent {
    constructor(breakpointObserver, caseService, router) {
        this.breakpointObserver = breakpointObserver;
        this.caseService = caseService;
        this.router = router;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
    }
    ngOnInit() {
    }
    onSubmit(form) {
        const value = this.form.value;
        console.log(value);
        const Case = new _models_addcase_model__WEBPACK_IMPORTED_MODULE_2__["Addcase"](value.stampNo, value.fillingDate, value.status, value.bench, value.petitioner, value.respondent, value.forum, value.district, value.postalCode, value.act, value.RegNo, value.RegDate, value.stage, value.description);
        this.caseService.addCase(Case);
        this.router.navigate(["/caseinfo"]);
    }
}
AddcaseComponent.ɵfac = function AddcaseComponent_Factory(t) { return new (t || AddcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_4__["CaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AddcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddcaseComponent, selectors: [["app-addcase"]], viewQuery: function AddcaseComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, decls: 101, vars: 7, consts: [[1, "bg-image"], [1, "grid-container", "bg-text"], [1, "mat-h1", 2, "font-family", "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "font-weight", "bold"], [3, "ngSubmit"], ["addcase", "ngForm"], [2, "margin", "0px 30px"], ["fxLayout", "column"], [1, "half-width"], ["for", "stampNo"], ["matInput", "", "id", "stampNo", "name", "stampNo", "ngModel", "", "required", ""], ["matInput", "", "required", "", "placeholder", "Filling Date", "name", "fillingDate", "id", "fillingDate", "ngModel", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["ngModel", "", "name", "status", "id", "status", "required", ""], ["value", "pre-admitted"], ["value", "admitted"], ["value", "disposed"], ["value", "rejected"], ["value", "reference-case"], ["fxLayout", "row"], ["placeholder", "Forum", "name", "forum", "id", "forum", "ngModel", "", "required", ""], ["value", "High Court"], ["value", "Supreme Court"], ["value", "XYZ", "disabled", ""], [1, "half-width", 2, "margin-left", "10px"], ["ngModel", "", "name", "bench", "id", "bench", "required", ""], ["value", "division"], ["value", "single"], ["matInput", "", "name", "petitioner", "id", "petitioner", "ngModel", "", "required", ""], ["matInput", "", "name", "respondent", "id", "respondent", "ngModel", "", "required", ""], ["matInput", "", "placeholder", "Ex. Morbi", "name", "district", "id", "district", "ngModel", "", "required", ""], ["matInput", "", "maxlength", "6", "placeholder", "Ex. 363642", "name", "postalCode", "id", "postalCode", "ngModel", "", "required", ""], ["postalCode", ""], ["matInput", "", "name", "act", "id", "act", "ngModel", ""], ["matInput", "", "name", "RegNo", "id", "RegNo", "ngModel", ""], ["matInput", "", "name", "stage", "id", "stage", "placeholder", "e.g. DUE FOR ADMISSION, FOR FINAL HEARING", "ngModel", ""], [1, "full-width"], ["matInput", "", "maxlength", "256", "placeholder", "Description", "name", "description", "id", "description", "ngModel", ""], ["message", ""], [3, "align"], ["matInput", "", "placeholder", "Reg. Date", "name", "RegDate", "id", "RegDate", "ngModel", "", 3, "matDatepicker"], ["picker1", ""], [2, "text-align", "left"], ["mat-raised-button", "", "color", "primary", "type", "submit"], ["mat-raised-button", "", "color", "basic", "type", "reset"]], template: function AddcaseComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Add New Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AddcaseComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Stamp Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "mat-datepicker-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "mat-datepicker", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "pre-admitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "admitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "disposed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "rejected");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "reference-case");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "High Court");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Supreme Court");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "XYZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Bench");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "DIVISION");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "SINGLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "FULL");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Petitioner");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Respondent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "District");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Postal Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Act");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Reg Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Stage");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "mat-form-field", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "mat-hint", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](91, "mat-datepicker-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "mat-datepicker", null, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "mat-card-actions", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](69);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](86);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _r2.value.length, " / 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("align", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _r3.value.length, " / 256");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r4);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatHint"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n\n.half-width[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.border[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"/assets/bg.jpg\");\n  \n  filter: blur(5px);\n  -webkit-filter: blur(5px);\n  \n  height: 160%;\n  \n  background-position: inherit;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bg-text[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: bold;\n  \n  position: absolute;\n  top: 10%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  width: 80%;\n  height: 20%;\n  \n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZGNhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTtFQUNJLFVBQUE7QUFHSjs7QUFEQTtFQUNHLGFBQUE7QUFJSDs7QUFEQTtFQUNFLGdCQUFBO0FBSUY7O0FBREE7RUFDRSxtQkFBQTtFQUVBLHVDQUFBO0VBRUEsd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBRUEsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsc0NBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFGIiwiZmlsZSI6ImFkZGNhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4gOmF1dG87XHJcbn1cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcbi5oYWxmLXdpZHRoe1xyXG4gICAgd2lkdGg6NTAlO1xyXG59XHJcbi5ib3JkZXJ7XHJcbiAgIHBhZGRpbmc6MTVweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uYmctaW1hZ2Uge1xyXG4gIC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9ucHIuYnJpZ2h0c3BvdGNkbi5jb20vZGltczQvZGVmYXVsdC9mZjkzMjEzLzIxNDc0ODM2NDcvc3RyaXAvdHJ1ZS9jcm9wLzE4NzV4MTI1MCswKzAvcmVzaXplLzg4MHg1ODchL3F1YWxpdHkvOTAvP3VybD1odHRwOiUyRiUyRm5wci1icmlnaHRzcG90LnMzLmFtYXpvbmF3cy5jb20lMkZsZWdhY3klMkZzaXRlcyUyRnd2cG4lMkZmaWxlcyUyRjIwMTUxMSUyRlNjYWxlc29mSnVzdGljZS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2JnLmpwZycpO1xyXG5cclxuICAvKiBBZGQgdGhlIGJsdXIgZWZmZWN0ICovXHJcbiAgZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNXB4KTtcclxuXHJcbiAgLyogRnVsbCBoZWlnaHQgKi9cclxuICBoZWlnaHQ6IDE2MCU7XHJcblxyXG4gIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246aW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5iZy10ZXh0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLyogYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTsgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDIwJTtcclxuICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "2iwg":
/*!************************************************!*\
  !*** ./src/app/disposed/disposed.component.ts ***!
  \************************************************/
/*! exports provided: DisposedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisposedComponent", function() { return DisposedComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");












function DisposedComponent_mat_expansion_panel_7_mat_panel_description_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-panel-description", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "V/s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const case_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 3, case_r2.petitioner, 0, 25));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](8, 7, case_r2.respondent, 0, 25));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](case_r2.status);
} }
function DisposedComponent_mat_expansion_panel_7_mat_panel_description_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "V/s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const case_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 3, case_r2.petitioner, 0, 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](8, 7, case_r2.respondent, 0, 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](case_r2.status);
} }
function DisposedComponent_mat_expansion_panel_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-expansion-panel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("opened", function DisposedComponent_mat_expansion_panel_7_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.panelOpenState = true; })("closed", function DisposedComponent_mat_expansion_panel_7_Template_mat_expansion_panel_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-expansion-panel-header", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DisposedComponent_mat_expansion_panel_7_mat_panel_description_6_Template, 11, 11, "mat-panel-description", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DisposedComponent_mat_expansion_panel_7_mat_panel_description_8_Template, 12, 11, "mat-panel-description", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DisposedComponent_mat_expansion_panel_7_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const case_r2 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.onView(case_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DisposedComponent_mat_expansion_panel_7_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const case_r2 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.onDelete(case_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Permanent delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const case_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("collapsedHeight", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 6, ctx_r0.isHandset$) ? "129px" : "")("expandedHeight", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 8, ctx_r0.isHandset$) ? "129px" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", i_r3 + 1, " ) ", case_r2.stampNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 10, ctx_r0.isHandset$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 12, ctx_r0.isHandset$) === false);
} }
const _c0 = function () { return [10, 25, 50]; };
function DisposedComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-paginator", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx_r1.cases.length)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
} }
class DisposedComponent {
    constructor(breakpointObserver, caseService, router) {
        this.breakpointObserver = breakpointObserver;
        this.caseService = caseService;
        this.router = router;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
        this.panelOpenState = false;
    }
    ngOnInit() {
        this.caseSub = this.caseService.getCasesUpdateListener().subscribe((data) => {
            this.cases = data;
        });
        this.caseService.getdisposedCases();
    }
    onView(id) {
        this.caseService.getCaseData(id);
        this.caseService.getLinkedClient(id);
        this.router.navigate(["/caseinfo"]);
    }
    onDelete(id) {
        this.caseService.deleteCase(id);
        this.cases = this.cases.filter(function (e) { return e._id !== id; });
        this.caseService.setCases(this.cases);
        // this.caseService.getCases();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.caseSub.unsubscribe();
    }
}
DisposedComponent.ɵfac = function DisposedComponent_Factory(t) { return new (t || DisposedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_3__["CaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
DisposedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DisposedComponent, selectors: [["app-disposed"]], decls: 11, vars: 2, consts: [[1, "bg-image"], [1, "grid-container", "bg-text"], [2, "display", "flex"], [1, "mat-h1", 2, "font-family", "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "font-weight", "bold"], [1, "flex-spacer"], ["multi", ""], ["class", "panel", "hideToggle", "", 3, "opened", "closed", 4, "ngFor", "ngForOf"], ["style", "width: 95%;", 4, "ngIf"], ["hideToggle", "", 1, "panel", 3, "opened", "closed"], [2, "padding-top", "9px", 3, "collapsedHeight", "expandedHeight"], ["fxLayout", "column", 4, "ngIf"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 2, "margin-left", "10px", 3, "click"], ["fxLayout", "column"], [2, "color", "red"], [2, "color", "black"], [2, "color", "red", "margin-left", "10px"], [2, "margin-left", "10px"], [2, "margin-right", "70px", "color", "black"], [2, "width", "95%"], [3, "length", "pageSize", "pageSizeOptions"]], template: function DisposedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Disposed/Rejected Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-accordion", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DisposedComponent_mat_expansion_panel_7_Template, 16, 14, "mat-expansion-panel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DisposedComponent_div_10_Template, 2, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cases);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cases.length != 0);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelDescription"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 90%;\n}\n\n.panel[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRpc3Bvc2VkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQUNKIiwiZmlsZSI6ImRpc3Bvc2VkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcbiJdfQ== */", ".bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"/assets/bg.jpg\");\n  \n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  \n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bg-text[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: normal;\n  \n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 95%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFFQSx1Q0FBQTtFQUVBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBSko7O0FBT0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBRUEsbUJBQUE7QUFMSiIsImZpbGUiOiJjaGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5iZy1pbWFnZSB7XHJcbiAgICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9ucHIuYnJpZ2h0c3BvdGNkbi5jb20vZGltczQvZGVmYXVsdC9mZjkzMjEzLzIxNDc0ODM2NDcvc3RyaXAvdHJ1ZS9jcm9wLzE4NzV4MTI1MCswKzAvcmVzaXplLzg4MHg1ODchL3F1YWxpdHkvOTAvP3VybD1odHRwOiUyRiUyRm5wci1icmlnaHRzcG90LnMzLmFtYXpvbmF3cy5jb20lMkZsZWdhY3klMkZzaXRlcyUyRnd2cG4lMkZmaWxlcyUyRjIwMTUxMSUyRlNjYWxlc29mSnVzdGljZS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYmcuanBnJyk7XHJcblxyXG4gICAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xyXG4gICAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG5cclxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmJnLXRleHQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLy8gei1pbmRleDogMjtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "3agv":
/*!******************************************!*\
  !*** ./src/app/cases/cases.component.ts ***!
  \******************************************/
/*! exports provided: CasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasesComponent", function() { return CasesComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");












function CasesComponent_mat_expansion_panel_7_mat_panel_description_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-panel-description", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "V/s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const case_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 3, case_r2.petitioner, 0, 25));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](8, 7, case_r2.respondent, 0, 25));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](case_r2.status);
} }
function CasesComponent_mat_expansion_panel_7_mat_panel_description_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "V/s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const case_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 3, case_r2.petitioner, 0, 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](8, 7, case_r2.respondent, 0, 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](case_r2.status);
} }
function CasesComponent_mat_expansion_panel_7_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CasesComponent_mat_expansion_panel_7_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const case_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.onDispose(case_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Dispose");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CasesComponent_mat_expansion_panel_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-expansion-panel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("opened", function CasesComponent_mat_expansion_panel_7_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.panelOpenState = true; })("closed", function CasesComponent_mat_expansion_panel_7_Template_mat_expansion_panel_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-expansion-panel-header", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CasesComponent_mat_expansion_panel_7_mat_panel_description_6_Template, 11, 11, "mat-panel-description", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CasesComponent_mat_expansion_panel_7_mat_panel_description_8_Template, 12, 11, "mat-panel-description", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CasesComponent_mat_expansion_panel_7_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const case_r2 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.onView(case_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CasesComponent_mat_expansion_panel_7_button_13_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CasesComponent_mat_expansion_panel_7_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const case_r2 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.onDelete(case_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Permanent delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const case_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("collapsedHeight", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 7, ctx_r0.isHandset$) ? "129px" : "")("expandedHeight", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 9, ctx_r0.isHandset$) ? "129px" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", i_r3 + 1, " ) ", case_r2.stampNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 11, ctx_r0.isHandset$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 13, ctx_r0.isHandset$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(case_r2.status === "disposed" || case_r2.status === "rejected"));
} }
const _c0 = function () { return [10, 25, 50]; };
function CasesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-paginator", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx_r1.cases.length)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
} }
class CasesComponent {
    constructor(breakpointObserver, caseService, router) {
        this.breakpointObserver = breakpointObserver;
        this.caseService = caseService;
        this.router = router;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
        this.panelOpenState = false;
    }
    ngOnInit() {
        this.caseSub = this.caseService.getCasesUpdateListener().subscribe((data) => {
            this.cases = data;
        });
        this.caseService.getCases();
    }
    onView(id) {
        this.caseService.getCaseData(id);
        this.caseService.getLinkedClient(id);
        this.router.navigate(["/caseinfo"]);
    }
    onDispose(data) {
        this.caseService.disposeCase(data._id);
        this.cases = this.cases.filter(function (e) {
            if (e._id !== data._id) {
                return e;
            }
            else {
                return e.status = "disposed";
            }
        });
        // data.status = "disposed"
        // this.cases = [...this.cases, data]
        this.caseService.setCases(this.cases);
        // this.caseService.getCases();
    }
    onDelete(id) {
        this.caseService.deleteCase(id);
        this.cases = this.cases.filter(function (e) { return e._id !== id; });
        this.caseService.setCases(this.cases);
        // this.caseService.getCases();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.caseSub.unsubscribe();
    }
}
CasesComponent.ɵfac = function CasesComponent_Factory(t) { return new (t || CasesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_3__["CaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CasesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CasesComponent, selectors: [["app-cases"]], decls: 11, vars: 2, consts: [[1, "bg-image"], [1, "grid-container", "bg-text"], [2, "display", "flex"], [1, "mat-h1", 2, "font-family", "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "font-weight", "bold"], [1, "flex-spacer"], ["multi", ""], ["class", "panel", "hideToggle", "", 3, "opened", "closed", 4, "ngFor", "ngForOf"], ["style", "width: 95%;", 4, "ngIf"], ["hideToggle", "", 1, "panel", 3, "opened", "closed"], [2, "padding-top", "9px", 3, "collapsedHeight", "expandedHeight"], ["fxLayout", "column", 4, "ngIf"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", "style", "margin-left: 10px;", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 2, "margin-left", "10px", 3, "click"], ["fxLayout", "column"], [2, "color", "red"], [2, "color", "black"], [2, "color", "red", "margin-left", "10px"], [2, "margin-left", "10px"], [2, "margin-right", "70px", "color", "black"], [2, "width", "95%"], [3, "length", "pageSize", "pageSizeOptions"]], template: function CasesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-accordion", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CasesComponent_mat_expansion_panel_7_Template, 17, 15, "mat-expansion-panel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CasesComponent_div_10_Template, 2, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cases);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cases.length != 0);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelDescription"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 90%;\n}\n\n.panel[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhc2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQUNKIiwiZmlsZSI6ImNhc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcbiJdfQ== */", ".bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"/assets/bg.jpg\");\n  \n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  \n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bg-text[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: normal;\n  \n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 95%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFFQSx1Q0FBQTtFQUVBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBSko7O0FBT0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBRUEsbUJBQUE7QUFMSiIsImZpbGUiOiJjaGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5iZy1pbWFnZSB7XHJcbiAgICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9ucHIuYnJpZ2h0c3BvdGNkbi5jb20vZGltczQvZGVmYXVsdC9mZjkzMjEzLzIxNDc0ODM2NDcvc3RyaXAvdHJ1ZS9jcm9wLzE4NzV4MTI1MCswKzAvcmVzaXplLzg4MHg1ODchL3F1YWxpdHkvOTAvP3VybD1odHRwOiUyRiUyRm5wci1icmlnaHRzcG90LnMzLmFtYXpvbmF3cy5jb20lMkZsZWdhY3klMkZzaXRlcyUyRnd2cG4lMkZmaWxlcyUyRjIwMTUxMSUyRlNjYWxlc29mSnVzdGljZS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYmcuanBnJyk7XHJcblxyXG4gICAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xyXG4gICAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG5cclxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmJnLXRleHQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLy8gei1pbmRleDogMjtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "7Ufg":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");














function MainNavComponent_mat_icon_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MainNavComponent_mat_icon_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "arrow_drop_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MainNavComponent_a_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add new Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MainNavComponent_a_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "All Cases");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MainNavComponent_a_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Pre-Admitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MainNavComponent_a_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Admitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MainNavComponent_a_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Disposed/Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class MainNavComponent {
    constructor(breakpointObserver, authService, router) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.router = router;
        this.link1 = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
    }
    ngOnInit() {
        this.userName = this.authService.getuserName();
    }
    selectList() {
        this.link1 = !this.link1;
    }
    logoutLawyer() {
        this.authService.logoutLawyer();
    }
}
MainNavComponent.ɵfac = function MainNavComponent_Factory(t) { return new (t || MainNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
MainNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainNavComponent, selectors: [["app-main-nav"]], ngContentSelectors: _c0, decls: 75, vars: 20, consts: [[1, "example-header"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"], [2, "padding-right", "10px"], [1, "flex-spacer"], [2, "font-size", "x-small"], ["mat-icon-button", ""], ["routerLink", "/chats"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/profile"], ["mat-menu-item", "", 3, "click"], [1, "example-container"], ["opened", "", 1, "example-sidenav", 3, "mode", "fixedInViewport", "fixedTopGap", "fixedBottomGap", "opened"], ["sidenav", ""], ["mat-list-item", "", "routerLink", "/dashboard"], ["mat-list-item", "", 3, "click"], [4, "ngIf"], ["mat-list-item", "", "routerLink", "addcase", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/cases", 4, "ngIf"], ["mat-list-item", "", "routerLink", "preadmittedcases", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/admittedcases", 4, "ngIf"], ["mat-list-item", "", "routerLink", "disposedcases", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/cases"], ["mat-list-item", "", "routerLink", "/try"], ["mat-list-item", "", "routerLink", "/clientlist"], [1, "footer"], [1, "rights"], [1, "contact"], [2, "margin-bottom", "0", "font-size", "medium"], ["mat-list-item", "", "routerLink", "addcase"], ["mat-list-item", "", "routerLink", "preadmittedcases"], ["mat-list-item", "", "routerLink", "/admittedcases"], ["mat-list-item", "", "routerLink", "disposedcases"]], template: function MainNavComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainNavComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](33); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Lawyer Portal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "gavel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-menu", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainNavComponent_Template_button_click_27_listener() { return ctx.logoutLawyer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-sidenav-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-sidenav", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainNavComponent_Template_a_click_40_listener() { return ctx.selectList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Cases ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, MainNavComponent_mat_icon_43_Template, 2, 0, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, MainNavComponent_mat_icon_44_Template, 2, 0, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, MainNavComponent_a_45_Template, 2, 0, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, MainNavComponent_a_46_Template, 2, 0, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, MainNavComponent_a_47_Template, 2, 0, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, MainNavComponent_a_48_Template, 2, 0, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, MainNavComponent_a_49_Template, 2, 0, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Lawbook");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Reference Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "mat-toolbar", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "small", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "\u00A9 All rights reserved for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Lawyer Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Contact Us \u2709");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "lawyer.portal2020@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 14, ctx.userName));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 16, ctx.isHandset$) ? "over" : "side")("fixedInViewport", "fixed")("fixedTopGap", 60)("fixedBottomGap", 60)("opened", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 18, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.link1 === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.link1 === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.link1 === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.link1 === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.link1 === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.link1 === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.link1 === true);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  bottom: 60px;\n  left: 0;\n  right: 0;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n}\n\n.example-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: black;\n  color: white;\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  margin-bottom: 2px;\n  width: 100%;\n  background-color: black;\n  color: white;\n  display: inline-block;\n}\n\n.footer[_ngcontent-%COMP%]   .rights[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 18px;\n  font-size: x-small;\n}\n\n.footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  float: right;\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  font-weight: 300;\n  font-size: small;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #889b9a;\n}\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1haW4tbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSx1QkFBQTtFQUNBLFlBQUE7RUFJQSxxQkFBQTtBQUhKOztBQVdFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFSSjs7QUFXRTtFQUNFLFlBQUE7RUFDRSxzRUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFSTjs7QUFtQkU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFoQko7O0FBbUJFO0VBQ0UsZUFBQTtBQWhCSiIsImZpbGUiOiJtYWluLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuc2lkZW5hdiAubWF0LXRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICB9XHJcblxyXG4gIC5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYwcHg7XHJcbiAgICBib3R0b206IDYwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1zaWRlbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IzY3M2FiNztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjojNjczYWI3O1xyXG4gICAgLy8gYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjNjczYWI3KSwgdG8oIzk3ODFiZCkpO1xyXG4gICAgLy8gY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLy8gLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDNweCAjNjczYWI3O1xyXG4gICAgLy8gICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzY3M2FiNztcclxuICAgIC8vICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzY3M2FiNztcclxuXHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyIC5yaWdodHN7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgIGZvbnQtc2l6ZTp4LXNtYWxsO1xyXG4gIH1cclxuXHJcbiAgLmZvb3RlciAuY29udGFjdHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgZm9udC1mYW1pbHk6Q2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gLmZvb3RlciAuZm9sbG93e1xyXG4gIC8vICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIC8vICAgbWFyZ2luLXJpZ2h0OiAyMDBweDtcclxuICAvLyAgIGZvbnQtZmFtaWx5OkNhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAvLyAgICAgZm9udC13ZWlnaHQ6IDMzMDtcclxuICAvLyAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAvLyB9XHJcblxyXG4gIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjpyZ2IoMTM2LCAxNTUsIDE1NCk7XHJcbiAgfVxyXG5cclxuICBhOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "9ZKw":
/*!*****************************************!*\
  !*** ./src/app/services/bcn.service.ts ***!
  \*****************************************/
/*! exports provided: BcnValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BcnValidationService", function() { return BcnValidationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class BcnValidationService {
    constructor() {
        this.bcnList = [123456789123, 525252545454, 290729072907];
    }
    checkIfbcnExists(bcn) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(!this.bcnList.includes(parseInt(bcn)));
    }
    bcnValidator() {
        return (control) => {
            return this.checkIfbcnExists(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => {
                console.log(res);
                // if res is true, exists, return true
                return res ? { bcnExists: true } : null;
                // NB: Return null if there is no error
            }));
        };
    }
}
BcnValidationService.ɵfac = function BcnValidationService_Factory(t) { return new (t || BcnValidationService)(); };
BcnValidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BcnValidationService, factory: BcnValidationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
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

/***/ "C+JG":
/*!*******************************************************!*\
  !*** ./src/app/pre-admitted/preadmitted.component.ts ***!
  \*******************************************************/
/*! exports provided: PreadmittedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreadmittedComponent", function() { return PreadmittedComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");












function PreadmittedComponent_mat_expansion_panel_7_mat_panel_description_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-panel-description", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "V/s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const case_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 3, case_r2.petitioner, 0, 25));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](8, 7, case_r2.respondent, 0, 25));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](case_r2.status);
} }
function PreadmittedComponent_mat_expansion_panel_7_mat_panel_description_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "V/s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const case_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 3, case_r2.petitioner, 0, 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](8, 7, case_r2.respondent, 0, 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](case_r2.status);
} }
function PreadmittedComponent_mat_expansion_panel_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-expansion-panel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("opened", function PreadmittedComponent_mat_expansion_panel_7_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.panelOpenState = true; })("closed", function PreadmittedComponent_mat_expansion_panel_7_Template_mat_expansion_panel_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-expansion-panel-header", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PreadmittedComponent_mat_expansion_panel_7_mat_panel_description_6_Template, 11, 11, "mat-panel-description", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PreadmittedComponent_mat_expansion_panel_7_mat_panel_description_8_Template, 12, 11, "mat-panel-description", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PreadmittedComponent_mat_expansion_panel_7_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const case_r2 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.onView(case_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PreadmittedComponent_mat_expansion_panel_7_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const case_r2 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.onDispose(case_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Dispose");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PreadmittedComponent_mat_expansion_panel_7_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const case_r2 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.onDelete(case_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Permanent delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const case_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("collapsedHeight", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 6, ctx_r0.isHandset$) ? "129px" : "")("expandedHeight", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 8, ctx_r0.isHandset$) ? "129px" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", i_r3 + 1, " ) ", case_r2.stampNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 10, ctx_r0.isHandset$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 12, ctx_r0.isHandset$) === false);
} }
const _c0 = function () { return [10, 25, 50]; };
function PreadmittedComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-paginator", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx_r1.cases.length)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
} }
class PreadmittedComponent {
    constructor(breakpointObserver, caseService, router) {
        this.breakpointObserver = breakpointObserver;
        this.caseService = caseService;
        this.router = router;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
        this.panelOpenState = false;
    }
    ngOnInit() {
        this.caseSub = this.caseService.getCasesUpdateListener().subscribe((data) => {
            this.cases = data;
        });
        this.caseService.getpreadmittedCases();
    }
    onView(id) {
        this.caseService.getCaseData(id);
        this.caseService.getLinkedClient(id);
        this.router.navigate(["/caseinfo"]);
    }
    onDispose(id) {
        this.caseService.disposeCase(id);
        this.cases = this.cases.filter(function (e) { return e._id !== id; });
        this.caseService.setCases(this.cases);
        // this.caseService.getCases();
    }
    onDelete(id) {
        this.caseService.deleteCase(id);
        this.cases = this.cases.filter(function (e) { return e._id !== id; });
        this.caseService.setCases(this.cases);
        // this.caseService.getCases();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.caseSub.unsubscribe();
    }
}
PreadmittedComponent.ɵfac = function PreadmittedComponent_Factory(t) { return new (t || PreadmittedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_3__["CaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
PreadmittedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PreadmittedComponent, selectors: [["app-preadmitted"]], decls: 11, vars: 2, consts: [[1, "bg-image"], [1, "grid-container", "bg-text"], [2, "display", "flex"], [1, "mat-h1", 2, "font-family", "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "font-weight", "bold"], [1, "flex-spacer"], ["multi", ""], ["class", "panel", "hideToggle", "", 3, "opened", "closed", 4, "ngFor", "ngForOf"], ["style", "width: 95%;", 4, "ngIf"], ["hideToggle", "", 1, "panel", 3, "opened", "closed"], [2, "padding-top", "9px", 3, "collapsedHeight", "expandedHeight"], ["fxLayout", "column", 4, "ngIf"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 2, "margin-left", "10px", 3, "click"], ["fxLayout", "column"], [2, "color", "red"], [2, "color", "black"], [2, "color", "red", "margin-left", "10px"], [2, "margin-left", "10px"], [2, "margin-right", "70px", "color", "black"], [2, "width", "95%"], [3, "length", "pageSize", "pageSizeOptions"]], template: function PreadmittedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Pre-Admitted Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-accordion", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PreadmittedComponent_mat_expansion_panel_7_Template, 18, 14, "mat-expansion-panel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, PreadmittedComponent_div_10_Template, 2, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cases);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cases.length != 0);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelDescription"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 90%;\n}\n\n.panel[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByZWFkbWl0dGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQUNKIiwiZmlsZSI6InByZWFkbWl0dGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcbiJdfQ== */", ".bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"/assets/bg.jpg\");\n  \n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  \n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bg-text[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: normal;\n  \n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 95%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFFQSx1Q0FBQTtFQUVBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBSko7O0FBT0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBRUEsbUJBQUE7QUFMSiIsImZpbGUiOiJjaGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5iZy1pbWFnZSB7XHJcbiAgICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9ucHIuYnJpZ2h0c3BvdGNkbi5jb20vZGltczQvZGVmYXVsdC9mZjkzMjEzLzIxNDc0ODM2NDcvc3RyaXAvdHJ1ZS9jcm9wLzE4NzV4MTI1MCswKzAvcmVzaXplLzg4MHg1ODchL3F1YWxpdHkvOTAvP3VybD1odHRwOiUyRiUyRm5wci1icmlnaHRzcG90LnMzLmFtYXpvbmF3cy5jb20lMkZsZWdhY3klMkZzaXRlcyUyRnd2cG4lMkZmaWxlcyUyRjIwMTUxMSUyRlNjYWxlc29mSnVzdGljZS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYmcuanBnJyk7XHJcblxyXG4gICAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xyXG4gICAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG5cclxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmJnLXRleHQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLy8gei1pbmRleDogMjtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "CG0s":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "Mnkj");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class ErrorComponent {
    constructor(data, errorService) {
        this.data = data;
        this.errorService = errorService;
    }
    ngOnInit() {
        this.errorSub = this.errorService.getErrorListener().subscribe(message => {
            this.data = { message: message };
        });
    }
    onHandleError() {
        this.errorService.handleError();
    }
    ngOnDestroy() {
        this.errorSub.unsubscribe();
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 8, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "mat-body-1"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "An Error Occurred!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Okay");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.message);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], encapsulation: 2 });


/***/ }),

/***/ "FyRX":
/*!******************************************************!*\
  !*** ./src/app/loginclient/loginclient.component.ts ***!
  \******************************************************/
/*! exports provided: LoginclientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginclientComponent", function() { return LoginclientComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function LoginclientComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Username or password is incorrect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginclientComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginclientComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/registerclient"]; };
class LoginclientComponent {
    constructor(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.submitted = false;
        this.hide = true;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    get data() { return this.loginForm.controls; }
    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }
        else {
            this.authService.loginClient(this.data.username.value, this.data.password.value, "client");
        }
    }
}
LoginclientComponent.ɵfac = function LoginclientComponent_Factory(t) { return new (t || LoginclientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
LoginclientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginclientComponent, selectors: [["app-loginclient"]], decls: 23, vars: 8, consts: [[1, "bg-image"], [1, "card", "bg-text"], ["role", "alert", 4, "ngIf"], [1, "vache", 2, "text-align", "center"], [3, "formGroup", "ngSubmit"], [2, "width", "60%", "margin-left", "20%", "margin-right", "20%"], ["type", "text", "matInput", "", "placeholder", "Username", "formControlName", "username"], ["matSuffix", ""], [4, "ngIf"], ["type", "password", "matInput", "", "placeholder", "Password", "formControlName", "password", 3, "type"], ["matSuffix", "", 2, "cursor", "pointer", 3, "click"], [2, "width", "60%", "margin-left", "20%", "margin-right", "20%", "margin-top", "20px", "display", "flex"], ["mat-raised-button", "", "color", "primary"], [1, "flex-spacer"], [3, "routerLink"], ["role", "alert"]], template: function LoginclientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginclientComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Login as a Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginclientComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginclientComponent_mat_error_11_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginclientComponent_Template_mat_icon_click_14_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginclientComponent_mat_error_16_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Don't have an account? Register here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.username.errors == null ? null : ctx.data.username.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.password.errors == null ? null : ctx.data.password.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: [".mast[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  width: 80%;\r\n}\r\n.vache[_ngcontent-%COMP%] {\r\n  margin: 20px auto;\r\n    font-family:Georgia, 'Times New Roman', Times, serif;\r\n    font-weight: bold;\r\n    font-size: medium;\r\n    font-style: normal;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  margin: 20px auto;\r\n  border-radius: 4px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.bg-image[_ngcontent-%COMP%] {\r\n\r\n\r\nbackground-image: url('/assets/bg.jpg');\r\n\r\nfilter: blur(8px);\r\n-webkit-filter: blur(8px);\r\n\r\n\r\nheight: 90%;\r\n\r\n\r\nbackground-position: center;\r\nbackground-repeat: no-repeat;\r\nbackground-size: cover;\r\n}\r\n.bg-text[_ngcontent-%COMP%] {\r\ncolor: black;\r\nfont-weight: bold;\r\n\r\nposition: absolute;\r\ntop: 50%;\r\nleft: 50%;\r\ntransform: translate(-50%, -50%);\r\nz-index: 2;\r\n\r\n\r\ntext-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luY2xpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaO0FBQ0E7RUFDRSxpQkFBaUI7SUFDZixvREFBb0Q7SUFDcEQsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0lBQ2hCLDRFQUE0RTtBQUNoRjtBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CLHFRQUFxUTtBQUNyUSx1Q0FBdUM7QUFDdkMsd0JBQXdCO0FBQ3hCLGlCQUFpQjtBQUNqQix5QkFBeUI7O0FBRXpCLGdCQUFnQjtBQUNoQixXQUFXOztBQUVYLHNDQUFzQztBQUN0QywyQkFBMkI7QUFDM0IsNEJBQTRCO0FBQzVCLHNCQUFzQjtBQUN0QjtBQUVBO0FBQ0EsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQiwrQkFBK0I7QUFDL0Isa0JBQWtCO0FBQ2xCLFFBQVE7QUFDUixTQUFTO0FBQ1QsZ0NBQWdDO0FBQ2hDLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQiIsImZpbGUiOiJsb2dpbmNsaWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hc3Qge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogODAlO1xyXG59XHJcbi52YWNoZSB7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBmb250LWZhbWlseTpHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLmJnLWltYWdlIHtcclxuLyogVGhlIGltYWdlIHVzZWQgKi9cclxuLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9ucHIuYnJpZ2h0c3BvdGNkbi5jb20vZGltczQvZGVmYXVsdC9mZjkzMjEzLzIxNDc0ODM2NDcvc3RyaXAvdHJ1ZS9jcm9wLzE4NzV4MTI1MCswKzAvcmVzaXplLzg4MHg1ODchL3F1YWxpdHkvOTAvP3VybD1odHRwOiUyRiUyRm5wci1icmlnaHRzcG90LnMzLmFtYXpvbmF3cy5jb20lMkZsZWdhY3klMkZzaXRlcyUyRnd2cG4lMkZmaWxlcyUyRjIwMTUxMSUyRlNjYWxlc29mSnVzdGljZS5qcGdcIik7ICovXHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9iZy5qcGcnKTtcclxuLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xyXG5maWx0ZXI6IGJsdXIoOHB4KTtcclxuLXdlYmtpdC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuXHJcbi8qIEZ1bGwgaGVpZ2h0ICovXHJcbmhlaWdodDogOTAlO1xyXG5cclxuLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmJnLXRleHQge1xyXG5jb2xvcjogYmxhY2s7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vKiBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxOyAqL1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogNTAlO1xyXG5sZWZ0OiA1MCU7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG56LWluZGV4OiAyO1xyXG4vKiB3aWR0aDogODAlOyAqL1xyXG4vKiBwYWRkaW5nOiAyMHB4OyAqL1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Gyf/":
/*!***********************************************!*\
  !*** ./src/app/services/websocket.service.ts ***!
  \***********************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class WebsocketService {
    constructor() {
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_0__["io"])('http://localhost:4000/');
    }
    joinRoom(data) {
        this.socket.emit('join', data);
    }
    sendMessage(data) {
        this.socket.emit('message', data);
    }
    newMessageReceived() {
        const observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            this.socket.on('new message', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }
    typing(data) {
        this.socket.emit('typing', data);
    }
    receivedTyping() {
        const observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            this.socket.on('typing', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }
}
WebsocketService.ɵfac = function WebsocketService_Factory(t) { return new (t || WebsocketService)(); };
WebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: WebsocketService, factory: WebsocketService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Jhgf":
/*!************************************************!*\
  !*** ./src/app/admitted/admitted.component.ts ***!
  \************************************************/
/*! exports provided: AdmittedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmittedComponent", function() { return AdmittedComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");












function AdmittedComponent_mat_expansion_panel_7_mat_panel_description_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-panel-description", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "V/s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const case_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 3, case_r2.petitioner, 0, 25));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](8, 7, case_r2.respondent, 0, 25));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](case_r2.status);
} }
function AdmittedComponent_mat_expansion_panel_7_mat_panel_description_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "V/s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const case_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 3, case_r2.petitioner, 0, 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](8, 7, case_r2.respondent, 0, 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](case_r2.status);
} }
function AdmittedComponent_mat_expansion_panel_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-expansion-panel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("opened", function AdmittedComponent_mat_expansion_panel_7_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.panelOpenState = true; })("closed", function AdmittedComponent_mat_expansion_panel_7_Template_mat_expansion_panel_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-expansion-panel-header", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AdmittedComponent_mat_expansion_panel_7_mat_panel_description_6_Template, 11, 11, "mat-panel-description", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AdmittedComponent_mat_expansion_panel_7_mat_panel_description_8_Template, 12, 11, "mat-panel-description", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdmittedComponent_mat_expansion_panel_7_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const case_r2 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.onView(case_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdmittedComponent_mat_expansion_panel_7_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const case_r2 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.onDispose(case_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Dispose");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdmittedComponent_mat_expansion_panel_7_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const case_r2 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.onDelete(case_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Permanent delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const case_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("collapsedHeight", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 6, ctx_r0.isHandset$) ? "129px" : "")("expandedHeight", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 8, ctx_r0.isHandset$) ? "129px" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", i_r3 + 1, " ) ", case_r2.stampNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 10, ctx_r0.isHandset$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 12, ctx_r0.isHandset$) === false);
} }
const _c0 = function () { return [10, 25, 50]; };
function AdmittedComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-paginator", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx_r1.cases.length)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
} }
class AdmittedComponent {
    constructor(breakpointObserver, caseService, router) {
        this.breakpointObserver = breakpointObserver;
        this.caseService = caseService;
        this.router = router;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
        this.panelOpenState = false;
    }
    ngOnInit() {
        this.caseSub = this.caseService.getCasesUpdateListener().subscribe((data) => {
            this.cases = data;
        });
        this.caseService.getadmittedCases();
    }
    onView(id) {
        this.caseService.getCaseData(id);
        this.caseService.getLinkedClient(id);
        this.router.navigate(["/caseinfo"]);
    }
    onDispose(id) {
        this.caseService.disposeCase(id);
        this.cases = this.cases.filter(function (e) { return e._id !== id; });
        this.caseService.setCases(this.cases);
        // this.caseService.getCases();
    }
    onDelete(id) {
        this.caseService.deleteCase(id);
        this.cases = this.cases.filter(function (e) { return e._id !== id; });
        this.caseService.setCases(this.cases);
        // this.caseService.getCases();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.caseSub.unsubscribe();
    }
}
AdmittedComponent.ɵfac = function AdmittedComponent_Factory(t) { return new (t || AdmittedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_3__["CaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AdmittedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdmittedComponent, selectors: [["app-admitted"]], decls: 11, vars: 2, consts: [[1, "bg-image"], [1, "grid-container", "bg-text"], [2, "display", "flex"], [1, "mat-h1", 2, "font-family", "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "font-weight", "bold"], [1, "flex-spacer"], ["multi", ""], ["class", "panel", "hideToggle", "", 3, "opened", "closed", 4, "ngFor", "ngForOf"], ["style", "width: 95%;", 4, "ngIf"], ["hideToggle", "", 1, "panel", 3, "opened", "closed"], [2, "padding-top", "9px", 3, "collapsedHeight", "expandedHeight"], ["fxLayout", "column", 4, "ngIf"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 2, "margin-left", "10px", 3, "click"], ["fxLayout", "column"], [2, "color", "red"], [2, "color", "black"], [2, "color", "red", "margin-left", "10px"], [2, "margin-left", "10px"], [2, "margin-right", "70px", "color", "black"], [2, "width", "95%"], [3, "length", "pageSize", "pageSizeOptions"]], template: function AdmittedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Admitted Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-accordion", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AdmittedComponent_mat_expansion_panel_7_Template, 18, 14, "mat-expansion-panel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AdmittedComponent_div_10_Template, 2, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cases);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cases.length != 0);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelDescription"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 90%;\n}\n\n.panel[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkbWl0dGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQUNKIiwiZmlsZSI6ImFkbWl0dGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcbiJdfQ== */", ".bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"/assets/bg.jpg\");\n  \n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  \n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bg-text[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: normal;\n  \n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 95%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFFQSx1Q0FBQTtFQUVBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBSko7O0FBT0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBRUEsbUJBQUE7QUFMSiIsImZpbGUiOiJjaGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5iZy1pbWFnZSB7XHJcbiAgICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9ucHIuYnJpZ2h0c3BvdGNkbi5jb20vZGltczQvZGVmYXVsdC9mZjkzMjEzLzIxNDc0ODM2NDcvc3RyaXAvdHJ1ZS9jcm9wLzE4NzV4MTI1MCswKzAvcmVzaXplLzg4MHg1ODchL3F1YWxpdHkvOTAvP3VybD1odHRwOiUyRiUyRm5wci1icmlnaHRzcG90LnMzLmFtYXpvbmF3cy5jb20lMkZsZWdhY3klMkZzaXRlcyUyRnd2cG4lMkZmaWxlcyUyRjIwMTUxMSUyRlNjYWxlc29mSnVzdGljZS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYmcuanBnJyk7XHJcblxyXG4gICAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xyXG4gICAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG5cclxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmJnLXRleHQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLy8gei1pbmRleDogMjtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "Mnkj":
/*!****************************************!*\
  !*** ./src/app/error/error.service.ts ***!
  \****************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ErrorService {
    constructor() {
        this.errorListener = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getErrorListener() {
        return this.errorListener.asObservable();
    }
    throwError(message) {
        this.errorListener.next(message);
    }
    handleError() {
        this.errorListener.next(null);
    }
}
ErrorService.ɵfac = function ErrorService_Factory(t) { return new (t || ErrorService)(); };
ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ErrorService, factory: ErrorService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "N5FB":
/*!****************************************************************!*\
  !*** ./src/app/client-dashboard/client-dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: ClientDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDashboardComponent", function() { return ClientDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");





class ClientDashboardComponent {
    /** Based on the screen size, switch from standard to one column per row */
    constructor(breakpointObserver, caseService) {
        this.breakpointObserver = breakpointObserver;
        this.caseService = caseService;
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.caseService.getClientDashboard().subscribe((data) => {
            this.total_cases = data.total_cases;
            this.total_admitted = data.total_admitted;
            this.total_disposed = data.total_disposed;
        }, (err) => {
            console.log(err);
        });
    }
}
ClientDashboardComponent.ɵfac = function ClientDashboardComponent_Factory(t) { return new (t || ClientDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_2__["CaseService"])); };
ClientDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientDashboardComponent, selectors: [["app-client-dashboard"]], decls: 37, vars: 9, consts: [[1, "bg-image"], [1, "grid-container", "bg-text"], [2, "display", "flex"], [1, "mat-h1", 2, "font-family", "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "font-weight", "bold"], [1, "flex-spacer"], ["cols", "3", "rowHeight", "200px"], [3, "colspan", "rowspan"], [1, "dashboard-card"], [1, "dashboard-card-content"], [1, "mat-h1"], [1, "mt-h5", 2, "padding-top", "17px", "font-size", "60px"]], template: function ClientDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-grid-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-tile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Total Cases ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-grid-tile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Total Admitted Cases ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-grid-tile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Total Disposed Cases ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 1)("rowspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.total_cases);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 1)("rowspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.total_admitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 1)("rowspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.total_disposed);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 95%;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  background-color: #1f1c1c;\n  color: white;\n}\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNsaWVudC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtBQUNKIiwiZmlsZSI6ImNsaWVudC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcblxyXG4gIC5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEsIDI4LCAyOCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAubW9yZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiJdfQ== */", ".bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"/assets/bg.jpg\");\n  \n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  \n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bg-text[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: normal;\n  \n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 95%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFFQSx1Q0FBQTtFQUVBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBSko7O0FBT0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBRUEsbUJBQUE7QUFMSiIsImZpbGUiOiJjaGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5iZy1pbWFnZSB7XHJcbiAgICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9ucHIuYnJpZ2h0c3BvdGNkbi5jb20vZGltczQvZGVmYXVsdC9mZjkzMjEzLzIxNDc0ODM2NDcvc3RyaXAvdHJ1ZS9jcm9wLzE4NzV4MTI1MCswKzAvcmVzaXplLzg4MHg1ODchL3F1YWxpdHkvOTAvP3VybD1odHRwOiUyRiUyRm5wci1icmlnaHRzcG90LnMzLmFtYXpvbmF3cy5jb20lMkZsZWdhY3klMkZzaXRlcyUyRnd2cG4lMkZmaWxlcyUyRjIwMTUxMSUyRlNjYWxlc29mSnVzdGljZS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYmcuanBnJyk7XHJcblxyXG4gICAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xyXG4gICAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG5cclxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmJnLXRleHQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLy8gei1pbmRleDogMjtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "NGIv":
/*!*************************************!*\
  !*** ./src/app/clientauth.guard.ts ***!
  \*************************************/
/*! exports provided: ClientAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientAuthGuard", function() { return ClientAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ClientAuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authService.getIsAuth();
        const role = String(this.authService.getRole());
        if (!isAuth && role !== "client") {
            this.router.navigate(['/login']);
        }
        return isAuth;
    }
}
ClientAuthGuard.ɵfac = function ClientAuthGuard_Factory(t) { return new (t || ClientAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ClientAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientAuthGuard, factory: ClientAuthGuard.ɵfac });


/***/ }),

/***/ "OC8m":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");


class NotificationService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    showSuccess(message, title) {
        this.toastr.success(message, title);
    }
    showError(message, title) {
        this.toastr.error(message, title);
    }
    showInfo(message, title) {
        this.toastr.info(message, title);
    }
    showWarning(message, title) {
        this.toastr.warning(message, title);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Oh3b":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function () { return ["/loginclient"]; };
const _c1 = function () { return ["/login"]; };
const _c2 = function () { return ["/registerclient"]; };
const _c3 = function () { return ["/register"]; };
class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 27, vars: 10, consts: [[1, "header", 2, "display", "flex"], [2, "padding-right", "10px"], [1, "flex-spacer"], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["menu1", "matMenu"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lawyer Portal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "gavel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-menu", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login as client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login as Lawyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-menu", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Register as client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Register as Lawyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".header[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDRSxZQUFBO0FBQ0oiLCJmaWxlIjoiaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "OiMz":
/*!*****************************************!*\
  !*** ./src/app/models/addcase.model.ts ***!
  \*****************************************/
/*! exports provided: Addcase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addcase", function() { return Addcase; });
class Addcase {
    constructor(stampNo, fillingDate, status, bench, petitioner, respondent, forum, district, postalCode, act, RegNo, RegDate, stage, description) {
        this.stampNo = stampNo;
        this.fillingDate = fillingDate;
        this.status = status;
        this.bench = bench;
        this.petitioner = petitioner;
        this.respondent = respondent;
        this.forum = forum;
        this.district = district;
        this.postalCode = postalCode;
        this.act = act;
        this.RegNo = RegNo;
        this.RegDate = RegDate;
        this.stage = stage;
        this.description = description;
    }
}


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");





class DashboardComponent {
    /** Based on the screen size, switch from standard to one column per row */
    constructor(breakpointObserver, caseService) {
        this.breakpointObserver = breakpointObserver;
        this.caseService = caseService;
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.caseService.getLawyerDashboard().subscribe((data) => {
            this.total_cases = data.total_cases;
            this.total_admitted = data.total_admitted;
            this.total_disposed = data.total_disposed;
            this.total_clients = data.total_clients;
        }, (err) => {
            console.log(err);
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_2__["CaseService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 47, vars: 12, consts: [[1, "bg-image"], [1, "grid-container", "bg-text"], [2, "display", "flex"], [1, "mat-h1", 2, "font-family", "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "font-weight", "bold"], [1, "flex-spacer"], ["cols", "4", "rowHeight", "200px"], [3, "colspan", "rowspan"], [1, "dashboard-card"], [1, "dashboard-card-content"], [1, "mat-h1"], [1, "mt-h5", 2, "padding-top", "17px", "font-size", "60px"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-grid-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-tile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Total Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-grid-tile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Total Admitted Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-grid-tile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Total Disposed Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-grid-tile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Total Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 1)("rowspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.total_cases);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 1)("rowspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.total_admitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 1)("rowspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.total_disposed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 1)("rowspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.total_clients);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 8px;\n  width: 95%;\n}\n\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  background-color: #1f1c1c;\n  color: white;\n}\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"/assets/bg.jpg\");\n  \n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  \n  height: 100%;\n  width: auto;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bg-text[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: bold;\n  \n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  \n  \n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtFQUVBLHVDQUFBO0VBRUEsd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBRUEsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBSEo7O0FBTUU7RUFFRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTEoiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcblxyXG4gIC5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDMxLCAyOCwgMjgpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLm1vcmUtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYmctaW1hZ2Uge1xyXG4gICAgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbnByLmJyaWdodHNwb3RjZG4uY29tL2RpbXM0L2RlZmF1bHQvZmY5MzIxMy8yMTQ3NDgzNjQ3L3N0cmlwL3RydWUvY3JvcC8xODc1eDEyNTArMCswL3Jlc2l6ZS84ODB4NTg3IS9xdWFsaXR5LzkwLz91cmw9aHR0cDolMkYlMkZucHItYnJpZ2h0c3BvdC5zMy5hbWF6b25hd3MuY29tJTJGbGVnYWN5JTJGc2l0ZXMlMkZ3dnBuJTJGZmlsZXMlMkYyMDE1MTElMkZTY2FsZXNvZkp1c3RpY2UuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2JnLmpwZycpO1xyXG5cclxuICAgIC8qIEFkZCB0aGUgYmx1ciBlZmZlY3QgKi9cclxuICAgIGZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuXHJcbiAgICAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6YXV0bztcclxuXHJcbiAgICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxuICAuYmctdGV4dCB7XHJcbiAgICAvLyBjb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7ICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC8vIHdpZHRoOiA5OSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICAvKiB3aWR0aDogODAlOyAqL1xyXG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ "QejX":
/*!**************************************!*\
  !*** ./src/app/demo-utils/module.ts ***!
  \**************************************/
/*! exports provided: DemoUtilsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoUtilsModule", function() { return DemoUtilsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "kRoH");
/* harmony import */ var _calendar_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-header.component */ "Ynfx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class DemoUtilsModule {
}
DemoUtilsModule.ɵfac = function DemoUtilsModule_Factory(t) { return new (t || DemoUtilsModule)(); };
DemoUtilsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DemoUtilsModule });
DemoUtilsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DemoUtilsModule, { declarations: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_3__["CalendarHeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarModule"]], exports: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_3__["CalendarHeaderComponent"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _error_error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error.service */ "Mnkj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "7Ufg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _client_main_nav_client_main_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-main-nav/client-main-nav.component */ "xipE");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");









function AppComponent_app_main_nav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-main-nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-client-main-nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-homepage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class AppComponent {
    constructor(authService, errorService) {
        this.authService = authService;
        this.errorService = errorService;
        this.isLoading = true;
        this.hasError = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.roleSub = this.authService.getRoleListener().subscribe((role) => {
            this.role = role;
        });
        this.authService.autoAuthUser();
        this.isLoading = false;
        this.errorSub = this.errorService.getErrorListener().subscribe(message => this.hasError = message !== null);
    }
    ngOnDestroy() {
        this.roleSub.unsubscribe();
        this.errorSub.unsubscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_error_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 4, consts: [[4, "ngIf"], [2, "margin-top", "200px", "margin-left", "680px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_main_nav_0_Template, 2, 0, "app-main-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_container_2_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_container_3_Template, 3, 0, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role === "lawyer" && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role === "client" && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role !== "lawyer" && !ctx.isLoading && ctx.role !== "client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__["MainNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _client_main_nav_client_main_nav_component__WEBPACK_IMPORTED_MODULE_6__["ClientMainNavComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "VzO+":
/*!**************************************************************!*\
  !*** ./src/app/clientside-chat/clientside-chat.component.ts ***!
  \**************************************************************/
/*! exports provided: ClientsideChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsideChatComponent", function() { return ClientsideChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





function ClientsideChatComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientsideChatComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", element_r6.firstname, " ", element_r6.lastname, "");
} }
function ClientsideChatComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientsideChatComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientsideChatComponent_td_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const element_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onChat(element_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientsideChatComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
function ClientsideChatComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
class ClientsideChatComponent {
    constructor(caseService, router) {
        this.caseService = caseService;
        this.router = router;
        this.lawyerData = [];
        this.displayedColumns = ['Name', 'Action'];
    }
    ngOnInit() {
        this.caseService.getExistingLawyerChat().subscribe(data => {
            this.lawyerData = data;
            console.log(this.lawyerData);
        });
    }
    onChat(data) {
        this.caseService.storeLawyerForChat(data);
        this.router.navigate(['/clientChatroom']);
    }
}
ClientsideChatComponent.ɵfac = function ClientsideChatComponent_Factory(t) { return new (t || ClientsideChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_1__["CaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ClientsideChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsideChatComponent, selectors: [["app-clientside-chat"]], decls: 13, vars: 3, consts: [[1, "bg-image"], [1, "bg-text", 2, "margin", "10px"], [1, "mat-h1"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "Name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ClientsideChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Chats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ClientsideChatComponent_th_6_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ClientsideChatComponent_td_7_Template, 2, 2, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClientsideChatComponent_th_9_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ClientsideChatComponent_td_10_Template, 3, 0, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ClientsideChatComponent_tr_11_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ClientsideChatComponent_tr_12_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.lawyerData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRzaWRlLWNoYXQuY29tcG9uZW50LnNjc3MifQ== */", ".bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"/assets/bg.jpg\");\n  \n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  \n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bg-text[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: normal;\n  \n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 95%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFFQSx1Q0FBQTtFQUVBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBSko7O0FBT0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBRUEsbUJBQUE7QUFMSiIsImZpbGUiOiJjaGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5iZy1pbWFnZSB7XHJcbiAgICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9ucHIuYnJpZ2h0c3BvdGNkbi5jb20vZGltczQvZGVmYXVsdC9mZjkzMjEzLzIxNDc0ODM2NDcvc3RyaXAvdHJ1ZS9jcm9wLzE4NzV4MTI1MCswKzAvcmVzaXplLzg4MHg1ODchL3F1YWxpdHkvOTAvP3VybD1odHRwOiUyRiUyRm5wci1icmlnaHRzcG90LnMzLmFtYXpvbmF3cy5jb20lMkZsZWdhY3klMkZzaXRlcyUyRnd2cG4lMkZmaWxlcyUyRjIwMTUxMSUyRlNjYWxlc29mSnVzdGljZS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYmcuanBnJyk7XHJcblxyXG4gICAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xyXG4gICAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG5cclxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmJnLXRleHQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLy8gei1pbmRleDogMjtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "WNj9":
/*!*************************************!*\
  !*** ./src/app/auth-interceptor.ts ***!
  \*************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");


class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const authToken = this.authService.getToken();
        const authRequest = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + authToken)
        });
        return next.handle(authRequest);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ "Ynfx":
/*!*********************************************************!*\
  !*** ./src/app/demo-utils/calendar-header.component.ts ***!
  \*********************************************************/
/*! exports provided: CalendarHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarHeaderComponent", function() { return CalendarHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-calendar */ "kRoH");




class CalendarHeaderComponent {
    constructor() {
        this.locale = 'en';
        this.viewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarView"];
    }
}
CalendarHeaderComponent.ɵfac = function CalendarHeaderComponent_Factory(t) { return new (t || CalendarHeaderComponent)(); };
CalendarHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarHeaderComponent, selectors: [["mwl-demo-utils-calendar-header"]], inputs: { view: "view", viewDate: "viewDate", locale: "locale" }, outputs: { viewChange: "viewChange", viewDateChange: "viewDateChange" }, decls: 22, vars: 16, consts: [[1, "row", "text-center"], [1, "col-md-4"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-outline-secondary", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], [1, "btn", "btn-primary", 3, "click"]], template: function CalendarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_3_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_3_listener() { return ctx.viewDateChange.next(ctx.viewDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_5_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_5_listener() { return ctx.viewDateChange.next(ctx.viewDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_7_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_7_listener() { return ctx.viewDateChange.next(ctx.viewDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "calendarDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_15_listener() { return ctx.viewChange.emit(ctx.CalendarView.Month); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_17_listener() { return ctx.viewChange.emit(ctx.CalendarView.Week); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_19_listener() { return ctx.viewChange.emit(ctx.CalendarView.Day); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Day ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 12, ctx.viewDate, ctx.view + "ViewTitle", ctx.locale));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Month);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Week);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Day);
    } }, directives: [angular_calendar__WEBPACK_IMPORTED_MODULE_1__["ɵf"], angular_calendar__WEBPACK_IMPORTED_MODULE_1__["ɵh"], angular_calendar__WEBPACK_IMPORTED_MODULE_1__["ɵg"]], pipes: [angular_calendar__WEBPACK_IMPORTED_MODULE_1__["ɵi"]], encapsulation: 2 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "7Ufg");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _cases_cases_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./cases/cases.component */ "3agv");
/* harmony import */ var _addcase_addcase_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./addcase/addcase.component */ "2TVA");
/* harmony import */ var _caseinfo_caseinfo_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./caseinfo/caseinfo.component */ "w6GC");
/* harmony import */ var _loginclient_loginclient_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./loginclient/loginclient.component */ "FyRX");
/* harmony import */ var _registerclient_registerclient_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./registerclient/registerclient.component */ "h/te");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./auth-interceptor */ "WNj9");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _editcase_editcase_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./editcase/editcase.component */ "bCr3");
/* harmony import */ var _pre_admitted_preadmitted_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pre-admitted/preadmitted.component */ "C+JG");
/* harmony import */ var _admitted_admitted_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./admitted/admitted.component */ "Jhgf");
/* harmony import */ var _disposed_disposed_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./disposed/disposed.component */ "2iwg");
/* harmony import */ var _client_dashboard_client_dashboard_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./client-dashboard/client-dashboard.component */ "N5FB");
/* harmony import */ var _client_main_nav_client_main_nav_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./client-main-nav/client-main-nav.component */ "xipE");
/* harmony import */ var _client_cases_client_cases_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./client-cases/client-cases.component */ "lwBU");
/* harmony import */ var _client_caseinfo_client_caseinfo_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./client-caseinfo/client-caseinfo.component */ "xmPl");
/* harmony import */ var _client_chatroom_client_chatroom_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./client-chatroom/client-chatroom.component */ "ek81");
/* harmony import */ var _chats_chats_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./chats/chats.component */ "wxUJ");
/* harmony import */ var _clientside_chat_clientside_chat_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./clientside-chat/clientside-chat.component */ "VzO+");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! angularx-flatpickr */ "UBqL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _demo_utils_module__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./demo-utils/module */ "QejX");
/* harmony import */ var _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./chatroom/chatroom.component */ "wfUc");
/* harmony import */ var _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./client-list/client-list.component */ "rrB8");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _lawyer_list_lawyer_list_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./lawyer-list/lawyer-list.component */ "e8NY");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "bF/t");
/* harmony import */ var _client_edit_profile_client_edit_profile_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./client-edit-profile/client-edit-profile.component */ "pg5L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/core */ "fXoL");











































// import { TryComponent } from './try/try.component';













// import { TryModule } from "./try/module";









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_62__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_27__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_62__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_40__["AuthInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_26__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_41__["LayoutModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_24__["CKEditorModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_54__["NgbModalModule"],
            _demo_utils_module__WEBPACK_IMPORTED_MODULE_55__["DemoUtilsModule"],
            // TryModule,
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_53__["FlatpickrModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_58__["ToastrModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_62__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_27__["AppComponent"],
        _addcase_addcase_component__WEBPACK_IMPORTED_MODULE_32__["AddcaseComponent"],
        _caseinfo_caseinfo_component__WEBPACK_IMPORTED_MODULE_33__["CaseinfoComponent"],
        _cases_cases_component__WEBPACK_IMPORTED_MODULE_31__["CasesComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__["DashboardComponent"],
        _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_29__["MainNavComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_36__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_37__["RegisterComponent"],
        _loginclient_loginclient_component__WEBPACK_IMPORTED_MODULE_34__["LoginclientComponent"],
        _registerclient_registerclient_component__WEBPACK_IMPORTED_MODULE_35__["RegisterclientComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_38__["HomepageComponent"],
        _error_error_component__WEBPACK_IMPORTED_MODULE_39__["ErrorComponent"],
        _editcase_editcase_component__WEBPACK_IMPORTED_MODULE_42__["EditcaseComponent"],
        _pre_admitted_preadmitted_component__WEBPACK_IMPORTED_MODULE_43__["PreadmittedComponent"],
        _admitted_admitted_component__WEBPACK_IMPORTED_MODULE_44__["AdmittedComponent"],
        _disposed_disposed_component__WEBPACK_IMPORTED_MODULE_45__["DisposedComponent"],
        _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_56__["ChatroomComponent"],
        _client_dashboard_client_dashboard_component__WEBPACK_IMPORTED_MODULE_46__["ClientDashboardComponent"],
        _client_main_nav_client_main_nav_component__WEBPACK_IMPORTED_MODULE_47__["ClientMainNavComponent"],
        _client_cases_client_cases_component__WEBPACK_IMPORTED_MODULE_48__["ClientCasesComponent"],
        _client_caseinfo_client_caseinfo_component__WEBPACK_IMPORTED_MODULE_49__["ClientCaseinfoComponent"],
        _client_chatroom_client_chatroom_component__WEBPACK_IMPORTED_MODULE_50__["ClientChatroomComponent"],
        _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_57__["ClientListComponent"],
        _chats_chats_component__WEBPACK_IMPORTED_MODULE_51__["ChatsComponent"],
        _clientside_chat_clientside_chat_component__WEBPACK_IMPORTED_MODULE_52__["ClientsideChatComponent"],
        _lawyer_list_lawyer_list_component__WEBPACK_IMPORTED_MODULE_59__["LawyerListComponent"],
        _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_60__["EditProfileComponent"],
        _client_edit_profile_client_edit_profile_component__WEBPACK_IMPORTED_MODULE_61__["ClientEditProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_26__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_41__["LayoutModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"],
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_24__["CKEditorModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_54__["NgbModalModule"],
        _demo_utils_module__WEBPACK_IMPORTED_MODULE_55__["DemoUtilsModule"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_53__["FlatpickrModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_58__["ToastrModule"]] }); })();


/***/ }),

/***/ "bCr3":
/*!************************************************!*\
  !*** ./src/app/editcase/editcase.component.ts ***!
  \************************************************/
/*! exports provided: EditcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditcaseComponent", function() { return EditcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












const _c0 = ["editcase"];
class EditcaseComponent {
    constructor(caseService, router) {
        this.caseService = caseService;
        this.router = router;
    }
    ngOnInit() {
        this.id = this.caseService.getId();
        this.caseService.getCaseData(this.id);
        this.caseSub = this.caseService.getsingleCaseUpdateListener().subscribe((data) => {
            this.File = data;
        });
    }
    onSubmit(form) {
        console.log(this.File);
        this.caseService.updateCase(this.File);
        this.caseService.getLinkedClient(this.id);
        this.router.navigate(["/caseinfo"]);
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.caseSub.unsubscribe();
    }
}
EditcaseComponent.ɵfac = function EditcaseComponent_Factory(t) { return new (t || EditcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_1__["CaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditcaseComponent, selectors: [["app-editcase"]], viewQuery: function EditcaseComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, decls: 93, vars: 21, consts: [[1, "bg-image"], [1, "grid-container", "bg-text"], [1, "mat-h1", 2, "font-family", "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "font-weight", "bold"], [3, "ngSubmit"], ["editcase", "ngForm"], [2, "margin", "0px 30px"], ["fxLayout", "column"], [1, "half-width"], ["for", "stampNo"], ["matInput", "", "id", "stampNo", "name", "stampNo", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Filling Date", "name", "fillingDate", "id", "fillingDate", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["name", "status", "id", "status", "required", "", 3, "ngModel", "ngModelChange"], ["value", "pre-admitted"], ["value", "admitted"], ["value", "disposed"], ["value", "rejected"], ["fxLayout", "row"], ["placeholder", "Forum", "name", "forum", "id", "forum", 3, "ngModel", "ngModelChange"], ["value", "High Court"], ["value", "Supreme Court"], ["value", "XYZ", "disabled", ""], [1, "half-width", 2, "margin-left", "10px"], ["matInput", "", "placeholder", "Morbi", "name", "bench", "id", "bench", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "petitioner", "id", "petitioner", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "respondent", "id", "respondent", 3, "ngModel", "ngModelChange"], [1, "full-width"], ["matInput", "", "placeholder", "Ex. Morbi", "name", "district", "id", "district", 3, "ngModel", "ngModelChange"], [1, "full-width", 2, "margin-left", "10px"], ["matInput", "", "maxlength", "6", "placeholder", "Ex. 363642", "name", "postalCode", "id", "postalCode", 3, "ngModel", "ngModelChange"], ["postalCode", ""], ["matInput", "", "name", "act", "id", "act", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "RegNo", "id", "RegNo", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "stage", "id", "stage", 3, "ngModel", "ngModelChange"], ["matInput", "", "maxlength", "256", "placeholder", "Description", "name", "description", "id", "description", 3, "ngModel", "ngModelChange"], ["message", ""], [3, "align"], ["matInput", "", "placeholder", "Reg. Date", "name", "RegDate", "id", "RegDate", 3, "matDatepicker", "ngModel", "ngModelChange"], ["picker1", ""], ["mat-raised-button", "", "color", "primary", "type", "submit"], ["mat-raised-button", "", "color", "basic", "type", "reset"]], template: function EditcaseComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditcaseComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Stamp Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditcaseComponent_Template_input_ngModelChange_12_listener($event) { return ctx.File.stampNo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditcaseComponent_Template_input_ngModelChange_14_listener($event) { return ctx.File.fillingDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-datepicker-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-datepicker", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditcaseComponent_Template_mat_select_ngModelChange_21_listener($event) { return ctx.File.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "pre-admitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "admitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "disposed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "rejected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditcaseComponent_Template_mat_select_ngModelChange_32_listener($event) { return ctx.File.forum = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "High Court");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Supreme Court");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "XYZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Bench");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditcaseComponent_Template_input_ngModelChange_42_listener($event) { return ctx.File.bench = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Petitioner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditcaseComponent_Template_input_ngModelChange_47_listener($event) { return ctx.File.petitioner = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Respondent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditcaseComponent_Template_input_ngModelChange_51_listener($event) { return ctx.File.respondent = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "District");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditcaseComponent_Template_input_ngModelChange_56_listener($event) { return ctx.File.district = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Postal Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditcaseComponent_Template_input_ngModelChange_60_listener($event) { return ctx.File.postalCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Act");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditcaseComponent_Template_input_ngModelChange_67_listener($event) { return ctx.File.act = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Reg Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditcaseComponent_Template_input_ngModelChange_71_listener($event) { return ctx.File.RegNo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Stage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditcaseComponent_Template_input_ngModelChange_75_listener($event) { return ctx.File.stage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditcaseComponent_Template_input_ngModelChange_77_listener($event) { return ctx.File.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-hint", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditcaseComponent_Template_input_ngModelChange_82_listener($event) { return ctx.File.RegDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "mat-datepicker-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "mat-datepicker", null, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](78);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.File.stampNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1)("ngModel", ctx.File.fillingDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.File.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.File.forum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.File.bench);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.File.petitioner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.File.respondent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.File.district);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.File.postalCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r2.value.length, " / 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.File.act);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.File.RegNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.File.stage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.File.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("align", "end");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r3.value.length, " / 256");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r4)("ngModel", ctx.File.RegDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r4);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n\n.half-width[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.border[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVkaXRjYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNFLFdBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQUE7RUFDSSxVQUFBO0FBR0o7O0FBREE7RUFDRyxhQUFBO0FBSUg7O0FBREE7RUFDRSxnQkFBQTtBQUlGIiwiZmlsZSI6ImVkaXRjYXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4gOmF1dG87XG59IFxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cbiAgXG50ZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cbi5oYWxmLXdpZHRoe1xuICAgIHdpZHRoOjUwJTtcbn1cbi5ib3JkZXJ7XG4gICBwYWRkaW5nOjE1cHg7XG59XG4gIFxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn0iXX0= */", ".bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"/assets/bg.jpg\");\n  \n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  \n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bg-text[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: normal;\n  \n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 95%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFFQSx1Q0FBQTtFQUVBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBSko7O0FBT0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBRUEsbUJBQUE7QUFMSiIsImZpbGUiOiJjaGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5iZy1pbWFnZSB7XHJcbiAgICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9ucHIuYnJpZ2h0c3BvdGNkbi5jb20vZGltczQvZGVmYXVsdC9mZjkzMjEzLzIxNDc0ODM2NDcvc3RyaXAvdHJ1ZS9jcm9wLzE4NzV4MTI1MCswKzAvcmVzaXplLzg4MHg1ODchL3F1YWxpdHkvOTAvP3VybD1odHRwOiUyRiUyRm5wci1icmlnaHRzcG90LnMzLmFtYXpvbmF3cy5jb20lMkZsZWdhY3klMkZzaXRlcyUyRnd2cG4lMkZmaWxlcyUyRjIwMTUxMSUyRlNjYWxlc29mSnVzdGljZS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYmcuanBnJyk7XHJcblxyXG4gICAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xyXG4gICAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG5cclxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmJnLXRleHQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLy8gei1pbmRleDogMjtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "bF/t":
/*!********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.ts ***!
  \********************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/notification.service */ "OC8m");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");

















function EditProfileComponent_form_5_div_440_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Validating...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function (a0) { return { "is-loading": a0 }; };
function EditProfileComponent_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditProfileComponent_form_5_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onSubmit(ctx_r3.profileForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "sentiment_very_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "sentiment_very_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Birthdate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-datepicker-toggle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "mat-datepicker", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Enter your email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Nationality");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Afghan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Albanian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Algerian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " American ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Andorran ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Angolan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Antiguans ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Argentinean ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Armenian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Australian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Austrian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Azerbaijani ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Bahamian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Bahraini ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Bangladeshi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Barbadian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " Barbudans ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Batswana ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Belarusian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Belgian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " Belizean ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Beninese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " Bhutanese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " Bolivian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " Bosnian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " Brazilian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " British ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " Bruneian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "mat-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Bulgarian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, " Burkinabe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " Burmese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " Burundian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, " Cambodian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, " Cameroonian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " Canadian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, " Cape Verdean ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " Central African ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, " Chadian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, " Chilean ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, " Chinese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, " Colombian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, " Comoran ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " Congolese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, " Congolese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, " Costa Rican ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "mat-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, " Croatian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "mat-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, " Cuban ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, " Cypriot ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, " Czech ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, " Danish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "mat-option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, " Djibouti ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "mat-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, " Dominican ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "mat-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, " Dominican ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, " Dutch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, " Dutchman ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, " Dutchwoman ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, " East Timorese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, " Ecuadorean ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, " Egyptian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, " Emirian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, " Equatorial Guinean ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "mat-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, " Eritrean ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "mat-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, " Estonian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "mat-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, " Ethiopian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "mat-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, " Fijian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, " Filipino ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, " Finnish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, " French ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, " Gabonese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "mat-option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, " Gambian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "mat-option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, " Georgian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "mat-option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, " German ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "mat-option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, " Ghanaian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "mat-option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, " Greek ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "mat-option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, " Grenadian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "mat-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, " Guatemalan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "mat-option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, " Guinea-Bissauan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "mat-option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, " Guinean ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "mat-option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, " Guyanese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "mat-option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, " Haitian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "mat-option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, " Herzegovinian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "mat-option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, " Honduran ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "mat-option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, " Hungarian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "mat-option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, " I-Kiribati ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "mat-option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, " Icelander ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "mat-option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, " Indian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "mat-option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, " Indonesian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "mat-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, " Iranian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "mat-option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, " Iraqi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "mat-option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, " Irish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "mat-option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, " Irish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "mat-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, " Israeli ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "mat-option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, " Italian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "mat-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, " Ivorian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "mat-option", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, " Jamaican ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "mat-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, " Japanese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "mat-option", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, " Jordanian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "mat-option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, " Kazakhstani ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "mat-option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, " Kenyan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "mat-option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, " Kittian and Nevisian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "mat-option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, " Kuwaiti ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "mat-option", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, " Kyrgyz ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "mat-option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, " Laotian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "mat-option", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, " Latvian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "mat-option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, " Lebanese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "mat-option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, " Liberian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "mat-option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, " Libyan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "mat-option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, " Liechtensteiner ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "mat-option", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, " Lithuanian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "mat-option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, " Luxembourger ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "mat-option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, " Macedonian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "mat-option", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, " Malagasy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "mat-option", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, " Malawian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "mat-option", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, " Malaysian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "mat-option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, " Maldivan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "mat-option", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, " Malian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "mat-option", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, " Maltese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "mat-option", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, " Marshallese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "mat-option", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, " Mauritanian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "mat-option", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, " Mauritian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "mat-option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, " Mexican ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "mat-option", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, " Micronesian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "mat-option", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, " Moldovan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "mat-option", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, " Monacan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "mat-option", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, " Mongolian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "mat-option", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, " Moroccan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "mat-option", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, " Mosotho ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "mat-option", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, " Motswana ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "mat-option", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, " Mozambican ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "mat-option", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, " Namibian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "mat-option", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, " Nauruan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "mat-option", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, " Nepalese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "mat-option", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, " Netherlander ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "mat-option", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, " New Zealander ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "mat-option", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](300, " Ni-Vanuatu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "mat-option", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](302, " Nicaraguan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "mat-option", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, " Nigerian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "mat-option", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, " Nigerien ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "mat-option", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, " North Korean ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "mat-option", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, " Northern Irish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "mat-option", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, " Norwegian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "mat-option", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](314, " Omani ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "mat-option", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, " Pakistani ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "mat-option", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, " Palauan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "mat-option", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, " Panamanian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "mat-option", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, " Papua New Guinean ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "mat-option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, " Paraguayan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "mat-option", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](326, " Peruvian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "mat-option", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, " Polish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "mat-option", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](330, " Portuguese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "mat-option", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, " Qatari ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "mat-option", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, " Romanian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "mat-option", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](336, " Russian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "mat-option", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, " Rwandan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "mat-option", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340, " Saint Lucian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "mat-option", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, " Salvadoran ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "mat-option", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, " Samoan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "mat-option", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](346, " San Marinese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "mat-option", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](348, " Sao Tomean ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "mat-option", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, " Saudi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "mat-option", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](352, " Scottish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "mat-option", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, " Senegalese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "mat-option", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356, " Serbian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "mat-option", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, " Seychellois ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "mat-option", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, " Sierra Leonean ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "mat-option", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](362, " Singaporean ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "mat-option", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](364, " Slovakian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "mat-option", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](366, " Slovenian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "mat-option", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](368, " Solomon Islander ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "mat-option", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, " Somali ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "mat-option", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, " South African ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "mat-option", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](374, " South Korean ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "mat-option", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](376, " Spanish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "mat-option", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](378, " Sri Lankan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "mat-option", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, " Sudanese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "mat-option", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](382, " Surinamer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "mat-option", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](384, " Swazi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "mat-option", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](386, " Swedish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "mat-option", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](388, " Swiss ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](389, "mat-option", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](390, " Syrian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "mat-option", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392, " Taiwanese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "mat-option", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, " Tajik ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "mat-option", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](396, " Tanzanian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](397, "mat-option", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](398, " Thai ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](399, "mat-option", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](400, " Togolese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "mat-option", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](402, " Tongan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "mat-option", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](404, " Trinidadian or Tobagonian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](405, "mat-option", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](406, " Tunisian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "mat-option", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](408, " Turkish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "mat-option", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](410, " Tuvaluan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "mat-option", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](412, " Ugandan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "mat-option", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](414, " Ukrainian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "mat-option", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](416, " Uruguayan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](417, "mat-option", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](418, " Uzbekistani ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](419, "mat-option", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](420, " Venezuelan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "mat-option", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](422, " Vietnamese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "mat-option", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](424, " Welsh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "mat-option", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](426, " Welsh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "mat-option", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](428, " Yemenite ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "mat-option", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](430, " Zambian ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "mat-option", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](432, " Zimbabwean ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](434, "input", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](436, "location_city");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](438, "textarea", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](440, EditProfileComponent_form_5_div_440_Template, 2, 0, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](441, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](442, "input", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](444, "input", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](445, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](446, "school");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](448, "input", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](450, "date_range");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](452, "input", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](454, "work");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](455, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](456, "button", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](457, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](458, "button", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](459, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](460, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.profileForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r1)("max", ctx_r0.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx_r0.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](416);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.profileForm.get("bcn").pending);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c1, ctx_r0.profileForm.controls["bcn"].pending));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.profileForm.invalid);
} }
class EditProfileComponent {
    constructor(router, caseService, notifyService) {
        this.router = router;
        this.caseService = caseService;
        this.notifyService = notifyService;
        this.submitted = false;
        this.maxDate = new Date();
    }
    ngOnInit() {
        this.InitForm();
    }
    InitForm() {
        this.caseService.getProfile().subscribe(res => {
            this.lawyerData = res;
            this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                'firstname': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({ value: res.firstname, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
                'lastname': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({ value: res.lastname, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
                'birthdate': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({ value: res.birthdate, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
                'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({ value: res.email, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
                'phnno': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({ value: res.phnno, disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^\d{10}$/)]),
                'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](res.city, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
                'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](res.address, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
                'uni': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](res.uni, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
                'nationality': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({ value: res.nationality, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
                'prac': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](res.prac, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
                'year': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](res.year, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
                'bcn': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({ value: res.bcn, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
            });
        });
    }
    onSubmit(formData) {
        this.caseService.editLawyerProfile(formData).subscribe();
        this.notifyService.showInfo("", "Profile Updated");
        this.router.navigate(['/dashboard']);
    }
}
EditProfileComponent.ɵfac = function EditProfileComponent_Factory(t) { return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_3__["CaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"])); };
EditProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditProfileComponent, selectors: [["app-edit-profile"]], decls: 6, vars: 1, consts: [[1, "bg-image"], [1, "grid-container", "bg-text"], [1, "vache", 2, "text-align", "center"], ["fxLayout", "column", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["fxLayout", "column", 3, "formGroup", "ngSubmit"], [1, "w-100"], ["type", "text", "matInput", "", "placeholder", "First Name", "formControlName", "firstname"], ["matSuffix", ""], ["type", "text", "matInput", "", "placeholder", "Last Name", "formControlName", "lastname"], ["matInput", "", "formControlName", "birthdate", 3, "matDatepicker", "max"], [3, "for"], ["color", "primary"], ["picker2", ""], ["matInput", "", "placeholder", "abc@example.com", "formControlName", "email"], ["type", "text", "matInput", "", "placeholder", "Contact number", "formControlName", "phnno", 3, "ngClass"], ["formControlName", "nationality"], ["value", "Afghan"], ["value", "Albanian"], ["value", "Algerian"], ["value", "American"], ["value", "Andorran"], ["value", "Angolan"], ["value", "Antiguans"], ["value", "Argentinean"], ["value", "Armenian"], ["value", "Australian"], ["value", "Austrian"], ["value", "Azerbaijani"], ["value", "Bahamian"], ["value", "Bahraini"], ["value", "Bangladeshi"], ["value", "Barbadian"], ["value", "Barbudans"], ["value", "Batswana"], ["value", "Belarusian"], ["value", "Belgian"], ["value", "Belizean"], ["value", "Beninese"], ["value", "Bhutanese"], ["value", "Bolivian"], ["value", "Bosnian"], ["value", "Brazilian"], ["value", "British"], ["value", "Bruneian"], ["value", "Bulgarian"], ["value", "Burkinabe"], ["value", "Burmese"], ["value", "Burundian"], ["value", "Cambodian"], ["value", "Cameroonian"], ["value", "Canadian"], ["value", "Cape Verdean"], ["value", "Central African"], ["value", "Chadian"], ["value", "Chilean"], ["value", "Chinese"], ["value", "Colombian"], ["value", "Comoran"], ["value", "Congolese"], ["value", "Costa Rican"], ["value", "Croatian"], ["value", "Cuban"], ["value", "Cypriot"], ["value", "Czech"], ["value", "Danish"], ["value", "Djibouti"], ["value", "Dominican"], ["value", "Dutch"], ["value", "Dutchman"], ["value", "Dutchwoman"], ["value", "East Timorese"], ["value", "Ecuadorean"], ["value", "Egyptian"], ["value", "Emirian"], ["value", "Equatorial Guinean"], ["value", "Eritrean"], ["value", "Estonian"], ["value", "Ethiopian"], ["value", "Fijian"], ["value", "Filipino"], ["value", "Finnish"], ["value", "French"], ["value", "Gabonese"], ["value", "Gambian"], ["value", "Georgian"], ["value", "German"], ["value", "Ghanaian"], ["value", "Greek"], ["value", "Grenadian"], ["value", "Guatemalan"], ["value", "Guinea-Bissauan"], ["value", "Guinean"], ["value", "Guyanese"], ["value", "Haitian"], ["value", "Herzegovinian"], ["value", "Honduran"], ["value", "Hungarian"], ["value", "I-Kiribati"], ["value", "Icelander"], ["value", "Indian"], ["value", "Indonesian"], ["value", "Iranian"], ["value", "Iraqi"], ["value", "Irish"], ["value", "Israeli"], ["value", "Italian"], ["value", "Ivorian"], ["value", "Jamaican"], ["value", "Japanese"], ["value", "Jordanian"], ["value", "Kazakhstani"], ["value", "Kenyan"], ["value", "Kittian and Nevisian"], ["value", "Kuwaiti"], ["value", "Kyrgyz"], ["value", "Laotian"], ["value", "Latvian"], ["value", "Lebanese"], ["value", "Liberian"], ["value", "Libyan"], ["value", "Liechtensteiner"], ["value", "Lithuanian"], ["value", "Luxembourger"], ["value", "Macedonian"], ["value", "Malagasy"], ["value", "Malawian"], ["value", "Malaysian"], ["value", "Maldivan"], ["value", "Malian"], ["value", "Maltese"], ["value", "Marshallese"], ["value", "Mauritanian"], ["value", "Mauritian"], ["value", "Mexican"], ["value", "Micronesian"], ["value", "Moldovan"], ["value", "Monacan"], ["value", "Mongolian"], ["value", "Moroccan"], ["value", "Mosotho"], ["value", "Motswana"], ["value", "Mozambican"], ["value", "Namibian"], ["value", "Nauruan"], ["value", "Nepalese"], ["value", "Netherlander"], ["value", "New Zealander"], ["value", "Ni-Vanuatu"], ["value", "Nicaraguan"], ["value", "Nigerian"], ["value", "Nigerien"], ["value", "North Korean"], ["value", "Northern Irish"], ["value", "Norwegian"], ["value", "Omani"], ["value", "Pakistani"], ["value", "Palauan"], ["value", "Panamanian"], ["value", "Papua New Guinean"], ["value", "Paraguayan"], ["value", "Peruvian"], ["value", "Polish"], ["value", "Portuguese"], ["value", "Qatari"], ["value", "Romanian"], ["value", "Russian"], ["value", "Rwandan"], ["value", "Saint Lucian"], ["value", "Salvadoran"], ["value", "Samoan"], ["value", "San Marinese"], ["value", "Sao Tomean"], ["value", "Saudi"], ["value", "Scottish"], ["value", "Senegalese"], ["value", "Serbian"], ["value", "Seychellois"], ["value", "Sierra Leonean"], ["value", "Singaporean"], ["value", "Slovakian"], ["value", "Slovenian"], ["value", "Solomon Islander"], ["value", "Somali"], ["value", "South African"], ["value", "South Korean"], ["value", "Spanish"], ["value", "Sri Lankan"], ["value", "Sudanese"], ["value", "Surinamer"], ["value", "Swazi"], ["value", "Swedish"], ["value", "Swiss"], ["value", "Syrian"], ["value", "Taiwanese"], ["value", "Tajik"], ["value", "Tanzanian"], ["value", "Thai"], ["value", "Togolese"], ["value", "Tongan"], ["value", "Trinidadian or Tobagonian"], ["value", "Tunisian"], ["value", "Turkish"], ["value", "Tuvaluan"], ["value", "Ugandan"], ["value", "Ukrainian"], ["value", "Uruguayan"], ["value", "Uzbekistani"], ["value", "Venezuelan"], ["value", "Vietnamese"], ["value", "Welsh"], ["value", "Yemenite"], ["value", "Zambian"], ["value", "Zimbabwean"], ["type", "text", "matInput", "", "placeholder", "City", "formControlName", "city"], ["type", "text", "matInput", "", "placeholder", "Address", "formControlName", "address"], [4, "ngIf"], [1, "control", 3, "ngClass"], ["type", "text", "matInput", "", "placeholder", "Bar council number", "formControlName", "bcn"], ["type", "text", "matInput", "", "placeholder", "University", "formControlName", "uni"], ["type", "number", "matInput", "", "placeholder", "year since you are practicing", "formControlName", "year"], ["type", "text", "matInput", "", "placeholder", "Area of Practice", "formControlName", "prac"], [1, "w-100", 2, "display", "flex"], ["mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-stroked-button", "", "color", "primary", "routerLink", "/dashboard", 2, "margin-left", "10px"], [1, "flex-spacer"]], template: function EditProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EditProfileComponent_form_5_Template, 461, 12, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.profileForm);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".w-100[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 6px auto;\n}\n\n.bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"/assets/bg.jpg\");\n  \n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  \n  height: 160%;\n  \n  background-position: inherit;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.vache[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-weight: bold;\n  font-size: medium;\n  font-style: normal;\n}\n\n.bg-text[_ngcontent-%COMP%] {\n  color: black;\n  \n  \n  position: absolute;\n  top: 10%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  width: 50%;\n  height: 20%;\n  \n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUdBO0VBQ0EsbUJBQUE7RUFFQSx1Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHNDQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBSEE7O0FBTUE7RUFDQSxpQkFBQTtFQUNFLHFEQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFIQSIsImZpbGUiOiJlZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudy0xMDAge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luOiA2cHggYXV0bztcclxuXHJcbn1cclxuXHJcbi5iZy1pbWFnZSB7XHJcbi8qIFRoZSBpbWFnZSB1c2VkICovXHJcbi8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbnByLmJyaWdodHNwb3RjZG4uY29tL2RpbXM0L2RlZmF1bHQvZmY5MzIxMy8yMTQ3NDgzNjQ3L3N0cmlwL3RydWUvY3JvcC8xODc1eDEyNTArMCswL3Jlc2l6ZS84ODB4NTg3IS9xdWFsaXR5LzkwLz91cmw9aHR0cDolMkYlMkZucHItYnJpZ2h0c3BvdC5zMy5hbWF6b25hd3MuY29tJTJGbGVnYWN5JTJGc2l0ZXMlMkZ3dnBuJTJGZmlsZXMlMkYyMDE1MTElMkZTY2FsZXNvZkp1c3RpY2UuanBnXCIpO1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYmcuanBnJyk7XHJcbi8qIEFkZCB0aGUgYmx1ciBlZmZlY3QgKi9cclxuZmlsdGVyOiBibHVyKDhweCk7XHJcbi13ZWJraXQtZmlsdGVyOiBibHVyKDhweCk7XHJcblxyXG4vKiBGdWxsIGhlaWdodCAqL1xyXG5oZWlnaHQ6IDE2MCU7XHJcblxyXG4vKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cclxuYmFja2dyb3VuZC1wb3NpdGlvbjppbmhlcml0O1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4udmFjaGV7XHJcbm1hcmdpbjogMjBweCBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5Okdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4uYmctdGV4dCB7XHJcbmNvbG9yOiBibGFjaztcclxuLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXHJcbi8qIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7ICovXHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiAxMCU7XHJcbmxlZnQ6IDUwJTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbnotaW5kZXg6IDI7XHJcbndpZHRoOiA1MCU7XHJcbmhlaWdodDogMjAlO1xyXG4vKiBwYWRkaW5nOiAyMHB4OyAqL1xyXG4vKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "caOc":
/*!****************************************!*\
  !*** ./src/app/models/lawyer.model.ts ***!
  \****************************************/
/*! exports provided: Lawyer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lawyer", function() { return Lawyer; });
class Lawyer {
    constructor(firstname, lastname, birthdate, email, phnno, year, address, uni, city, gender, prac, password, bcn, nationality) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.email = email;
        this.phnno = phnno;
        this.year = year;
        this.address = address;
        this.uni = uni;
        this.city = city;
        this.gender = gender;
        this.prac = prac;
        this.password = password;
        this.bcn = bcn;
        this.nationality = nationality;
    }
}


/***/ }),

/***/ "e8NY":
/*!******************************************************!*\
  !*** ./src/app/lawyer-list/lawyer-list.component.ts ***!
  \******************************************************/
/*! exports provided: LawyerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LawyerListComponent", function() { return LawyerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function LawyerListComponent_table_5_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LawyerListComponent_table_5_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", element_r12.firstname, " ", element_r12.lastname, "");
} }
function LawyerListComponent_table_5_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LawyerListComponent_table_5_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.email, " ");
} }
function LawyerListComponent_table_5_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contact No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LawyerListComponent_table_5_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.phnno, " ");
} }
function LawyerListComponent_table_5_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LawyerListComponent_table_5_td_12_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LawyerListComponent_table_5_td_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const element_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.onMessage(element_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LawyerListComponent_table_5_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
} }
function LawyerListComponent_table_5_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function LawyerListComponent_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LawyerListComponent_table_5_th_2_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LawyerListComponent_table_5_td_3_Template, 2, 2, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LawyerListComponent_table_5_th_5_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LawyerListComponent_table_5_td_6_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LawyerListComponent_table_5_th_8_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LawyerListComponent_table_5_td_9_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LawyerListComponent_table_5_th_11_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LawyerListComponent_table_5_td_12_Template, 3, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LawyerListComponent_table_5_tr_13_Template, 1, 0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LawyerListComponent_table_5_tr_14_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
} }
function LawyerListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No data is available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LawyerListComponent {
    constructor(caseService, router) {
        this.caseService = caseService;
        this.router = router;
        this.data = [];
        this.displayedColumns = ['Name', 'Email', 'Contact No', 'Action'];
    }
    ngOnInit() {
        this.caseService.getLawyerList().subscribe((data) => {
            this.data = data;
        });
    }
    onMessage(data) {
        this.caseService.storeLawyerForChat(data);
        this.router.navigate(['/clientChatroom']);
    }
}
LawyerListComponent.ɵfac = function LawyerListComponent_Factory(t) { return new (t || LawyerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_1__["CaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LawyerListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LawyerListComponent, selectors: [["app-lawyer-list"]], decls: 7, vars: 2, consts: [[1, "bg-image"], [1, "grid-container", "bg-text"], [1, "mat-h1", 2, "font-family", "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "font-weight", "bold"], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], [4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Email"], ["matColumnDef", "Contact No"], ["matColumnDef", "Action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function LawyerListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lawyers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LawyerListComponent_table_5_Template, 15, 3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LawyerListComponent_div_6_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 90%;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxhd3llci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNJLFVBQUE7QUFDSiIsImZpbGUiOiJsYXd5ZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgfVxyXG4iXX0= */", ".bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"/assets/bg.jpg\");\n  \n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  \n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bg-text[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: normal;\n  \n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 95%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFFQSx1Q0FBQTtFQUVBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBSko7O0FBT0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBRUEsbUJBQUE7QUFMSiIsImZpbGUiOiJjaGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5iZy1pbWFnZSB7XHJcbiAgICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9ucHIuYnJpZ2h0c3BvdGNkbi5jb20vZGltczQvZGVmYXVsdC9mZjkzMjEzLzIxNDc0ODM2NDcvc3RyaXAvdHJ1ZS9jcm9wLzE4NzV4MTI1MCswKzAvcmVzaXplLzg4MHg1ODchL3F1YWxpdHkvOTAvP3VybD1odHRwOiUyRiUyRm5wci1icmlnaHRzcG90LnMzLmFtYXpvbmF3cy5jb20lMkZsZWdhY3klMkZzaXRlcyUyRnd2cG4lMkZmaWxlcyUyRjIwMTUxMSUyRlNjYWxlc29mSnVzdGljZS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYmcuanBnJyk7XHJcblxyXG4gICAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xyXG4gICAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG5cclxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmJnLXRleHQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLy8gei1pbmRleDogMjtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "eECP":
/*!******************************************!*\
  !*** ./src/app/services/case.service.ts ***!
  \******************************************/
/*! exports provided: CaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseService", function() { return CaseService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "ds6q");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert_dist_sweetalert_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert/dist/sweetalert.min.js */ "GUC0");
/* harmony import */ var sweetalert_dist_sweetalert_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert_dist_sweetalert_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const apiUrl = 'http://localhost:4000/api/';
class CaseService {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.Cases = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.singleCase = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.linkedClient = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.linkedLawyer = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    handleError(error) {
        console.error(`Backend returned code ${error.status}, ` +
            `body was: ${error.message}`);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])('Something bad happened; please try again later.');
    }
    addCase(addcase) {
        this.http.post(apiUrl + 'addcase', addcase).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError))
            .subscribe((res) => {
            this.Caseid = res._id;
            this.singleCase.next(res);
        }, (err) => {
            console.log(err);
        });
    }
    getCases() {
        this.http.get(apiUrl + 'cases').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            if (data) {
                return data;
            }
            else {
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError);
            }
        })).subscribe((data) => {
            this.Cases.next(data);
        }, (err) => {
            console.log(err);
        });
    }
    getpreadmittedCases() {
        this.http.get(apiUrl + 'preadmittedcases').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            if (data) {
                return data;
            }
            else {
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError);
            }
        })).subscribe((data) => {
            this.Cases.next(data);
        }, (err) => {
            console.log(err);
        });
    }
    getadmittedCases() {
        this.http.get(apiUrl + 'admittedcases').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            if (data) {
                return data;
            }
            else {
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError);
            }
        })).subscribe((data) => {
            this.Cases.next(data);
        }, (err) => {
            console.log(err);
        });
    }
    updateDetails(caseData) {
        this.http.patch(apiUrl + 'case/' + caseData._id, { details: caseData.details }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError))
            .subscribe((data) => {
            this.router.navigate(["/caseinfo"]);
            this.singleCase.next(data);
        }, (err) => {
            console.log(err);
        });
    }
    updateCase(caseData) {
        this.http.patch(apiUrl + 'editcase/' + caseData._id, caseData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError)).subscribe((data) => {
            this.singleCase.next(data);
        }, (err) => {
            console.log(err);
        });
    }
    deleteCase(id) {
        this.http.delete(apiUrl + 'case/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError)).subscribe((data) => {
            // alert(data.message);
            sweetalert_dist_sweetalert_min_js__WEBPACK_IMPORTED_MODULE_3___default()("", "Successfully Deleted", "info");
        });
    }
    getdisposedCases() {
        this.http.get(apiUrl + 'disposedcases').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            if (data) {
                return data;
            }
            else {
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError);
            }
        })).subscribe((data) => {
            this.Cases.next(data);
        }, (err) => {
            console.log(err);
        });
    }
    disposeCase(_id) {
        this.http.patch(apiUrl + 'makedispose', { _id }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError)).subscribe((data) => {
        });
    }
    addOrder(id, data) {
        this.http.patch(`${apiUrl}case/order/${id}`, { order: data }).subscribe((CaseData) => {
            this.singleCase.next(CaseData);
        }, (err) => {
            console.log(err);
        });
    }
    onUploadDoc(file, id) {
        const formData = new FormData();
        const files = file;
        for (let index = 0; index < files.length; index++) {
            formData.append('file', files.item(index), files.item(index).name);
        }
        return this.http.post(apiUrl + "uploadPdf/" + id, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    onDeleteDoc(files, id) {
        this.http.patch(apiUrl + 'updateDoc/' + id, files).subscribe((data) => {
            this.singleCase.next(data);
        }, (err) => {
            console.log(err);
        });
    }
    unlinkClient() {
        this.linkedClient.next(null);
    }
    setSingleCaseDetails(caseData) {
        this.singleCase.next(caseData);
    }
    setCases(data) {
        this.Cases.next(data);
    }
    setLinkedClient(data) {
        this.linkedClient.next(data);
    }
    getCaseData(id) {
        this.Caseid = id;
        this.http.get(apiUrl + 'case/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError)).subscribe((data) => {
            this.singleCase.next(data);
        });
    }
    linkClient(_id, id) {
        this.http.patch(`${apiUrl}linkClient/${id}`, { userId: _id }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError)).subscribe((data) => {
            this.singleCase.next(data);
        }, (err) => {
            console.log(err);
        });
    }
    getLinkedClient(id) {
        this.http.get(`${apiUrl}getLinkedClient/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError)).subscribe((data) => {
            this.linkedClient.next(data);
            this.clientData = data;
        }, (err) => {
            console.log(err);
        });
    }
    getLinkedLawyer(id) {
        this.http.get(`${apiUrl}getLinkedLawyer/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError)).subscribe((data) => {
            this.linkedLawyer.next(data);
            this.lawyerData = data;
        }, (err) => {
            console.log(err);
        });
    }
    getClientList() {
        return this.http.get(`${apiUrl}getClientList`);
    }
    getClient(id) {
        this.http.get(`${apiUrl}getClient/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError)).subscribe((data) => {
            this.linkedClient.next(data);
            this.clientData = data;
        }, (err) => {
            console.log(err);
        });
    }
    searchclients(term) {
        console.log(term);
        if (!term.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }
        return this.http.get(`${apiUrl}getClients?firstname=${term}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(x => console.log(x)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handle('searchClients', [])));
    }
    handle(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
        };
    }
    getsingleCaseUpdateListener() {
        return this.singleCase.asObservable();
    }
    getlinkedClientUpdateListener() {
        return this.linkedClient.asObservable();
    }
    getlinkedLawyerUpdateListener() {
        return this.linkedLawyer.asObservable();
    }
    getId() {
        return this.Caseid;
    }
    returnClient() {
        return this.clientData;
    }
    returnLawyer() {
        return this.lawyerData;
    }
    getCasesUpdateListener() {
        return this.Cases.asObservable();
    }
    downloadPDF(filename, filetype) {
        return this.http.get(apiUrl + 'file/' + filename, { responseType: 'blob' });
    }
    deletePDF(filename) {
        this.http.delete(apiUrl + 'deletefile/' + filename).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError)).subscribe((data) => {
            // alert(data.message);
            sweetalert_dist_sweetalert_min_js__WEBPACK_IMPORTED_MODULE_3___default()("", "file deleted Successfully!");
        });
    }
    getLawyerDashboard() {
        return this.http.get(apiUrl + 'lawyerDashboard');
    }
    getClientDashboard() {
        return this.http.get(apiUrl + 'clientDashboard');
    }
    //lawyer side
    getExistingChats() {
        return this.http.get(apiUrl + 'lawyer/getchatrooms');
    }
    storeClientForChat(clientData) {
        this.clientData = clientData;
    }
    //client side
    getExistingLawyerChat() {
        return this.http.get(apiUrl + 'client/getchatrooms');
    }
    storeLawyerForChat(lawyerData) {
        this.lawyerData = lawyerData;
    }
    getLawyerList() {
        return this.http.get(`${apiUrl}getLawyerList`);
    }
    getProfile() {
        return this.http.get(`${apiUrl}getLawyerProfile`);
    }
    editLawyerProfile(data) {
        return this.http.patch(`${apiUrl}editlawyerprofile`, data);
    }
    getClientProfile() {
        return this.http.get(`${apiUrl}getClientProfile`);
    }
    editClientProfile(data) {
        return this.http.patch(`${apiUrl}editclientprofile`, data);
    }
    getClientCases() {
        this.http.get(apiUrl + 'getClientCases').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            if (data) {
                return data;
            }
            else {
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError);
            }
        })).subscribe((data) => {
            this.Cases.next(data);
        }, (err) => {
            console.log(err);
        });
    }
}
CaseService.ɵfac = function CaseService_Factory(t) { return new (t || CaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
CaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CaseService, factory: CaseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ek81":
/*!**************************************************************!*\
  !*** ./src/app/client-chatroom/client-chatroom.component.ts ***!
  \**************************************************************/
/*! exports provided: ClientChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientChatroomComponent", function() { return ClientChatroomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/websocket.service */ "Gyf/");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function ClientChatroomComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("userMessage", item_r2.username == ctx_r0.username)("secUserMessage", item_r2.username != ctx_r0.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.message);
} }
function ClientChatroomComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ClientChatroomComponent {
    constructor(route, webSocketService, authService, caseService) {
        this.route = route;
        this.webSocketService = webSocketService;
        this.authService = authService;
        this.caseService = caseService;
        this.message = '';
        this.messageArray = [];
        this.isTyping = false;
        this.webSocketService.newMessageReceived().subscribe(data => {
            this.messageArray.push(data);
            this.isTyping = false;
        });
        this.webSocketService.receivedTyping().subscribe(bool => {
            this.isTyping = bool.isTyping;
        });
    }
    ngOnInit() {
        this.lawyerData = this.caseService.returnLawyer();
        const currentUser = this.authService.getUserId();
        this.username = this.authService.getuserName();
        this.chatroom = this.lawyerData.userId + currentUser;
        this.webSocketService.joinRoom({ lawyer: this.lawyerData.userId, room: this.chatroom, client: currentUser });
        this.authService.getChatRoomsChat(this.chatroom).subscribe(messages => {
            this.messageArray = messages;
        });
    }
    sendMessage() {
        if (this.message.trim() == '') {
            return;
        }
        this.webSocketService.sendMessage({ room: this.chatroom, user: this.username, message: this.message });
        this.message = '';
    }
    typing() {
        this.webSocketService.typing({ room: this.chatroom, user: this.username });
    }
}
ClientChatroomComponent.ɵfac = function ClientChatroomComponent_Factory(t) { return new (t || ClientChatroomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_4__["CaseService"])); };
ClientChatroomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientChatroomComponent, selectors: [["app-client-chatroom"]], decls: 12, vars: 5, consts: [[1, "bg-image"], ["id", "mario-chat", 1, "bg-text"], ["id", "chat-window"], [4, "ngFor", "ngForOf"], ["class", "secUserMessage", 4, "ngIf"], [2, "display", "flex"], ["name", "message", "type", "text", "placeholder", "Message", 2, "width", "80%", 3, "ngModel", "keypress", "ngModelChange"], [1, "flex-spacer"], ["id", "send", 2, "width", "20%", 3, "click"], [1, "secUserMessage"], [1, "typing", "typing-1"], [1, "typing", "typing-2"], [1, "typing", "typing-3"]], template: function ClientChatroomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClientChatroomComponent_div_5_Template, 3, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ClientChatroomComponent_div_6_Template, 4, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ClientChatroomComponent_Template_input_keypress_8_listener() { return ctx.typing(); })("ngModelChange", function ClientChatroomComponent_Template_input_ngModelChange_8_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientChatroomComponent_Template_button_click_10_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.lawyerData.firstname, " ", ctx.lawyerData.lastname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messageArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTyping);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 10px 20px;\n  color: #0D570D;\n}\n\n#mario-chat[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  min-width: 500px;\n  margin: 30px auto;\n  border: 1px solid #ddd;\n  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.05);\n  border-radius: 2px;\n  border-radius: 10px;\n}\n\n#chat-window[_ngcontent-%COMP%] {\n  height: 500px;\n  overflow: auto;\n  background: #E2E2E2;\n}\n\n#output[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 14px 0px;\n  margin: 0 20px;\n  border-bottom: 1px solid #e9e9e9;\n  color: #555;\n}\n\n#output[_ngcontent-%COMP%] {\n  height: 500px;\n}\n\n#feedback[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #aaa;\n  padding: 14px 0px;\n  margin: 0 20px;\n}\n\n.chat-output[_ngcontent-%COMP%] {\n  height: 500px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: block;\n  padding: 10px 20px;\n}\n\ninput[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  background: #eee;\n  border: 0;\n  display: block;\n  width: 100%;\n  background: #fff;\n  border-bottom: 1px solid #eee;\n  font-family: Nunito;\n  font-size: 16px;\n}\n\n#send[_ngcontent-%COMP%] {\n  background: #0C491B;\n  color: #fff;\n  font-size: 18px;\n  border: 0;\n  padding: 12px 0;\n  width: 100%;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n#leave[_ngcontent-%COMP%] {\n  background: skyblue;\n  color: #fff;\n  font-size: 18px;\n  border: 0;\n  padding: 12px 0;\n  width: 100%;\n  border-radius: 0 0 2px 2px;\n}\n\n.userMessage[_ngcontent-%COMP%] {\n  margin: 1rem 1rem 1rem auto;\n  border-radius: 1.125rem 1.125rem 0 1.125rem;\n  background: #5B9B5B;\n  color: white;\n  box-sizing: border-box;\n  padding: 0.5rem 1rem;\n  min-height: 2.25rem;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 66%;\n}\n\n.secUserMessage[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0.5rem 1rem;\n  margin: 1rem;\n  background: #FFF;\n  border-radius: 1.125rem 1.125rem 1.125rem 0;\n  min-height: 2.25rem;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 66%;\n}\n\n.typing[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0.8rem;\n  height: 0.8rem;\n  margin-right: 0rem;\n  box-sizing: border-box;\n  background: #ccc;\n  border-radius: 50%;\n}\n\n.typing.typing-1[_ngcontent-%COMP%] {\n  animation: typing 3s infinite;\n}\n\n.typing.typing-2[_ngcontent-%COMP%] {\n  animation: typing 3s 250ms infinite;\n}\n\n.typing.typing-3[_ngcontent-%COMP%] {\n  animation: typing 3s 500ms infinite;\n}\n\n@keyframes typing {\n  0%, 75%, 100% {\n    transform: translate(0, 0.25rem) scale(0.9);\n    opacity: 0.5;\n  }\n  25% {\n    transform: translate(0, -0.25rem) scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNsaWVudC1jaGF0cm9vbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFHQTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFHQTtFQUNJLDJCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBRWdCLDZCQUFBO0FBQWhCOztBQUVBO0VBRVksbUNBQUE7QUFDWjs7QUFDQTtFQUVZLG1DQUFBO0FBRVo7O0FBV0U7RUFDRTtJQUNFLDJDQUFBO0lBQ0EsWUFBQTtFQUVKO0VBQUU7SUFDRSwwQ0FBQTtJQUNBLFVBQUE7RUFFSjtBQUNGIiwiZmlsZSI6ImNsaWVudC1jaGF0cm9vbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgY29sb3I6ICMwRDU3MEQ7XG59XG5cbiNtYXJpby1jaGF0e1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIG1pbi13aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3gtc2hhZG93OiAxcHggM3B4IDVweCByZ2JhKDAsMCwwLDAuMDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jY2hhdC13aW5kb3d7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjRTJFMkUyO1xufVxuXG4jb3V0cHV0IHB7XG4gICAgcGFkZGluZzogMTRweCAwcHg7XG4gICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWU5ZTk7XG4gICAgY29sb3I6ICM1NTU7XG59XG5cbiNvdXRwdXQge1xuICAgIGhlaWdodDogNTAwcHg7XG59XG5cbiNmZWVkYmFjayBwe1xuICAgIGNvbG9yOiAjYWFhO1xuICAgIHBhZGRpbmc6IDE0cHggMHB4O1xuICAgIG1hcmdpbjogMCAyMHB4O1xufVxuXG4uY2hhdC1vdXRwdXQge1xuICAgIGhlaWdodDogNTAwcHg7XG59XG5cblxubGFiZWx7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbmlucHV0e1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbiNzZW5ke1xuICAgIGJhY2tncm91bmQ6ICMwQzQ5MUI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNsZWF2ZSB7XG4gICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDEycHggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMnB4IDJweDtcbn1cblxuLnVzZXJNZXNzYWdlIHtcbiAgICBtYXJnaW46IDFyZW0gMXJlbSAxcmVtIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMS4xMjVyZW0gMS4xMjVyZW0gMCAxLjEyNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjNUI5QjVCO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIG1pbi1oZWlnaHQ6IDIuMjVyZW07XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1heC13aWR0aDogNjYlO1xufVxuXG4uc2VjVXNlck1lc3NhZ2Uge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogMS4xMjVyZW0gMS4xMjVyZW0gMS4xMjVyZW0gMDtcbiAgICBtaW4taGVpZ2h0OiAyLjI1cmVtO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXgtd2lkdGg6IDY2JTtcbn1cblxuLnR5cGluZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAwLjhyZW07XG4gICAgaGVpZ2h0OiAwLjhyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwcmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZDogI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50eXBpbmcudHlwaW5nLTEge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogdHlwaW5nIDNzIGluZmluaXRlO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHlwaW5nIDNzIGluZmluaXRlO1xufVxuLnR5cGluZy50eXBpbmctMiB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHR5cGluZyAzcyAyNTBtcyBpbmZpbml0ZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdHlwaW5nIDNzIDI1MG1zIGluZmluaXRlO1xufVxuLnR5cGluZy50eXBpbmctMyB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHR5cGluZyAzcyA1MDBtcyBpbmZpbml0ZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdHlwaW5nIDNzIDUwMG1zIGluZmluaXRlO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHR5cGluZyB7XG4gICAgMCUsIDc1JSwgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwLjI1cmVtKSBzY2FsZSgwLjkpO1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICAyNSUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTAuMjVyZW0pIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgdHlwaW5nIHtcbiAgICAwJSwgNzUlLCAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAuMjVyZW0pIHNjYWxlKDAuOSk7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMC4yNXJlbSkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfSJdfQ== */", "h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 10px 20px;\n  color: black;\n  background-color: white;\n}\n\n#mario-chat[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  min-width: 500px;\n  margin: 30px auto;\n  border: 1px solid #ddd;\n  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.05);\n  border-radius: 2px;\n  border-radius: 10px;\n}\n\n#chat-window[_ngcontent-%COMP%] {\n  height: 500px;\n  overflow: auto;\n  background: #E2E2E2;\n}\n\n#output[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 14px 0px;\n  margin: 0 20px;\n  border-bottom: 1px solid #e9e9e9;\n  color: #555;\n}\n\n#output[_ngcontent-%COMP%] {\n  height: 500px;\n}\n\n#feedback[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #aaa;\n  padding: 14px 0px;\n  margin: 0 20px;\n}\n\n.chat-output[_ngcontent-%COMP%] {\n  height: 500px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: block;\n  padding: 10px 20px;\n}\n\ninput[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  background: #eee;\n  border: 0;\n  display: block;\n  width: 100%;\n  background: #fff;\n  border-bottom: 1px solid #eee;\n  font-family: Nunito;\n  font-size: 16px;\n}\n\n#send[_ngcontent-%COMP%] {\n  background: #0C491B;\n  color: #fff;\n  font-size: 18px;\n  border: 0;\n  padding: 12px 0;\n  width: 100%;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n#leave[_ngcontent-%COMP%] {\n  background: skyblue;\n  color: #fff;\n  font-size: 18px;\n  border: 0;\n  padding: 12px 0;\n  width: 100%;\n  border-radius: 0 0 2px 2px;\n}\n\n.userMessage[_ngcontent-%COMP%] {\n  margin: 1rem 1rem 1rem auto;\n  border-radius: 1.125rem 1.125rem 0 1.125rem;\n  background: #5B9B5B;\n  color: white;\n  box-sizing: border-box;\n  padding: 0.5rem 1rem;\n  min-height: 2.25rem;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 66%;\n}\n\n.secUserMessage[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0.5rem 1rem;\n  margin: 1rem;\n  background: #FFF;\n  border-radius: 1.125rem 1.125rem 1.125rem 0;\n  min-height: 2.25rem;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 66%;\n}\n\n.typing[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0.8rem;\n  height: 0.8rem;\n  margin-right: 0rem;\n  box-sizing: border-box;\n  background: #ccc;\n  border-radius: 50%;\n}\n\n.typing.typing-1[_ngcontent-%COMP%] {\n  animation: typing 3s infinite;\n}\n\n.typing.typing-2[_ngcontent-%COMP%] {\n  animation: typing 3s 250ms infinite;\n}\n\n.typing.typing-3[_ngcontent-%COMP%] {\n  animation: typing 3s 500ms infinite;\n}\n\n@keyframes typing {\n  0%, 75%, 100% {\n    transform: translate(0, 0.25rem) scale(0.9);\n    opacity: 0.5;\n  }\n  25% {\n    transform: translate(0, -0.25rem) scale(1);\n    opacity: 1;\n  }\n}\n\n.bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"/assets/bg.jpg\");\n  \n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  \n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bg-text[_ngcontent-%COMP%] {\n  color: black;\n  background-color: white;\n  font-weight: normal;\n  \n  position: absolute;\n  top: 45%;\n  left: 50%;\n  width: 95%;\n  transform: translate(-50%, -50%);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXRyb29tLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBR0E7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBQUo7O0FBR0E7RUFDSSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUVnQiw2QkFBQTtBQUFoQjs7QUFFQTtFQUVZLG1DQUFBO0FBQ1o7O0FBQ0E7RUFFWSxtQ0FBQTtBQUVaOztBQVdFO0VBQ0U7SUFDRSwyQ0FBQTtJQUNBLFlBQUE7RUFFSjtFQUFFO0lBQ0UsMENBQUE7SUFDQSxVQUFBO0VBRUo7QUFDRjs7QUFDRTtFQUNFLG1CQUFBO0VBRUEsdUNBQUE7RUFFQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFFQSxnQkFBQTtFQUNBLFlBQUE7RUFFQSxzQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUhKOztBQU1FO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBRUEsZ0NBQUE7RUFFQSxtQkFBQTtBQUxKIiwiZmlsZSI6ImNoYXRyb29tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBjb2xvcjpibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuI21hcmlvLWNoYXR7XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgbWluLXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJveC1zaGFkb3c6IDFweCAzcHggNXB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNjaGF0LXdpbmRvd3tcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNFMkUyRTI7XG59XG5cbiNvdXRwdXQgcHtcbiAgICBwYWRkaW5nOiAxNHB4IDBweDtcbiAgICBtYXJnaW46IDAgMjBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcbiAgICBjb2xvcjogIzU1NTtcbn1cblxuI291dHB1dCB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cblxuI2ZlZWRiYWNrIHB7XG4gICAgY29sb3I6ICNhYWE7XG4gICAgcGFkZGluZzogMTRweCAwcHg7XG4gICAgbWFyZ2luOiAwIDIwcHg7XG59XG5cbi5jaGF0LW91dHB1dCB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cblxuXG5sYWJlbHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuaW5wdXR7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICBib3JkZXI6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuI3NlbmR7XG4gICAgYmFja2dyb3VuZDogIzBDNDkxQjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDEycHggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2xlYXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBza3libHVlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMTJweCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAycHggMnB4O1xufVxuXG4udXNlck1lc3NhZ2Uge1xuICAgIG1hcmdpbjogMXJlbSAxcmVtIDFyZW0gYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxLjEyNXJlbSAxLjEyNXJlbSAwIDEuMTI1cmVtO1xuICAgIGJhY2tncm91bmQ6ICM1QjlCNUI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgbWluLWhlaWdodDogMi4yNXJlbTtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiA2NiU7XG59XG5cbi5zZWNVc2VyTWVzc2FnZSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBib3JkZXItcmFkaXVzOiAxLjEyNXJlbSAxLjEyNXJlbSAxLjEyNXJlbSAwO1xuICAgIG1pbi1oZWlnaHQ6IDIuMjVyZW07XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1heC13aWR0aDogNjYlO1xufVxuXG4udHlwaW5nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDAuOHJlbTtcbiAgICBoZWlnaHQ6IDAuOHJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDByZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnR5cGluZy50eXBpbmctMSB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0eXBpbmcgM3MgaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0eXBpbmcgM3MgaW5maW5pdGU7XG59XG4udHlwaW5nLnR5cGluZy0yIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogdHlwaW5nIDNzIDI1MG1zIGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0eXBpbmcgM3MgMjUwbXMgaW5maW5pdGU7XG59XG4udHlwaW5nLnR5cGluZy0zIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogdHlwaW5nIDNzIDUwMG1zIGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0eXBpbmcgM3MgNTAwbXMgaW5maW5pdGU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgdHlwaW5nIHtcbiAgICAwJSwgNzUlLCAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAuMjVyZW0pIHNjYWxlKDAuOSk7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMC4yNXJlbSkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgdHlwaW5nIHtcbiAgICAwJSwgNzUlLCAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAuMjVyZW0pIHNjYWxlKDAuOSk7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMC4yNXJlbSkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIC5iZy1pbWFnZSB7XG4gICAgLyogVGhlIGltYWdlIHVzZWQgKi9cbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL25wci5icmlnaHRzcG90Y2RuLmNvbS9kaW1zNC9kZWZhdWx0L2ZmOTMyMTMvMjE0NzQ4MzY0Ny9zdHJpcC90cnVlL2Nyb3AvMTg3NXgxMjUwKzArMC9yZXNpemUvODgweDU4NyEvcXVhbGl0eS85MC8/dXJsPWh0dHA6JTJGJTJGbnByLWJyaWdodHNwb3QuczMuYW1hem9uYXdzLmNvbSUyRmxlZ2FjeSUyRnNpdGVzJTJGd3ZwbiUyRmZpbGVzJTJGMjAxNTExJTJGU2NhbGVzb2ZKdXN0aWNlLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYmcuanBnJyk7XG5cbiAgICAvKiBBZGQgdGhlIGJsdXIgZWZmZWN0ICovXG4gICAgZmlsdGVyOiBibHVyKDhweCk7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoOHB4KTtcblxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbiAgLmJnLXRleHQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDpub3JtYWw7XG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTsgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0NSU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgLy8gaGVpZ2h0OiBhdXRvO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC8vIHotaW5kZXg6IDI7XG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiJdfQ== */"] });


/***/ }),

/***/ "h/te":
/*!************************************************************!*\
  !*** ./src/app/registerclient/registerclient.component.ts ***!
  \************************************************************/
/*! exports provided: RegisterclientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterclientComponent", function() { return RegisterclientComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/must-match.validator */ "h2xV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");

















function RegisterclientComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterclientComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterclientComponent_mat_error_30_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterclientComponent_mat_error_30_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterclientComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterclientComponent_mat_error_30_mat_error_1_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterclientComponent_mat_error_30_mat_error_2_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.data.email.errors == null ? null : ctx_r2.data.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.data.email.errors == null ? null : ctx_r2.data.email.errors.email);
} }
function RegisterclientComponent_mat_error_35_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Contact number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterclientComponent_mat_error_35_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Contact number must be with code +91");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterclientComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterclientComponent_mat_error_35_mat_error_1_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterclientComponent_mat_error_35_mat_error_2_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.data.phnno.errors == null ? null : ctx_r3.data.phnno.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.data.phnno.errors == null ? null : ctx_r3.data.phnno.errors.pattern);
} }
function RegisterclientComponent_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterclientComponent_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Birthdate is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterclientComponent_mat_error_54_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterclientComponent_mat_error_54_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password must be at least 8 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterclientComponent_mat_error_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterclientComponent_mat_error_54_mat_error_1_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterclientComponent_mat_error_54_mat_error_2_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.data.password.errors == null ? null : ctx_r7.data.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.data.password.errors.minlength);
} }
function RegisterclientComponent_mat_error_57_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterclientComponent_mat_error_57_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Passwords must match");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterclientComponent_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterclientComponent_mat_error_57_mat_error_1_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterclientComponent_mat_error_57_mat_error_2_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.data.confirmpassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.data.confirmpassword.errors.mustMatch);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return ["/loginclient"]; };
class RegisterclientComponent {
    constructor(authService, formBuilder, router, _snackBar) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this._snackBar = _snackBar;
        this.submitted = false;
        this.maxDate = new Date();
        this.hide = true;
        this.hide1 = true;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            phnno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^\d{10}$/)]],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            birthdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]],
            confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_1__["MustMatch"])('password', 'confirmpassword')
        });
    }
    get data() { return this.registerForm.controls; }
    // getErrorMessage() {
    //   if (this.email.hasError('required')) {
    //     return 'You must enter a value';
    //   }
    //   return this.email.hasError('email') ? 'Not a valid email' : '';
    // }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.authService.createClient(this.registerForm.value, 'client');
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
RegisterclientComponent.ɵfac = function RegisterclientComponent_Factory(t) { return new (t || RegisterclientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
RegisterclientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterclientComponent, selectors: [["app-registerclient"]], decls: 68, vars: 30, consts: [[1, "bg-image"], [1, "grid-container", "bg-text"], [1, "vache", 2, "text-align", "center"], ["fxLayout", "column", 3, "formGroup", "ngSubmit"], [1, "w-100"], ["type", "text", "matInput", "", "placeholder", "First Name", "formControlName", "firstname", "required", ""], ["matSuffix", ""], [4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Last Name", "formControlName", "lastname", "required", ""], ["required", "", "aria-label", "Select", "matInput", "", "formControlName", "gender", "placeholder", "Gender", 1, "w-100"], ["value", "1", 2, "margin-left", "5px"], ["value", "2", 2, "margin-left", "5px"], ["value", "3", 2, "margin-left", "5px"], ["matInput", "", "placeholder", "abc@example.com", "required", "", "formControlName", "email", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Contact number", "required", "", "formControlName", "phnno", 3, "ngClass"], ["type", "text", "matInput", "", "placeholder", "City", "required", "", "formControlName", "city"], ["matInput", "", "formControlName", "birthdate", "required", "", 3, "matDatepicker", "max"], [3, "for"], ["color", "primary"], ["picker2", ""], ["type", "password", "matInput", "", "placeholder", "Password", "formControlName", "password", "required", "", 3, "type", "ngClass"], ["matSuffix", "", 2, "cursor", "pointer", 3, "click"], ["type", "password", "matInput", "", "placeholder", "Confirm Password", "formControlName", "confirmpassword", "required", "", 3, "type", "ngClass"], [1, "w-100", 2, "display", "flex"], ["mat-raised-button", "", "color", "primary"], ["mat-stroked-button", "", "color", "warn", "type", "reset", 2, "margin-left", "10px", 3, "click"], [1, "flex-spacer"], [2, "margin-top", "5px", 3, "routerLink"], [1, "invalid-feedback"]], template: function RegisterclientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Register as a Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterclientComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "sentiment_very_satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, RegisterclientComponent_mat_error_10_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "sentiment_very_satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RegisterclientComponent_mat_error_15_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-radio-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Gender: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-radio-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-radio-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "female");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-radio-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Enter your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, RegisterclientComponent_mat_error_30_Template, 3, 2, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, RegisterclientComponent_mat_error_35_Template, 3, 2, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "location_city");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, RegisterclientComponent_mat_error_40_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Birthdate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "mat-datepicker-toggle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "mat-datepicker", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, RegisterclientComponent_mat_error_49_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterclientComponent_Template_mat_icon_click_52_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, RegisterclientComponent_mat_error_54_Template, 3, 2, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, RegisterclientComponent_mat_error_57_Template, 3, 2, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterclientComponent_Template_mat_icon_click_58_listener() { return ctx.hide1 = !ctx.hide1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterclientComponent_Template_button_click_63_listener() { return ctx.onReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Already registered? Login here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.firstname.errors == null ? null : ctx.data.firstname.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.lastname.errors == null ? null : ctx.data.lastname.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](21, _c0, ctx.submitted && ctx.data.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.data.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](23, _c0, ctx.submitted && ctx.data.phnno.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.data.phnno.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.city.errors == null ? null : ctx.data.city.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r5)("max", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.birthdate.errors == null ? null : ctx.data.birthdate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](25, _c0, ctx.submitted && ctx.data.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.data.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide1 ? "password" : "text")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](27, _c0, ctx.submitted && ctx.data.confirmpassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.data.confirmpassword.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide1 ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](29, _c1));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultClassDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: [".w-100[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    margin: 6px auto;\r\n\r\n}\r\n\r\n.vache[_ngcontent-%COMP%]{\r\n  margin: 20px auto;\r\n    font-family:Georgia, 'Times New Roman', Times, serif;\r\n    font-weight: bold;\r\n    font-size: medium;\r\n    font-style: normal;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  background-image: url('/assets/bg.jpg');\r\n\r\n  \r\n  filter: blur(8px);\r\n  -webkit-filter: blur(8px);\r\n\r\n  \r\n  height: 120%;\r\n\r\n  \r\n  background-position:inherit;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.bg-text[_ngcontent-%COMP%] {\r\n  color: black;\r\n  \r\n  \r\n  position: absolute;\r\n  top: 25%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 2;\r\n  width: 50%;\r\n  height: 20%;\r\n  \r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyY2xpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCOztBQUVwQjs7QUFFQTtFQUNFLGlCQUFpQjtJQUNmLG9EQUFvRDtJQUNwRCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxUUFBcVE7RUFDclEsdUNBQXVDOztFQUV2Qyx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLHlCQUF5Qjs7RUFFekIsZ0JBQWdCO0VBQ2hCLFlBQVk7O0VBRVosc0NBQXNDO0VBQ3RDLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUIiLCJmaWxlIjoicmVnaXN0ZXJjbGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53LTEwMCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiA2cHggYXV0bztcclxuXHJcbn1cclxuXHJcbi52YWNoZXtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGZvbnQtZmFtaWx5Okdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4uYmctaW1hZ2Uge1xyXG4gIC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9ucHIuYnJpZ2h0c3BvdGNkbi5jb20vZGltczQvZGVmYXVsdC9mZjkzMjEzLzIxNDc0ODM2NDcvc3RyaXAvdHJ1ZS9jcm9wLzE4NzV4MTI1MCswKzAvcmVzaXplLzg4MHg1ODchL3F1YWxpdHkvOTAvP3VybD1odHRwOiUyRiUyRm5wci1icmlnaHRzcG90LnMzLmFtYXpvbmF3cy5jb20lMkZsZWdhY3klMkZzaXRlcyUyRnd2cG4lMkZmaWxlcyUyRjIwMTUxMSUyRlNjYWxlc29mSnVzdGljZS5qcGdcIik7ICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2JnLmpwZycpO1xyXG5cclxuICAvKiBBZGQgdGhlIGJsdXIgZWZmZWN0ICovXHJcbiAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuXHJcbiAgLyogRnVsbCBoZWlnaHQgKi9cclxuICBoZWlnaHQ6IDEyMCU7XHJcblxyXG4gIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246aW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5iZy10ZXh0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXHJcbiAgLyogYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTsgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyNSU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDIwJTtcclxuICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xyXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "h2xV":
/*!**************************************************!*\
  !*** ./src/app/_helpers/must-match.validator.ts ***!
  \**************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var sweetalert_dist_sweetalert_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert/dist/sweetalert.min.js */ "GUC0");
/* harmony import */ var sweetalert_dist_sweetalert_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert_dist_sweetalert_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification.service */ "OC8m");
/* harmony import */ var _local_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./local.service */ "s3jE");







const BACKEND_URL = 'http://localhost:4000/api';
class AuthService {
    constructor(http, router, notifyService, localService) {
        this.http = http;
        this.router = router;
        this.notifyService = notifyService;
        this.localService = localService;
        this.isAuthenticated = false;
        this.role = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getToken() {
        return this.token;
    }
    getuserName() {
        return this.userName;
    }
    getRole() {
        return this.role;
    }
    getIsAuth() {
        return this.isAuthenticated;
    }
    getUserId() {
        return this.userId;
    }
    getRoleListener() {
        return this.role.asObservable();
    }
    createLawyer(lawyer, role) {
        const data = Object.assign(Object.assign({}, lawyer), { role });
        this.http.post(BACKEND_URL + "/signupLawyer", data)
            .subscribe((response) => {
            const token = response.token;
            this.token = token;
            const role = response.role;
            if (token) {
                this.isAuthenticated = true;
                this.userId = response.userId;
                this.userName = response.userName;
                this.role.next(role);
                this.saveAuthData(token, role, this.userId, this.userName);
                location.reload();
                this.router.navigate(["/dashboard"]);
                this.notifyService.showSuccess("Logged In Successfully", "Yayy!");
            }
        }, error => {
            this.role.next(null);
        });
    }
    createClient(client, role) {
        const data = Object.assign(Object.assign({}, client), { role });
        this.http.post(BACKEND_URL + "/signupClient", data)
            .subscribe((response) => {
            const token = response.token;
            this.token = token;
            const role = response.role;
            if (token) {
                this.isAuthenticated = true;
                this.userId = response.userId;
                this.userName = response.userName;
                this.role.next(role);
                this.saveAuthData(token, role, this.userId, this.userName);
                location.reload();
                this.router.navigate(["/clientdashboard"]);
                this.notifyService.showSuccess("Logged In Successfully", "Yayy!");
            }
        }, error => {
            this.role.next(null);
        });
    }
    loginLawyer(email, password, role) {
        const authData = { email: email, password: password, role: role };
        this.http
            .post(BACKEND_URL + "/login", authData)
            .subscribe(response => {
            const token = response.token;
            this.token = token;
            const role = response.role;
            if (token) {
                this.isAuthenticated = true;
                this.userId = response.userId;
                this.userName = response.userName;
                this.role.next(role);
                this.saveAuthData(token, role, this.userId, this.userName);
                console.log(this.userName);
                location.reload();
                this.router.navigate(["/dashboard"]);
                this.notifyService.showSuccess("Logged In Successfully", "Yayy!");
            }
        }, error => {
            sweetalert_dist_sweetalert_min_js__WEBPACK_IMPORTED_MODULE_1___default()("Wrong Credentials!", "Please Try again!", "warning");
            this.role.next(null);
        });
    }
    loginClient(email, password, role) {
        const authData = { email: email, password: password, role: role };
        this.http
            .post(BACKEND_URL + "/loginClient", authData)
            .subscribe(response => {
            const token = response.token;
            this.token = token;
            const role = response.role;
            if (token) {
                this.isAuthenticated = true;
                this.userId = response.userId;
                this.userName = response.userName;
                this.role.next(role);
                this.saveAuthData(token, role, this.userId, this.userName);
                location.reload();
                this.router.navigate(["/clientdashboard"]);
                this.notifyService.showSuccess("Logged In Successfully", "Yayy!");
            }
        }, error => {
            sweetalert_dist_sweetalert_min_js__WEBPACK_IMPORTED_MODULE_1___default()("Wrong Credentials!", "Please Try again!", "warning");
            this.role.next(null);
        });
    }
    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        this.token = authInformation.token;
        this.isAuthenticated = true;
        const role = authInformation.role;
        this.userId = authInformation.userId;
        this.userName = authInformation.userName;
        this.role.next(role);
        if (role === "lawyer") {
            this.router.navigate(["/dashboard"]);
        }
        if (role === "client") {
            this.router.navigate(["/clientdashboard"]);
        }
    }
    logoutLawyer() {
        sweetalert_dist_sweetalert_min_js__WEBPACK_IMPORTED_MODULE_1___default()({
            title: "Are you sure?",
            text: "",
            icon: "warning",
            // buttons: true,
            dangerMode: true,
            buttons: ["No", "Yes"],
        })
            .then((willDelete) => {
            if (willDelete) {
                sweetalert_dist_sweetalert_min_js__WEBPACK_IMPORTED_MODULE_1___default()("Successfully logged Out!", {
                    icon: "success",
                });
                this.http.post(BACKEND_URL + "/logoutLawyer", "").subscribe(response => {
                    this.token = null;
                    this.role.next(null);
                    this.userId = null;
                    this.userName = null;
                    this.isAuthenticated = false;
                    this.clearAuthData();
                    this.router.navigate(["/login"]);
                }, error => {
                    alert(error);
                });
            }
            else {
                sweetalert_dist_sweetalert_min_js__WEBPACK_IMPORTED_MODULE_1___default()("In the system");
            }
        });
        // alert("Logout Successfully !");
        // }, error => {
        //   alert(error);
        // });
    }
    getChatRoomsChat(chatRoom) {
        return this.http.get('http://localhost:4000/api/chatroom/' + chatRoom);
    }
    saveAuthData(token, role, userId, userName) {
        const user = { token: token, role: role, userId: userId, userName: userName };
        this.localService.setJsonValue('user', user);
    }
    clearAuthData() {
        this.localService.clear();
    }
    getAuthData() {
        const user = this.localService.getJsonValue('user');
        if (!user) {
            return;
        }
        return {
            token: user.token,
            role: user.role,
            userId: user.userId,
            userName: user.userName
        };
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_service__WEBPACK_IMPORTED_MODULE_6__["LocalService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "lwBU":
/*!********************************************************!*\
  !*** ./src/app/client-cases/client-cases.component.ts ***!
  \********************************************************/
/*! exports provided: ClientCasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCasesComponent", function() { return ClientCasesComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");












function ClientCasesComponent_mat_expansion_panel_7_mat_panel_description_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-panel-description", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "V/s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const case_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 3, case_r2.petitioner, 0, 25));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](8, 7, case_r2.respondent, 0, 25));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](case_r2.status);
} }
function ClientCasesComponent_mat_expansion_panel_7_mat_panel_description_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "V/s");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const case_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 3, case_r2.petitioner, 0, 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](8, 7, case_r2.respondent, 0, 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](case_r2.status);
} }
function ClientCasesComponent_mat_expansion_panel_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-expansion-panel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("opened", function ClientCasesComponent_mat_expansion_panel_7_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.panelOpenState = true; })("closed", function ClientCasesComponent_mat_expansion_panel_7_Template_mat_expansion_panel_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-expansion-panel-header", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ClientCasesComponent_mat_expansion_panel_7_mat_panel_description_6_Template, 11, 11, "mat-panel-description", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ClientCasesComponent_mat_expansion_panel_7_mat_panel_description_8_Template, 12, 11, "mat-panel-description", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClientCasesComponent_mat_expansion_panel_7_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const case_r2 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.onView(case_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const case_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("collapsedHeight", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 6, ctx_r0.isHandset$) ? "129px" : "")("expandedHeight", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 8, ctx_r0.isHandset$) ? "129px" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", i_r3 + 1, " ) ", case_r2.stampNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 10, ctx_r0.isHandset$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 12, ctx_r0.isHandset$) === false);
} }
const _c0 = function () { return [10, 25, 50]; };
function ClientCasesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-paginator", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx_r1.cases.length)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
} }
class ClientCasesComponent {
    constructor(breakpointObserver, caseService, router) {
        this.breakpointObserver = breakpointObserver;
        this.caseService = caseService;
        this.router = router;
        this.panelOpenState = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
    }
    ngOnInit() {
        this.caseSub = this.caseService.getCasesUpdateListener().subscribe((data) => {
            this.cases = data;
        });
        this.caseService.getClientCases();
    }
    onView(id) {
        this.caseService.getLinkedLawyer(id);
        this.caseService.getCaseData(id);
        this.router.navigate(["/clientcaseinfo"]);
    }
    ngOnDestroy() {
        this.caseSub.unsubscribe();
    }
}
ClientCasesComponent.ɵfac = function ClientCasesComponent_Factory(t) { return new (t || ClientCasesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_3__["CaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ClientCasesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClientCasesComponent, selectors: [["app-client-cases"]], decls: 11, vars: 2, consts: [[1, "bg-image"], [1, "grid-container", "bg-text"], [2, "display", "flex"], [1, "mat-h1", 2, "font-family", "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "font-weight", "bold"], [1, "flex-spacer"], ["multi", ""], ["class", "panel", "hideToggle", "", 3, "opened", "closed", 4, "ngFor", "ngForOf"], ["style", "width: 95%;", 4, "ngIf"], ["hideToggle", "", 1, "panel", 3, "opened", "closed"], [2, "padding-top", "9px", 3, "collapsedHeight", "expandedHeight"], ["fxLayout", "column", 4, "ngIf"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["fxLayout", "column"], [2, "color", "red"], [2, "color", "black"], [2, "color", "red", "margin-left", "10px"], [2, "margin-left", "10px"], [2, "margin-right", "70px", "color", "black"], [2, "width", "95%"], [3, "length", "pageSize", "pageSizeOptions"]], template: function ClientCasesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-accordion", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ClientCasesComponent_mat_expansion_panel_7_Template, 13, 14, "mat-expansion-panel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ClientCasesComponent_div_10_Template, 2, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cases);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cases.length != 0);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelDescription"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 90%;\n}\n\n.panel[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNsaWVudC1jYXNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJjbGllbnQtY2FzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ucGFuZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbn1cclxuIl19 */", ".bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"/assets/bg.jpg\");\n  \n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  \n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bg-text[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: normal;\n  \n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 95%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFFQSx1Q0FBQTtFQUVBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBSko7O0FBT0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBRUEsbUJBQUE7QUFMSiIsImZpbGUiOiJjaGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5iZy1pbWFnZSB7XHJcbiAgICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9ucHIuYnJpZ2h0c3BvdGNkbi5jb20vZGltczQvZGVmYXVsdC9mZjkzMjEzLzIxNDc0ODM2NDcvc3RyaXAvdHJ1ZS9jcm9wLzE4NzV4MTI1MCswKzAvcmVzaXplLzg4MHg1ODchL3F1YWxpdHkvOTAvP3VybD1odHRwOiUyRiUyRm5wci1icmlnaHRzcG90LnMzLmFtYXpvbmF3cy5jb20lMkZsZWdhY3klMkZzaXRlcyUyRnd2cG4lMkZmaWxlcyUyRjIwMTUxMSUyRlNjYWxlc29mSnVzdGljZS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYmcuanBnJyk7XHJcblxyXG4gICAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xyXG4gICAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG5cclxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmJnLXRleHQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLy8gei1pbmRleDogMjtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "n90K":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var secure_web_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! secure-web-storage */ "pJXH");
/* harmony import */ var secure_web_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(secure_web_storage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



const SECRET_KEY = 'secret_key';
class StorageService {
    constructor() {
        this.secureStorage = new secure_web_storage__WEBPACK_IMPORTED_MODULE_0___default.a(localStorage, {
            hash: function hash(key) {
                key = crypto_js__WEBPACK_IMPORTED_MODULE_1___default.a.SHA256(key, SECRET_KEY);
                return key.toString();
            },
            // Encrypt the localstorage data
            encrypt: function encrypt(data) {
                data = crypto_js__WEBPACK_IMPORTED_MODULE_1___default.a.AES.encrypt(data, SECRET_KEY);
                data = data.toString();
                return data;
            },
            // Decrypt the encrypted data
            decrypt: function decrypt(data) {
                data = crypto_js__WEBPACK_IMPORTED_MODULE_1___default.a.AES.decrypt(data, SECRET_KEY);
                data = data.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1___default.a.enc.Utf8);
                return data;
            }
        });
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pg5L":
/*!**********************************************************************!*\
  !*** ./src/app/client-edit-profile/client-edit-profile.component.ts ***!
  \**********************************************************************/
/*! exports provided: ClientEditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEditProfileComponent", function() { return ClientEditProfileComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/notification.service */ "OC8m");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















const _c0 = function (a0) { return { "is-invalid": a0 }; };
function ClientEditProfileComponent_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ClientEditProfileComponent_form_5_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onSubmit(ctx_r2.profileForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "sentiment_very_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "sentiment_very_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Birthdate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-datepicker-toggle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "mat-datepicker", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Enter your email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "location_city");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.profileForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r1)("max", ctx_r0.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx_r0.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.profileForm.invalid);
} }
class ClientEditProfileComponent {
    constructor(caseService, notifyService, router) {
        this.caseService = caseService;
        this.notifyService = notifyService;
        this.router = router;
    }
    ngOnInit() {
        this.InitForm();
    }
    InitForm() {
        this.caseService.getClientProfile().subscribe(res => {
            this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                'firstname': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({ value: res.firstname, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
                'lastname': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({ value: res.lastname, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
                'birthdate': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({ value: res.birthdate, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
                'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({ value: res.email, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
                'phnno': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({ value: res.phnno, disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^\d{10}$/)]),
                'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](res.city, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            });
        });
    }
    onSubmit(formData) {
        console.log("formData::", formData);
        this.caseService.editClientProfile(formData).subscribe();
        this.notifyService.showInfo("", "Profile Updated");
        this.router.navigate(['/clientdashboard']);
    }
}
ClientEditProfileComponent.ɵfac = function ClientEditProfileComponent_Factory(t) { return new (t || ClientEditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_2__["CaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ClientEditProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ClientEditProfileComponent, selectors: [["app-client-edit-profile"]], decls: 6, vars: 1, consts: [[1, "bg-image"], [1, "grid-container", "bg-text"], [1, "vache", 2, "text-align", "center"], ["fxLayout", "column", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["fxLayout", "column", 3, "formGroup", "ngSubmit"], [1, "w-100"], ["type", "text", "matInput", "", "placeholder", "First Name", "formControlName", "firstname"], ["matSuffix", ""], ["type", "text", "matInput", "", "placeholder", "Last Name", "formControlName", "lastname"], ["matInput", "", "formControlName", "birthdate", 3, "matDatepicker", "max"], [3, "for"], ["color", "primary"], ["picker2", ""], ["matInput", "", "placeholder", "abc@example.com", "formControlName", "email"], ["type", "text", "matInput", "", "placeholder", "Contact number", "formControlName", "phnno", 3, "ngClass"], ["type", "text", "matInput", "", "placeholder", "City", "formControlName", "city"], [1, "w-100", 2, "display", "flex"], ["mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-stroked-button", "", "color", "primary", "routerLink", "/clientdashboard", 2, "margin-left", "10px"], [1, "flex-spacer"]], template: function ClientEditProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ClientEditProfileComponent_form_5_Template, 37, 8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.profileForm);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".w-100[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 6px auto;\n}\n\n.bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"/assets/bg.jpg\");\n  \n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  \n  height: 100%;\n  \n  background-position: inherit;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.vache[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-weight: bold;\n  font-size: medium;\n  font-style: normal;\n}\n\n.bg-text[_ngcontent-%COMP%] {\n  color: black;\n  \n  \n  position: absolute;\n  top: 10%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  width: 50%;\n  height: 20%;\n  \n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNsaWVudC1lZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFHQTtFQUNBLG1CQUFBO0VBRUEsdUNBQUE7RUFFQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFFQSxnQkFBQTtFQUNBLFlBQUE7RUFFQSxzQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUpBOztBQU9BO0VBQ0EsaUJBQUE7RUFDRSxxREFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBSkEiLCJmaWxlIjoiY2xpZW50LWVkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53LTEwMCB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW46IDZweCBhdXRvO1xyXG5cclxufVxyXG5cclxuLmJnLWltYWdlIHtcclxuLyogVGhlIGltYWdlIHVzZWQgKi9cclxuLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9ucHIuYnJpZ2h0c3BvdGNkbi5jb20vZGltczQvZGVmYXVsdC9mZjkzMjEzLzIxNDc0ODM2NDcvc3RyaXAvdHJ1ZS9jcm9wLzE4NzV4MTI1MCswKzAvcmVzaXplLzg4MHg1ODchL3F1YWxpdHkvOTAvP3VybD1odHRwOiUyRiUyRm5wci1icmlnaHRzcG90LnMzLmFtYXpvbmF3cy5jb20lMkZsZWdhY3klMkZzaXRlcyUyRnd2cG4lMkZmaWxlcyUyRjIwMTUxMSUyRlNjYWxlc29mSnVzdGljZS5qcGdcIik7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9iZy5qcGcnKTtcclxuXHJcbi8qIEFkZCB0aGUgYmx1ciBlZmZlY3QgKi9cclxuZmlsdGVyOiBibHVyKDhweCk7XHJcbi13ZWJraXQtZmlsdGVyOiBibHVyKDhweCk7XHJcblxyXG4vKiBGdWxsIGhlaWdodCAqL1xyXG5oZWlnaHQ6IDEwMCU7XHJcblxyXG4vKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cclxuYmFja2dyb3VuZC1wb3NpdGlvbjppbmhlcml0O1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4udmFjaGV7XHJcbm1hcmdpbjogMjBweCBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5Okdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4uYmctdGV4dCB7XHJcbmNvbG9yOiBibGFjaztcclxuLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXHJcbi8qIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7ICovXHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiAxMCU7XHJcbmxlZnQ6IDUwJTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbnotaW5kZXg6IDI7XHJcbndpZHRoOiA1MCU7XHJcbmhlaWdodDogMjAlO1xyXG4vKiBwYWRkaW5nOiAyMHB4OyAqL1xyXG4vKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "rrB8":
/*!******************************************************!*\
  !*** ./src/app/client-list/client-list.component.ts ***!
  \******************************************************/
/*! exports provided: ClientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListComponent", function() { return ClientListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function ClientListComponent_table_5_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientListComponent_table_5_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", element_r12.firstname, " ", element_r12.lastname, "");
} }
function ClientListComponent_table_5_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientListComponent_table_5_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.email, " ");
} }
function ClientListComponent_table_5_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contact No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientListComponent_table_5_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.phnno, " ");
} }
function ClientListComponent_table_5_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientListComponent_table_5_td_12_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientListComponent_table_5_td_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const element_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.onMessage(element_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientListComponent_table_5_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
} }
function ClientListComponent_table_5_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function ClientListComponent_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ClientListComponent_table_5_th_2_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ClientListComponent_table_5_td_3_Template, 2, 2, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClientListComponent_table_5_th_5_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ClientListComponent_table_5_td_6_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ClientListComponent_table_5_th_8_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClientListComponent_table_5_td_9_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ClientListComponent_table_5_th_11_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ClientListComponent_table_5_td_12_Template, 3, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClientListComponent_table_5_tr_13_Template, 1, 0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ClientListComponent_table_5_tr_14_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
} }
function ClientListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No data is available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ClientListComponent {
    constructor(caseService, router) {
        this.caseService = caseService;
        this.router = router;
        this.data = [];
        this.displayedColumns = ['Name', 'Email', 'Contact No', 'Action'];
    }
    ngOnInit() {
        this.caseService.getClientList().subscribe((data) => {
            this.data = data;
        });
    }
    onMessage(data) {
        this.caseService.storeClientForChat(data);
        this.router.navigate(['/chatroom']);
    }
}
ClientListComponent.ɵfac = function ClientListComponent_Factory(t) { return new (t || ClientListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_1__["CaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ClientListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientListComponent, selectors: [["app-client-list"]], decls: 7, vars: 2, consts: [[1, "bg-image"], [1, "grid-container", "bg-text"], [1, "mat-h1", 2, "font-family", "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "font-weight", "bold"], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], [4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Email"], ["matColumnDef", "Contact No"], ["matColumnDef", "Action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ClientListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClientListComponent_table_5_Template, 15, 3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ClientListComponent_div_6_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 90%;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNsaWVudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNJLFVBQUE7QUFDSiIsImZpbGUiOiJjbGllbnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgfVxyXG4iXX0= */", ".bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"/assets/bg.jpg\");\n  \n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  \n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bg-text[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: normal;\n  \n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 95%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFFQSx1Q0FBQTtFQUVBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBSko7O0FBT0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBRUEsbUJBQUE7QUFMSiIsImZpbGUiOiJjaGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5iZy1pbWFnZSB7XHJcbiAgICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9ucHIuYnJpZ2h0c3BvdGNkbi5jb20vZGltczQvZGVmYXVsdC9mZjkzMjEzLzIxNDc0ODM2NDcvc3RyaXAvdHJ1ZS9jcm9wLzE4NzV4MTI1MCswKzAvcmVzaXplLzg4MHg1ODchL3F1YWxpdHkvOTAvP3VybD1odHRwOiUyRiUyRm5wci1icmlnaHRzcG90LnMzLmFtYXpvbmF3cy5jb20lMkZsZWdhY3klMkZzaXRlcyUyRnd2cG4lMkZmaWxlcyUyRjIwMTUxMSUyRlNjYWxlc29mSnVzdGljZS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYmcuanBnJyk7XHJcblxyXG4gICAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xyXG4gICAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG5cclxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmJnLXRleHQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLy8gei1pbmRleDogMjtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "s3jE":
/*!*******************************************!*\
  !*** ./src/app/services/local.service.ts ***!
  \*******************************************/
/*! exports provided: LocalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalService", function() { return LocalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "n90K");


class LocalService {
    constructor(storageService) {
        this.storageService = storageService;
    }
    // Set the json data to local storage
    setJsonValue(key, value) {
        this.storageService.secureStorage.setItem(key, value);
    }
    // Get the json value from local storage
    getJsonValue(key) {
        return this.storageService.secureStorage.getItem(key);
    }
    // Clear the local storage
    clear() {
        return this.storageService.secureStorage.clear();
    }
}
LocalService.ɵfac = function LocalService_Factory(t) { return new (t || LocalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"])); };
LocalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalService, factory: LocalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authService.getIsAuth();
        const role = String(this.authService.getRole());
        if (!isAuth && role !== "lawyer") {
            this.router.navigate(['/login']);
        }
        return isAuth;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _cases_cases_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cases/cases.component */ "3agv");
/* harmony import */ var _pre_admitted_preadmitted_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pre-admitted/preadmitted.component */ "C+JG");
/* harmony import */ var _admitted_admitted_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admitted/admitted.component */ "Jhgf");
/* harmony import */ var _disposed_disposed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./disposed/disposed.component */ "2iwg");
/* harmony import */ var _addcase_addcase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addcase/addcase.component */ "2TVA");
/* harmony import */ var _caseinfo_caseinfo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./caseinfo/caseinfo.component */ "w6GC");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _loginclient_loginclient_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loginclient/loginclient.component */ "FyRX");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _registerclient_registerclient_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./registerclient/registerclient.component */ "h/te");
/* harmony import */ var _app_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/auth.guard */ "tIkO");
/* harmony import */ var _editcase_editcase_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./editcase/editcase.component */ "bCr3");
/* harmony import */ var _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chatroom/chatroom.component */ "wfUc");
/* harmony import */ var _client_dashboard_client_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./client-dashboard/client-dashboard.component */ "N5FB");
/* harmony import */ var _client_cases_client_cases_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./client-cases/client-cases.component */ "lwBU");
/* harmony import */ var _client_caseinfo_client_caseinfo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./client-caseinfo/client-caseinfo.component */ "xmPl");
/* harmony import */ var _client_chatroom_client_chatroom_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./client-chatroom/client-chatroom.component */ "ek81");
/* harmony import */ var _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./client-list/client-list.component */ "rrB8");
/* harmony import */ var _chats_chats_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./chats/chats.component */ "wxUJ");
/* harmony import */ var _clientside_chat_clientside_chat_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./clientside-chat/clientside-chat.component */ "VzO+");
/* harmony import */ var _lawyer_list_lawyer_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lawyer-list/lawyer-list.component */ "e8NY");
/* harmony import */ var _clientauth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./clientauth.guard */ "NGIv");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "bF/t");
/* harmony import */ var _client_edit_profile_client_edit_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./client-edit-profile/client-edit-profile.component */ "pg5L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ "fXoL");




























const routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], canActivate: [_app_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'cases', component: _cases_cases_component__WEBPACK_IMPORTED_MODULE_2__["CasesComponent"], canActivate: [_app_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'preadmittedcases', component: _pre_admitted_preadmitted_component__WEBPACK_IMPORTED_MODULE_3__["PreadmittedComponent"], canActivate: [_app_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'admittedcases', component: _admitted_admitted_component__WEBPACK_IMPORTED_MODULE_4__["AdmittedComponent"], canActivate: [_app_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'disposedcases', component: _disposed_disposed_component__WEBPACK_IMPORTED_MODULE_5__["DisposedComponent"], canActivate: [_app_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'addcase', component: _addcase_addcase_component__WEBPACK_IMPORTED_MODULE_6__["AddcaseComponent"], canActivate: [_app_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'caseinfo', component: _caseinfo_caseinfo_component__WEBPACK_IMPORTED_MODULE_7__["CaseinfoComponent"], canActivate: [_app_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    // { path: 'try', component: TryComponent, canActivate: [AuthGuard]},
    { path: 'try', loadChildren: () => __webpack_require__.e(/*! import() | try-module */ "try-module").then(__webpack_require__.bind(null, /*! ./try/module */ "Y1zf")).then(m => m.TryModule) },
    { path: 'clientlist', component: _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_19__["ClientListComponent"], canActivate: [_app_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'lawyerlist', component: _lawyer_list_lawyer_list_component__WEBPACK_IMPORTED_MODULE_22__["LawyerListComponent"], canActivate: [_clientauth_guard__WEBPACK_IMPORTED_MODULE_23__["ClientAuthGuard"]] },
    { path: 'editcase', component: _editcase_editcase_component__WEBPACK_IMPORTED_MODULE_13__["EditcaseComponent"], canActivate: [_app_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'chats', component: _chats_chats_component__WEBPACK_IMPORTED_MODULE_20__["ChatsComponent"], canActivate: [_app_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'chatroom', component: _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_14__["ChatroomComponent"], canActivate: [_app_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'profile', component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_24__["EditProfileComponent"], canActivate: [_app_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: 'loginclient', component: _loginclient_loginclient_component__WEBPACK_IMPORTED_MODULE_9__["LoginclientComponent"] },
    { path: 'registerclient', component: _registerclient_registerclient_component__WEBPACK_IMPORTED_MODULE_11__["RegisterclientComponent"] },
    { path: 'clientdashboard', component: _client_dashboard_client_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["ClientDashboardComponent"], canActivate: [_clientauth_guard__WEBPACK_IMPORTED_MODULE_23__["ClientAuthGuard"]] },
    { path: 'clientcases', component: _client_cases_client_cases_component__WEBPACK_IMPORTED_MODULE_16__["ClientCasesComponent"], canActivate: [_clientauth_guard__WEBPACK_IMPORTED_MODULE_23__["ClientAuthGuard"]] },
    { path: 'clientcaseinfo', component: _client_caseinfo_client_caseinfo_component__WEBPACK_IMPORTED_MODULE_17__["ClientCaseinfoComponent"], canActivate: [_clientauth_guard__WEBPACK_IMPORTED_MODULE_23__["ClientAuthGuard"]] },
    { path: 'clientChatroom', component: _client_chatroom_client_chatroom_component__WEBPACK_IMPORTED_MODULE_18__["ClientChatroomComponent"], canActivate: [_clientauth_guard__WEBPACK_IMPORTED_MODULE_23__["ClientAuthGuard"]] },
    { path: 'lawyerchats', component: _clientside_chat_clientside_chat_component__WEBPACK_IMPORTED_MODULE_21__["ClientsideChatComponent"], canActivate: [_clientauth_guard__WEBPACK_IMPORTED_MODULE_23__["ClientAuthGuard"]] },
    { path: 'client-profile', component: _client_edit_profile_client_edit_profile_component__WEBPACK_IMPORTED_MODULE_25__["ClientEditProfileComponent"], canActivate: [_clientauth_guard__WEBPACK_IMPORTED_MODULE_23__["ClientAuthGuard"]] },
    { path: '**', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ providers: [_app_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _clientauth_guard__WEBPACK_IMPORTED_MODULE_23__["ClientAuthGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                onSameUrlNavigation: 'reload',
                relativeLinkResolution: 'legacy'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Username or password is incorrect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/register"]; };
class LoginComponent {
    constructor(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.submitted = false;
        this.hide = true;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    get data() { return this.loginForm.controls; }
    onSubmit() {
        const value = this.loginForm.value;
        this.authService.loginLawyer(value.username, value.password, "lawyer");
        // location.reload()
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 23, vars: 9, consts: [[1, "bg-image"], [1, "card", "bg-text"], ["role", "alert", 4, "ngIf"], ["mat-h3", "", 1, "vache", 2, "text-align", "center"], [3, "formGroup", "ngSubmit"], [2, "width", "60%", "margin-left", "20%", "margin-right", "20%"], ["type", "text", "matInput", "", "placeholder", "Username", "formControlName", "username", 1, "mast"], ["matSuffix", ""], [4, "ngIf"], ["type", "password", "matInput", "", "placeholder", "Password", "formControlName", "password", 1, "mast", 3, "type"], ["matSuffix", "", 2, "cursor", "pointer", 3, "click"], [2, "width", "60%", "margin-left", "20%", "margin-right", "20%", "display", "flex", "margin-top", "20px"], ["mat-raised-button", "", "color", "primary", 3, "disabled"], [1, "flex-spacer"], [3, "routerLink"], ["role", "alert"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Login as a Lawyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginComponent_mat_error_11_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_mat_icon_click_14_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginComponent_mat_error_16_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Don't have an account? Register here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.username.errors == null ? null : ctx.data.username.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.password.errors == null ? null : ctx.data.password.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: [".mast[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    width: 80%;\r\n}\r\n.vache[_ngcontent-%COMP%] {\r\n    margin: 20px auto;\r\n    font-family:Georgia, 'Times New Roman', Times, serif;\r\n    font-weight: bold;\r\n    font-size: medium;\r\n    font-style: normal;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n    margin: 20px auto;\r\n    \r\n    border-radius: 4px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.bg-image[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  background-image: url('/assets/bg.jpg');\r\n  \r\n  filter: blur(8px);\r\n  -webkit-filter: blur(8px);\r\n\r\n  \r\n  height: 90%;\r\n\r\n  \r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.bg-text[_ngcontent-%COMP%] {\r\n  color: black;\r\n  font-weight: bold;\r\n  \r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 2;\r\n  \r\n  \r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0RBQW9EO0lBQ3BELGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsNEVBQTRFO0FBQ2hGO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscVFBQXFRO0VBQ3JRLHVDQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLHlCQUF5Qjs7RUFFekIsZ0JBQWdCO0VBQ2hCLFdBQVc7O0VBRVgsc0NBQXNDO0VBQ3RDLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFzdCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbi52YWNoZSB7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGZvbnQtZmFtaWx5Okdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLmJnLWltYWdlIHtcclxuICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbnByLmJyaWdodHNwb3RjZG4uY29tL2RpbXM0L2RlZmF1bHQvZmY5MzIxMy8yMTQ3NDgzNjQ3L3N0cmlwL3RydWUvY3JvcC8xODc1eDEyNTArMCswL3Jlc2l6ZS84ODB4NTg3IS9xdWFsaXR5LzkwLz91cmw9aHR0cDolMkYlMkZucHItYnJpZ2h0c3BvdC5zMy5hbWF6b25hd3MuY29tJTJGbGVnYWN5JTJGc2l0ZXMlMkZ3dnBuJTJGZmlsZXMlMkYyMDE1MTElMkZTY2FsZXNvZkp1c3RpY2UuanBnXCIpOyAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9iZy5qcGcnKTtcclxuICAvKiBBZGQgdGhlIGJsdXIgZWZmZWN0ICovXHJcbiAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuXHJcbiAgLyogRnVsbCBoZWlnaHQgKi9cclxuICBoZWlnaHQ6IDkwJTtcclxuXHJcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmJnLXRleHQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAvKiBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxOyAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogMjtcclxuICAvKiB3aWR0aDogODAlOyAqL1xyXG4gIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "w6GC":
/*!************************************************!*\
  !*** ./src/app/caseinfo/caseinfo.component.ts ***!
  \************************************************/
/*! exports provided: CaseinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseinfoComponent", function() { return CaseinfoComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-decoupled-document */ "KZYO");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/notification.service */ "OC8m");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





















const _c0 = ["addNote"];
function CaseinfoComponent_hr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "hr");
} }
function CaseinfoComponent_mat_label_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Reg No: ", ctx_r1.caseData.RegNo, "");
} }
function CaseinfoComponent_mat_label_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Reg Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r2.caseData.RegDate), "");
} }
function CaseinfoComponent_mat_label_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Stage: ", ctx_r3.caseData.stage, "");
} }
function CaseinfoComponent_mat_label_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Description: ", ctx_r4.caseData.description, "");
} }
function CaseinfoComponent_hr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "hr");
} }
function CaseinfoComponent_mat_label_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Act: ", ctx_r6.caseData.act, "");
} }
function CaseinfoComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CaseinfoComponent_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r26.onEditCase(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_button_40_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CaseinfoComponent_button_40_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r28.onDetailsUpdated(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Add Hearing Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CaseinfoComponent_div_42_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r33.onNewOrder(_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "mat-datepicker-toggle", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "mat-datepicker", null, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CaseinfoComponent_div_42_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r35.newOrderNote = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-hint", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Add New Hearing Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r9.newOrderNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("align", "end");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _r32.value.length, " / 256");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r30.invalid);
} }
function CaseinfoComponent_mat_card_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Next Hearing Date :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 2, ctx_r10.orders[0].orderDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.orders[0].orderNote);
} }
function CaseinfoComponent_table_44_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Hearing Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_table_44_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, element_r44.orderDate), " ");
} }
function CaseinfoComponent_table_44_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_table_44_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r45.orderNote, " ");
} }
function CaseinfoComponent_table_44_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_table_44_td_9_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CaseinfoComponent_table_44_td_9_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50); const element_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r48.onDeleteOrder(element_r46._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_table_44_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CaseinfoComponent_table_44_td_9_button_1_Template, 3, 0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r41.caseData.status === "admitted" || ctx_r41.caseData.status === "pre-admitted");
} }
function CaseinfoComponent_table_44_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 58);
} }
function CaseinfoComponent_table_44_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 59);
} }
function CaseinfoComponent_table_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CaseinfoComponent_table_44_th_2_Template, 2, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CaseinfoComponent_table_44_td_3_Template, 3, 3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CaseinfoComponent_table_44_th_5_Template, 2, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CaseinfoComponent_table_44_td_6_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](7, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CaseinfoComponent_table_44_th_8_Template, 2, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CaseinfoComponent_table_44_td_9_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CaseinfoComponent_table_44_tr_10_Template, 1, 0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CaseinfoComponent_table_44_tr_11_Template, 1, 0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r11.caseData.orders);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r11.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r11.displayedColumns);
} }
function CaseinfoComponent_div_46_mat_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Add New Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_div_46_mat_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Edit Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_div_46_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 34, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CaseinfoComponent_div_46_form_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r60); const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r59.onAddNote(_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-form-field", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-form-field", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 66, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-hint", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Add Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("align", "end");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _r58.value.length, " / 256");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r57.invalid);
} }
function CaseinfoComponent_div_46_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 34, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CaseinfoComponent_div_46_form_5_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r64); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r63.onEditNote(_r61); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-form-field", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CaseinfoComponent_div_46_form_5_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r64); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r65.newTitle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-form-field", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 71, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CaseinfoComponent_div_46_form_5_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r64); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r66.newNote = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-hint", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Edit Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r55.newTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r55.newNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("align", "end");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _r62.value.length, " / 256");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r61.invalid);
} }
function CaseinfoComponent_div_46_div_6_mat_card_1_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CaseinfoComponent_div_46_div_6_mat_card_1_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r73); const note_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r71.onEditMode(note_r68); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_div_46_div_6_mat_card_1_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CaseinfoComponent_div_46_div_6_mat_card_1_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r76); const note_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r74.onDeleteNote(note_r68._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_div_46_div_6_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-card-content", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CaseinfoComponent_div_46_div_6_mat_card_1_button_11_Template, 2, 0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CaseinfoComponent_div_46_div_6_mat_card_1_button_12_Template, 2, 0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r68 = ctx.$implicit;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](note_r68.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 5, note_r68.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](note_r68.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r67.caseData.status === "admitted" || ctx_r67.caseData.status === "pre-admitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r67.caseData.status === "admitted" || ctx_r67.caseData.status === "pre-admitted");
} }
function CaseinfoComponent_div_46_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CaseinfoComponent_div_46_div_6_mat_card_1_Template, 13, 7, "mat-card", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r56.caseData.notes);
} }
function CaseinfoComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CaseinfoComponent_div_46_mat_label_2_Template, 2, 0, "mat-label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CaseinfoComponent_div_46_mat_label_3_Template, 2, 0, "mat-label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CaseinfoComponent_div_46_form_4_Template, 11, 3, "form", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CaseinfoComponent_div_46_form_5_Template, 11, 5, "form", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CaseinfoComponent_div_46_div_6_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r12.editNoteMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.editNoteMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r12.editNoteMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.editNoteMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r12.editNoteMode);
} }
function CaseinfoComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Upload Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CaseinfoComponent_div_48_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r77.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "pre", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "  *only pdf can be uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_th_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_td_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r79.originalname, " ");
} }
function CaseinfoComponent_th_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Size(In Kb) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_td_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r80.size / 1000, " ");
} }
function CaseinfoComponent_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Created At ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_td_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, element_r81.createdAt), " ");
} }
function CaseinfoComponent_th_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_td_64_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CaseinfoComponent_td_64_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const element_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r84.deletePdf(element_r82.filename); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_td_64_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CaseinfoComponent_td_64_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r88); const element_r82 = ctx.$implicit; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r87.downloadPdf(element_r82.filename, element_r82.contentType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CaseinfoComponent_td_64_button_3_Template, 2, 0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r21.caseData.status === "admitted" || ctx_r21.caseData.status === "pre-admitted");
} }
function CaseinfoComponent_tr_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 58);
} }
function CaseinfoComponent_tr_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 59);
} }
function CaseinfoComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Linked Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CaseinfoComponent_div_68_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r90.onMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CaseinfoComponent_div_68_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r91); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r92.unlink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Unlink");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r24.linkedClient.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r24.linkedClient.lastname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r24.linkedClient.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r24.linkedClient.phnno, " ");
} }
function CaseinfoComponent_div_69_table_7_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " firstName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_div_69_table_7_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r107 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r107.firstname, " ");
} }
function CaseinfoComponent_div_69_table_7_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " lastName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_div_69_table_7_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r108 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r108.lastname, " ");
} }
function CaseinfoComponent_div_69_table_7_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_div_69_table_7_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r109 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r109.phnno, " ");
} }
function CaseinfoComponent_div_69_table_7_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_div_69_table_7_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r110 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r110.email, " ");
} }
function CaseinfoComponent_div_69_table_7_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_div_69_table_7_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CaseinfoComponent_div_69_table_7_td_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r113); const element_r111 = ctx.$implicit; const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r112.onLinkClient(element_r111, ctx_r112.caseData._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaseinfoComponent_div_69_table_7_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 58);
} }
function CaseinfoComponent_div_69_table_7_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 59);
} }
function CaseinfoComponent_div_69_table_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CaseinfoComponent_div_69_table_7_th_3_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CaseinfoComponent_div_69_table_7_td_4_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](5, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CaseinfoComponent_div_69_table_7_th_6_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CaseinfoComponent_div_69_table_7_td_7_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CaseinfoComponent_div_69_table_7_th_9_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CaseinfoComponent_div_69_table_7_td_10_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](11, 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CaseinfoComponent_div_69_table_7_th_12_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CaseinfoComponent_div_69_table_7_td_13_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](14, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CaseinfoComponent_div_69_table_7_th_15_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CaseinfoComponent_div_69_table_7_td_16_Template, 3, 0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, CaseinfoComponent_div_69_table_7_tr_17_Template, 1, 0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, CaseinfoComponent_div_69_table_7_tr_18_Template, 1, 0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, ctx_r94.clients$));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r94.display);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r94.display);
} }
function CaseinfoComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Client Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 92, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function CaseinfoComponent_div_69_Template_input_input_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r116); const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r115.search(_r93.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ul", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CaseinfoComponent_div_69_table_7_Template, 19, 5, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r25.clients$);
} }
class CaseinfoComponent {
    constructor(caseService, router, sanitizer, notifyService) {
        this.caseService = caseService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.notifyService = notifyService;
        this.Editor = _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_1__;
        this.displayNextOrder = false;
        this.displayedColumns = ['Order Date', 'Note', 'Action'];
        this.newTitle = '';
        this.newNote = '';
        this.editNoteMode = false;
        this.fileToUpload = null;
        this.DocColumns = ['Name', 'Size', 'Created_At', 'Actions'];
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.display = ['firstName', 'lastName', 'Contact', 'Email', 'Action'];
    }
    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    onEditCase() {
        console.log(this.caseData);
        this.router.navigate(["/editcase"]);
    }
    onDetailsUpdated() {
        this.caseData.details = this.details;
        this.caseService.updateDetails(this.caseData);
    }
    onNewOrder(data) {
        if (!data.value.note) {
            data.value.note = "No Note has been added";
        }
        this.orders = this.caseData.orders.concat({ id: this.caseData.stampNo, orderDate: new Date(data.value.orderDate), orderNote: data.value.note });
        this.caseData.orders = this.orders;
        this.caseService.addOrder(this.caseData._id, { id: this.caseData.stampNo, orderDate: data.value.orderDate, orderNote: data.value.note });
        data.resetForm();
        this.orders.sort(function (a, b) {
            var c = new Date(a.orderDate);
            var d = new Date(b.orderDate);
            return d - c;
        });
        if (this.orders.length == 0) {
            this.displayNextOrder = false;
        }
        else if (new Date(this.orders[0].orderDate) > new Date()) {
            this.displayNextOrder = true;
        }
        this.notifyService.showSuccess("Hearing date is added to Calender!", "Woo-Hoo");
    }
    onDeleteOrder(id) {
        this.orders = this.orders.filter(function (e) { return e._id != id; });
        this.caseData.orders = this.orders;
        this.caseService.updateCase(this.caseData);
        this.orders.sort(function (a, b) {
            var c = new Date(a.orderDate);
            var d = new Date(b.orderDate);
            return d - c;
        });
        if (this.caseData.orders.length == 0) {
            this.displayNextOrder = false;
        }
        else if (new Date(this.orders[0].orderDate) > new Date()) {
            this.displayNextOrder = true;
        }
    }
    onAddNote(data) {
        console.log(this.form.value);
        this.notes = this.notes.concat({ title: data.value.title, note: data.value.Note, createdAt: new Date() });
        console.log(this.notes);
        this.caseData.notes = this.notes;
        this.caseService.updateCase(this.caseData);
        data.resetForm();
    }
    onEditNote(data) {
        this.editNote.title = data.value.title;
        this.editNote.note = data.value.Note;
        this.notes[this.editNote._id] = this.editNote;
        console.log(this.notes);
        this.caseData.notes = this.notes;
        this.caseService.updateCase(this.caseData);
        this.editNote = null;
        this.editNoteMode = false;
        this.newTitle = "";
        this.newNote = "";
    }
    onEditMode(data) {
        this.editNote = data;
        this.editNoteMode = true;
        this.newNote = this.editNote.note;
        this.newTitle = this.editNote.title;
    }
    onDeleteNote(id) {
        this.notes = this.caseData.notes.filter(function (e) { return e._id != id; });
        this.caseData.notes = this.notes;
        this.caseService.updateCase(this.caseData);
    }
    handleFileInput(files) {
        this.fileToUpload = files;
        if (this.fileToUpload.length != 0) {
            this.caseService.onUploadDoc(this.fileToUpload, this.caseData._id).subscribe((data) => {
                this.files = data;
                this.caseData.docs = data;
                console.log(data);
            });
        }
    }
    onLinkClient(data, id) {
        this.caseService.linkClient(data.userId, id);
        this.caseData.client = data.userId;
        this.caseService.getClient(data._id);
        this.notifyService.showSuccess(`Client ${data.firstname} linked with this case Successfully`, "");
    }
    unlink() {
        this.linkedClient = null;
        this.caseData.client = null;
        this.caseService.updateCase(this.caseData);
        this.caseService.unlinkClient();
    }
    downloadPdf(filename, contentType) {
        this.caseService.downloadPDF(filename, contentType).subscribe((res) => {
            const file = new Blob([(res)], { type: "application/pdf" });
            const fileURL = URL.createObjectURL(file);
            window.open(fileURL);
        });
    }
    deletePdf(filename) {
        this.files = this.files.filter(function (e) {
            return e.filename != filename;
        });
        this.caseData.docs = this.files;
        console.log(this.files);
        console.log(this.caseData);
        this.caseService.onDeleteDoc(this.files, this.caseData._id);
        this.caseService.deletePDF(filename);
    }
    search(term) {
        this.searchTerms.next(term);
    }
    onMessage() {
        this.router.navigate(["/chatroom"]);
    }
    ngOnInit() {
        this.clients$ = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((term) => this.caseService.searchclients(term.toLowerCase())));
        this.linkedclientSub = this.caseService.getlinkedClientUpdateListener().subscribe((data) => {
            this.linkedClient = data;
        });
        this.caseSub = this.caseService.getsingleCaseUpdateListener().subscribe((data) => {
            this.caseData = data;
            this.details = data.details;
            this.orders = data.orders;
            this.notes = data.notes;
            this.files = data.docs;
            this.caseData.orders.sort(function (a, b) {
                var c = new Date(a.orderDate);
                var d = new Date(b.orderDate);
                return d - c;
            });
            if (new Date(this.caseData.orders[0].orderDate) > new Date()) {
                this.displayNextOrder = true;
            }
        });
        const t = this.caseService.getId();
        this.caseService.getLinkedClient(t);
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.caseSub.unsubscribe();
        this.linkedclientSub.unsubscribe();
    }
}
CaseinfoComponent.ɵfac = function CaseinfoComponent_Factory(t) { return new (t || CaseinfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_4__["CaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"])); };
CaseinfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CaseinfoComponent, selectors: [["app-caseinfo"]], viewQuery: function CaseinfoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, decls: 70, vars: 30, consts: [[1, "bg-image"], [1, "grid-container", "bg-text", 2, "width", "95%"], [1, "mat-h1", 2, "font-family", "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "font-weight", "bold"], [2, "margin", "20px 50px"], [2, "min-height", "510px", "max-height", "auto"], ["mat-align-tabs", "start"], ["label", "Case Info"], ["fxLayout", "column", 2, "display", "flex", "margin", "20px 20px"], ["fxLayout", "row"], [2, "margin-left", "30px"], [4, "ngIf"], ["style", "margin-left: 30px;", 4, "ngIf"], ["style", "margin-top:20px;", "mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["label", "Details"], [1, "document-editor", 3, "editor", "ngModel", "ngModelChange", "ready"], ["label", "Hearings"], ["style", "display: flex; margin: 20px 20px;", "fxLayout", "column", 4, "ngIf"], ["style", "display: flex; width: 80%; margin: 40px auto;", 4, "ngIf"], ["mat-table", "", "class", "mat-elevation-z8", "style", "width: 80%; margin: 40px auto;", 3, "dataSource", 4, "ngIf"], ["label", "Notes"], ["label", "Documents"], ["mat-table", "", 2, "width", "80%", "margin", "auto", 3, "dataSource"], ["matColumnDef", "Name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Size"], ["matColumnDef", "Created_At"], ["matColumnDef", "Actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["label", "Client"], ["id", "search-component", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 2, "margin-top", "20px", 3, "click"], [2, "font-size", "large"], [3, "ngSubmit"], ["addOrder", "ngForm"], [2, "width", "40%", "margin-top", "20px"], ["matInput", "", "ngModel", "", "required", "", "placeholder", "Hearing Date", "name", "orderDate", "id", "orderDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "flex-spacer"], [2, "width", "40%", "margin-top", "20px", "margin-left", "10%"], ["matInput", "", "maxlength", "256", "placeholder", "Note", "name", "note", "id", "note", 3, "ngModel", "ngModelChange"], ["message", ""], [3, "align"], ["mat-raised-button", "", "color", "accent", "type", "submit", 2, "width", "200px", "margin-top", "10px", 3, "disabled"], [2, "display", "flex", "width", "80%", "margin", "40px auto"], [1, "mat-h3", 2, "font-size", "large"], [1, "mat-h3", 2, "margin-left", "20px"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "80%", "margin", "40px auto", 3, "dataSource"], ["matColumnDef", "Order Date"], ["mat-header-cell", "", "style", "font-size: medium;", 4, "matHeaderCellDef"], ["matColumnDef", "Note"], ["matColumnDef", "Action"], ["mat-header-cell", "", 2, "font-size", "medium"], ["mat-cell", ""], ["mat-icon-button", "", "color", "warn", "aria-label", "Example icon button with a delete icon", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", "aria-label", "Example icon button with a delete icon", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["style", "font-size: large;", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], ["addNote", "ngForm"], [2, "margin-right", "15px"], ["matInput", "", "ngModel", "", "name", "title", "id", "title", "placeholder", "title", "required", ""], [2, "width", "80%", "margin-top", "20px", "margin-right", "10px"], ["matInput", "", "ngModel", "", "maxlength", "256", "placeholder", "Note", "name", "Note", "id", "Note", "required", ""], ["message1", ""], ["type", "submit", "mat-raised-button", "", "color", "accent", 2, "margin", "10px auto", 3, "disabled"], ["editNote", "ngForm"], ["matInput", "", "name", "title", "id", "title", "placeholder", "title", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "maxlength", "256", "placeholder", "Note", "name", "Note", "id", "Note", "required", "", 3, "ngModel", "ngModelChange"], ["class", "example-card mat-elevation-z8", "style", "margin-bottom: 1rem;", 4, "ngFor", "ngForOf"], [1, "example-card", "mat-elevation-z8", 2, "margin-bottom", "1rem"], [2, "padding-left", "15px"], ["mat-stroked-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", "color", "accent", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"], ["enctype", "multipart/form-data"], ["type", "file", "id", "file", "multiple", "", "accept", "application/pdf", 3, "change"], [2, "color", "red"], ["mat-header-cell", ""], ["mat-button", "", "color", "accent", 3, "click"], ["mat-icon-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", 3, "click"], [2, "margin-top", "20px", "display", "flex"], [1, "tab"], ["mat-raised-button", "", "color", "primary", 2, "width", "10%", 3, "click"], ["mat-raised-button", "", "color", "accent", 2, "width", "10%", 3, "click"], ["id", "search-component"], ["for", "search-box", 2, "font-size", "large"], ["id", "search-box", "placeholder", "Enter First Name", 3, "input"], ["searchBox", ""], [1, "search-result"], ["matColumnDef", "firstName"], ["matColumnDef", "lastName"], ["matColumnDef", "Contact"], ["matColumnDef", "Email"]], template: function CaseinfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Case Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-tab-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CaseinfoComponent_hr_15_Template, 1, 0, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, CaseinfoComponent_mat_label_17_Template, 2, 1, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, CaseinfoComponent_mat_label_18_Template, 3, 3, "mat-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, CaseinfoComponent_mat_label_30_Template, 2, 1, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, CaseinfoComponent_mat_label_31_Template, 2, 1, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, CaseinfoComponent_hr_32_Template, 1, 0, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, CaseinfoComponent_mat_label_33_Template, 2, 1, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, CaseinfoComponent_button_35_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-tab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "ckeditor", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CaseinfoComponent_Template_ckeditor_ngModelChange_38_listener($event) { return ctx.details = $event; })("ready", function CaseinfoComponent_Template_ckeditor_ready_38_listener($event) { return ctx.onReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, CaseinfoComponent_button_40_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-tab", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, CaseinfoComponent_div_42_Template, 18, 6, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, CaseinfoComponent_mat_card_43_Template, 8, 4, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, CaseinfoComponent_table_44_Template, 12, 3, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-tab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, CaseinfoComponent_div_46_Template, 7, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-tab", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, CaseinfoComponent_div_48_Template, 8, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](53, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, CaseinfoComponent_th_54_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, CaseinfoComponent_td_55_Template, 2, 1, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](56, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, CaseinfoComponent_th_57_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, CaseinfoComponent_td_58_Template, 2, 1, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](59, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, CaseinfoComponent_th_60_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, CaseinfoComponent_td_61_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](62, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, CaseinfoComponent_th_63_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, CaseinfoComponent_td_64_Template, 4, 1, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, CaseinfoComponent_tr_65_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, CaseinfoComponent_tr_66_Template, 1, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "mat-tab", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, CaseinfoComponent_div_68_Template, 19, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, CaseinfoComponent_div_69_Template, 8, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Stamp No: ", ctx.caseData.stampNo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Filling Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 28, ctx.caseData.fillingDate), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.caseData.RegNo || ctx.caseData.RegDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.caseData.RegNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.caseData.RegDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Retitioner: ", ctx.caseData.petitioner, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Respondent: ", ctx.caseData.respondent, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Bench: ", ctx.caseData.bench, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Status: ", ctx.caseData.status, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("District: ", ctx.caseData.district, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.caseData.stage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.caseData.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.caseData.act);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.caseData.act);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.caseData.status === "admitted" || ctx.caseData.status === "pre-admitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("editor", ctx.Editor)("ngModel", ctx.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.caseData.status === "admitted" || ctx.caseData.status === "pre-admitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.caseData.status === "admitted" || ctx.caseData.status === "pre-admitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.displayNextOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.orders.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.caseData.status === "admitted" || ctx.caseData.status === "pre-admitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.caseData.status === "admitted" || ctx.caseData.status === "pre-admitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.DocColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.DocColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.caseData.client);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.caseData.client);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTab"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["RequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatHint"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".document-editor[_ngcontent-%COMP%] {\n  margin: 20px 20px;\n}\n\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  width: 195px;\n  height: 16px;\n  padding: 5px;\n  background-color: white;\n  cursor: pointer;\n  list-style-type: none;\n}\n\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #607D8B;\n}\n\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n  display: block;\n  text-decoration: none;\n}\n\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  color: white;\n}\n\n#search-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 30px;\n  padding: 8px 10px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n.tab[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 40px;\n}\n\nul.search-result[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhc2VpbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFDQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQ0U7RUFDRSx5QkFBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUVKOztBQUNFO0VBQ0UsWUFBQTtBQUVKOztBQUFFO0VBQ0UsWUFBQTtBQUdKOztBQURFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUlKOztBQURFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQUlKOztBQURFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFJSiIsImZpbGUiOiJjYXNlaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb2N1bWVudC1lZGl0b3Ige1xyXG4gICAgbWFyZ2luIDoyMHB4IDIwcHg7XHJcbn1cclxuLnNlYXJjaC1yZXN1bHQgbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgd2lkdGg6IDE5NXB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLXJlc3VsdCBsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1yZXN1bHQgbGkgYSB7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1yZXN1bHQgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5zZWFyY2gtcmVzdWx0IGxpIGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgI3NlYXJjaC1ib3gge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG5cclxuICAudGFiIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4gIHVsLnNlYXJjaC1yZXN1bHQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcbiJdfQ== */", ".bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"/assets/bg.jpg\");\n  \n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  \n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bg-text[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: normal;\n  \n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 95%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFFQSx1Q0FBQTtFQUVBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBSko7O0FBT0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBRUEsbUJBQUE7QUFMSiIsImZpbGUiOiJjaGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5iZy1pbWFnZSB7XHJcbiAgICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9ucHIuYnJpZ2h0c3BvdGNkbi5jb20vZGltczQvZGVmYXVsdC9mZjkzMjEzLzIxNDc0ODM2NDcvc3RyaXAvdHJ1ZS9jcm9wLzE4NzV4MTI1MCswKzAvcmVzaXplLzg4MHg1ODchL3F1YWxpdHkvOTAvP3VybD1odHRwOiUyRiUyRm5wci1icmlnaHRzcG90LnMzLmFtYXpvbmF3cy5jb20lMkZsZWdhY3klMkZzaXRlcyUyRnd2cG4lMkZmaWxlcyUyRjIwMTUxMSUyRlNjYWxlc29mSnVzdGljZS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYmcuanBnJyk7XHJcblxyXG4gICAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xyXG4gICAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG5cclxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmJnLXRleHQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLy8gei1pbmRleDogMjtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "wfUc":
/*!************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.ts ***!
  \************************************************/
/*! exports provided: ChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomComponent", function() { return ChatroomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/websocket.service */ "Gyf/");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function ChatroomComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("userMessage", item_r2.username == ctx_r0.username)("secUserMessage", item_r2.username != ctx_r0.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.message);
} }
function ChatroomComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChatroomComponent {
    constructor(route, webSocketService, authService, caseService) {
        this.route = route;
        this.webSocketService = webSocketService;
        this.authService = authService;
        this.caseService = caseService;
        this.message = '';
        this.messageArray = [];
        this.isTyping = false;
        this.webSocketService.newMessageReceived().subscribe(data => {
            this.messageArray.push(data);
            this.isTyping = false;
        });
        this.webSocketService.receivedTyping().subscribe(bool => {
            this.isTyping = bool.isTyping;
        });
    }
    ngOnInit() {
        this.clientData = this.caseService.returnClient();
        const currentUser = this.authService.getUserId();
        this.username = this.authService.getuserName();
        this.chatroom = currentUser + this.clientData.userId;
        this.webSocketService.joinRoom({ lawyer: currentUser, room: this.chatroom, client: this.clientData.userId });
        this.authService.getChatRoomsChat(this.chatroom).subscribe(messages => {
            this.messageArray = messages;
        });
    }
    sendMessage() {
        if (this.message.trim() == '') {
            return;
        }
        this.webSocketService.sendMessage({ room: this.chatroom, user: this.username, message: this.message });
        this.message = '';
    }
    typing() {
        this.webSocketService.typing({ room: this.chatroom, user: this.username });
    }
}
ChatroomComponent.ɵfac = function ChatroomComponent_Factory(t) { return new (t || ChatroomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_4__["CaseService"])); };
ChatroomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatroomComponent, selectors: [["app-chatroom"]], decls: 12, vars: 5, consts: [[1, "bg-image"], ["id", "mario-chat", 1, "bg-text"], ["id", "chat-window"], [4, "ngFor", "ngForOf"], ["class", "secUserMessage", 4, "ngIf"], [2, "display", "flex"], ["name", "message", "type", "text", "placeholder", "Message", 2, "width", "80%", 3, "ngModel", "keypress", "ngModelChange"], [1, "flex-spacer"], ["id", "send", 2, "width", "20%", 3, "click"], [1, "secUserMessage"], [1, "typing", "typing-1"], [1, "typing", "typing-2"], [1, "typing", "typing-3"]], template: function ChatroomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatroomComponent_div_5_Template, 3, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatroomComponent_div_6_Template, 4, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ChatroomComponent_Template_input_keypress_8_listener() { return ctx.typing(); })("ngModelChange", function ChatroomComponent_Template_input_ngModelChange_8_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatroomComponent_Template_button_click_10_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.clientData.firstname, " ", ctx.clientData.lastname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messageArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTyping);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 10px 20px;\n  color: black;\n  background-color: white;\n}\n\n#mario-chat[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  min-width: 500px;\n  margin: 30px auto;\n  border: 1px solid #ddd;\n  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.05);\n  border-radius: 2px;\n  border-radius: 10px;\n}\n\n#chat-window[_ngcontent-%COMP%] {\n  height: 500px;\n  overflow: auto;\n  background: #E2E2E2;\n}\n\n#output[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 14px 0px;\n  margin: 0 20px;\n  border-bottom: 1px solid #e9e9e9;\n  color: #555;\n}\n\n#output[_ngcontent-%COMP%] {\n  height: 500px;\n}\n\n#feedback[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #aaa;\n  padding: 14px 0px;\n  margin: 0 20px;\n}\n\n.chat-output[_ngcontent-%COMP%] {\n  height: 500px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: block;\n  padding: 10px 20px;\n}\n\ninput[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  background: #eee;\n  border: 0;\n  display: block;\n  width: 100%;\n  background: #fff;\n  border-bottom: 1px solid #eee;\n  font-family: Nunito;\n  font-size: 16px;\n}\n\n#send[_ngcontent-%COMP%] {\n  background: #0C491B;\n  color: #fff;\n  font-size: 18px;\n  border: 0;\n  padding: 12px 0;\n  width: 100%;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n#leave[_ngcontent-%COMP%] {\n  background: skyblue;\n  color: #fff;\n  font-size: 18px;\n  border: 0;\n  padding: 12px 0;\n  width: 100%;\n  border-radius: 0 0 2px 2px;\n}\n\n.userMessage[_ngcontent-%COMP%] {\n  margin: 1rem 1rem 1rem auto;\n  border-radius: 1.125rem 1.125rem 0 1.125rem;\n  background: #5B9B5B;\n  color: white;\n  box-sizing: border-box;\n  padding: 0.5rem 1rem;\n  min-height: 2.25rem;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 66%;\n}\n\n.secUserMessage[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0.5rem 1rem;\n  margin: 1rem;\n  background: #FFF;\n  border-radius: 1.125rem 1.125rem 1.125rem 0;\n  min-height: 2.25rem;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 66%;\n}\n\n.typing[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0.8rem;\n  height: 0.8rem;\n  margin-right: 0rem;\n  box-sizing: border-box;\n  background: #ccc;\n  border-radius: 50%;\n}\n\n.typing.typing-1[_ngcontent-%COMP%] {\n  animation: typing 3s infinite;\n}\n\n.typing.typing-2[_ngcontent-%COMP%] {\n  animation: typing 3s 250ms infinite;\n}\n\n.typing.typing-3[_ngcontent-%COMP%] {\n  animation: typing 3s 500ms infinite;\n}\n\n@keyframes typing {\n  0%, 75%, 100% {\n    transform: translate(0, 0.25rem) scale(0.9);\n    opacity: 0.5;\n  }\n  25% {\n    transform: translate(0, -0.25rem) scale(1);\n    opacity: 1;\n  }\n}\n\n.bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"/assets/bg.jpg\");\n  \n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  \n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bg-text[_ngcontent-%COMP%] {\n  color: black;\n  background-color: white;\n  font-weight: normal;\n  \n  position: absolute;\n  top: 45%;\n  left: 50%;\n  width: 95%;\n  transform: translate(-50%, -50%);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXRyb29tLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBR0E7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBQUo7O0FBR0E7RUFDSSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUVnQiw2QkFBQTtBQUFoQjs7QUFFQTtFQUVZLG1DQUFBO0FBQ1o7O0FBQ0E7RUFFWSxtQ0FBQTtBQUVaOztBQVdFO0VBQ0U7SUFDRSwyQ0FBQTtJQUNBLFlBQUE7RUFFSjtFQUFFO0lBQ0UsMENBQUE7SUFDQSxVQUFBO0VBRUo7QUFDRjs7QUFDRTtFQUNFLG1CQUFBO0VBRUEsdUNBQUE7RUFFQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFFQSxnQkFBQTtFQUNBLFlBQUE7RUFFQSxzQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUhKOztBQU1FO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBRUEsZ0NBQUE7RUFFQSxtQkFBQTtBQUxKIiwiZmlsZSI6ImNoYXRyb29tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBjb2xvcjpibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuI21hcmlvLWNoYXR7XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgbWluLXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJveC1zaGFkb3c6IDFweCAzcHggNXB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNjaGF0LXdpbmRvd3tcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNFMkUyRTI7XG59XG5cbiNvdXRwdXQgcHtcbiAgICBwYWRkaW5nOiAxNHB4IDBweDtcbiAgICBtYXJnaW46IDAgMjBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcbiAgICBjb2xvcjogIzU1NTtcbn1cblxuI291dHB1dCB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cblxuI2ZlZWRiYWNrIHB7XG4gICAgY29sb3I6ICNhYWE7XG4gICAgcGFkZGluZzogMTRweCAwcHg7XG4gICAgbWFyZ2luOiAwIDIwcHg7XG59XG5cbi5jaGF0LW91dHB1dCB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cblxuXG5sYWJlbHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuaW5wdXR7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICBib3JkZXI6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuI3NlbmR7XG4gICAgYmFja2dyb3VuZDogIzBDNDkxQjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDEycHggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2xlYXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBza3libHVlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMTJweCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAycHggMnB4O1xufVxuXG4udXNlck1lc3NhZ2Uge1xuICAgIG1hcmdpbjogMXJlbSAxcmVtIDFyZW0gYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxLjEyNXJlbSAxLjEyNXJlbSAwIDEuMTI1cmVtO1xuICAgIGJhY2tncm91bmQ6ICM1QjlCNUI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgbWluLWhlaWdodDogMi4yNXJlbTtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiA2NiU7XG59XG5cbi5zZWNVc2VyTWVzc2FnZSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBib3JkZXItcmFkaXVzOiAxLjEyNXJlbSAxLjEyNXJlbSAxLjEyNXJlbSAwO1xuICAgIG1pbi1oZWlnaHQ6IDIuMjVyZW07XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1heC13aWR0aDogNjYlO1xufVxuXG4udHlwaW5nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDAuOHJlbTtcbiAgICBoZWlnaHQ6IDAuOHJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDByZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnR5cGluZy50eXBpbmctMSB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0eXBpbmcgM3MgaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0eXBpbmcgM3MgaW5maW5pdGU7XG59XG4udHlwaW5nLnR5cGluZy0yIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogdHlwaW5nIDNzIDI1MG1zIGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0eXBpbmcgM3MgMjUwbXMgaW5maW5pdGU7XG59XG4udHlwaW5nLnR5cGluZy0zIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogdHlwaW5nIDNzIDUwMG1zIGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0eXBpbmcgM3MgNTAwbXMgaW5maW5pdGU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgdHlwaW5nIHtcbiAgICAwJSwgNzUlLCAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAuMjVyZW0pIHNjYWxlKDAuOSk7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMC4yNXJlbSkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgdHlwaW5nIHtcbiAgICAwJSwgNzUlLCAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAuMjVyZW0pIHNjYWxlKDAuOSk7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMC4yNXJlbSkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIC5iZy1pbWFnZSB7XG4gICAgLyogVGhlIGltYWdlIHVzZWQgKi9cbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL25wci5icmlnaHRzcG90Y2RuLmNvbS9kaW1zNC9kZWZhdWx0L2ZmOTMyMTMvMjE0NzQ4MzY0Ny9zdHJpcC90cnVlL2Nyb3AvMTg3NXgxMjUwKzArMC9yZXNpemUvODgweDU4NyEvcXVhbGl0eS85MC8/dXJsPWh0dHA6JTJGJTJGbnByLWJyaWdodHNwb3QuczMuYW1hem9uYXdzLmNvbSUyRmxlZ2FjeSUyRnNpdGVzJTJGd3ZwbiUyRmZpbGVzJTJGMjAxNTExJTJGU2NhbGVzb2ZKdXN0aWNlLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYmcuanBnJyk7XG5cbiAgICAvKiBBZGQgdGhlIGJsdXIgZWZmZWN0ICovXG4gICAgZmlsdGVyOiBibHVyKDhweCk7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoOHB4KTtcblxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbiAgLmJnLXRleHQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDpub3JtYWw7XG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTsgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0NSU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgLy8gaGVpZ2h0OiBhdXRvO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC8vIHotaW5kZXg6IDI7XG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiJdfQ== */"] });


/***/ }),

/***/ "wxUJ":
/*!******************************************!*\
  !*** ./src/app/chats/chats.component.ts ***!
  \******************************************/
/*! exports provided: ChatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsComponent", function() { return ChatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





function ChatsComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatsComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", element_r6.firstname, " ", element_r6.lastname, "");
} }
function ChatsComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatsComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatsComponent_td_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const element_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onChat(element_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatsComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
function ChatsComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
class ChatsComponent {
    constructor(caseService, router) {
        this.caseService = caseService;
        this.router = router;
        this.clientData = [];
        this.displayedColumns = ['Name', 'Action'];
    }
    ngOnInit() {
        this.caseService.getExistingChats().subscribe(data => {
            this.clientData = data;
            console.log(this.clientData);
        });
    }
    onChat(data) {
        this.caseService.storeClientForChat(data);
        this.router.navigate(['/chatroom']);
    }
}
ChatsComponent.ɵfac = function ChatsComponent_Factory(t) { return new (t || ChatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_1__["CaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ChatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatsComponent, selectors: [["app-chats"]], decls: 13, vars: 3, consts: [[1, "bg-image"], [1, "bg-text", 2, "margin", "10px"], [1, "mat-h1", 2, "font-family", "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "font-weight", "bold"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "95%", 3, "dataSource"], ["matColumnDef", "Name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ChatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Chats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatsComponent_th_6_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatsComponent_td_7_Template, 2, 2, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatsComponent_th_9_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChatsComponent_td_10_Template, 3, 0, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ChatsComponent_tr_11_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChatsComponent_tr_12_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.clientData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"/assets/bg.jpg\");\n  \n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  \n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bg-text[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: normal;\n  \n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 95%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFFQSx1Q0FBQTtFQUVBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBSko7O0FBT0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBRUEsbUJBQUE7QUFMSiIsImZpbGUiOiJjaGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5iZy1pbWFnZSB7XHJcbiAgICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9ucHIuYnJpZ2h0c3BvdGNkbi5jb20vZGltczQvZGVmYXVsdC9mZjkzMjEzLzIxNDc0ODM2NDcvc3RyaXAvdHJ1ZS9jcm9wLzE4NzV4MTI1MCswKzAvcmVzaXplLzg4MHg1ODchL3F1YWxpdHkvOTAvP3VybD1odHRwOiUyRiUyRm5wci1icmlnaHRzcG90LnMzLmFtYXpvbmF3cy5jb20lMkZsZWdhY3klMkZzaXRlcyUyRnd2cG4lMkZmaWxlcyUyRjIwMTUxMSUyRlNjYWxlc29mSnVzdGljZS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYmcuanBnJyk7XHJcblxyXG4gICAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xyXG4gICAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG5cclxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmJnLXRleHQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLy8gei1pbmRleDogMjtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "xipE":
/*!**************************************************************!*\
  !*** ./src/app/client-main-nav/client-main-nav.component.ts ***!
  \**************************************************************/
/*! exports provided: ClientMainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientMainNavComponent", function() { return ClientMainNavComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");














const _c0 = ["*"];
class ClientMainNavComponent {
    constructor(breakpointObserver, authService) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.link1 = false;
        this.userName = '';
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
    }
    ngOnInit() {
        this.userName = this.authService.getuserName();
    }
    selectList() {
        this.link1 = !this.link1;
    }
    logoutLawyer() {
        this.authService.logoutLawyer();
    }
}
ClientMainNavComponent.ɵfac = function ClientMainNavComponent_Factory(t) { return new (t || ClientMainNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ClientMainNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClientMainNavComponent, selectors: [["app-client-main-nav"]], ngContentSelectors: _c0, decls: 58, vars: 13, consts: [["color", "primary", 1, "example-header"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"], [2, "padding-right", "10px"], [1, "flex-spacer"], [2, "font-size", "x-small"], ["mat-icon-button", ""], ["routerLink", "/lawyerchats"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/client-profile"], ["mat-menu-item", "", 3, "click"], [1, "example-container"], ["opened", "", 1, "example-sidenav", 3, "mode", "fixedInViewport", "fixedTopGap", "fixedBottomGap", "opened"], ["sidenav", ""], ["mat-list-item", "", "routerLink", "/clientdashboard"], ["mat-list-item", "", "routerLink", "/clientcases"], ["mat-list-item", "", "routerLink", "/lawyerlist"], [1, "footer"], [1, "rights"], [1, "contact"], [2, "margin-bottom", "0", "font-size", "medium"]], template: function ClientMainNavComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClientMainNavComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](33); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Lawyer Portal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "gavel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-menu", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClientMainNavComponent_Template_button_click_27_listener() { return ctx.logoutLawyer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-sidenav-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-sidenav", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Lawyers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-toolbar", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "small", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "\u00A9 All rights reserved for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Lawyer Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Contact Us \u2709");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "lawyer.portal2020@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 7, ctx.userName));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 9, ctx.isHandset$) ? "over" : "side")("fixedInViewport", "fixed")("fixedTopGap", 60)("fixedBottomGap", 60)("opened", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 11, ctx.isHandset$) === false);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  bottom: 60px;\n  left: 0;\n  right: 0;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n}\n\n.example-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: black;\n  color: white;\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  margin-bottom: 2px;\n  width: 100%;\n  background-color: black;\n  color: white;\n  display: inline-block;\n}\n\n.footer[_ngcontent-%COMP%]   .rights[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 18px;\n  font-size: x-small;\n}\n\n.footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  float: right;\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  font-weight: 300;\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNsaWVudC1tYWluLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBRUEsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFJRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxZQUFBO0VBQ0Usc0VBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRE4iLCJmaWxlIjoiY2xpZW50LW1haW4tbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuc2lkZW5hdiB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG5cbiAgLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICB9XG5cbiAgLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2MHB4O1xuICAgIGJvdHRvbTogNjBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgLmV4YW1wbGUtc2lkZW5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuXG4gIC5leGFtcGxlLWhlYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjojNjczYWI3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmZvb3RlciAucmlnaHRze1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgICBmb250LXNpemU6eC1zbWFsbDtcbiAgfVxuXG4gIC5mb290ZXIgLmNvbnRhY3R7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgZm9udC1mYW1pbHk6Q2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gIH1cbiJdfQ== */"] });


/***/ }),

/***/ "xmPl":
/*!**************************************************************!*\
  !*** ./src/app/client-caseinfo/client-caseinfo.component.ts ***!
  \**************************************************************/
/*! exports provided: ClientCaseinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCaseinfoComponent", function() { return ClientCaseinfoComponent; });
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-decoupled-document */ "KZYO");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/case.service */ "eECP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















function ClientCaseinfoComponent_hr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr");
} }
function ClientCaseinfoComponent_mat_label_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Reg No: ", ctx_r1.caseData.RegNo, "");
} }
function ClientCaseinfoComponent_mat_label_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Reg Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r2.caseData.RegDate), "");
} }
function ClientCaseinfoComponent_mat_label_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Stage: ", ctx_r3.caseData.stage, "");
} }
function ClientCaseinfoComponent_mat_label_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Description: ", ctx_r4.caseData.description, "");
} }
function ClientCaseinfoComponent_hr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr");
} }
function ClientCaseinfoComponent_mat_label_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Act: ", ctx_r6.caseData.act, "");
} }
function ClientCaseinfoComponent_mat_card_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Next Hearing Date :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, ctx_r7.orders[0].orderDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.orders[0].orderNote);
} }
function ClientCaseinfoComponent_table_41_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Hearing Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ClientCaseinfoComponent_table_41_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, element_r27.orderDate), " ");
} }
function ClientCaseinfoComponent_table_41_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ClientCaseinfoComponent_table_41_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r28.orderNote, " ");
} }
function ClientCaseinfoComponent_table_41_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 38);
} }
function ClientCaseinfoComponent_table_41_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 39);
} }
function ClientCaseinfoComponent_table_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ClientCaseinfoComponent_table_41_th_2_Template, 2, 0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ClientCaseinfoComponent_table_41_td_3_Template, 3, 3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ClientCaseinfoComponent_table_41_th_5_Template, 2, 0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ClientCaseinfoComponent_table_41_td_6_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ClientCaseinfoComponent_table_41_tr_7_Template, 1, 0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ClientCaseinfoComponent_table_41_tr_8_Template, 1, 0, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r8.caseData.orders);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r8.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r8.displayedColumns);
} }
function ClientCaseinfoComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Upload Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ClientCaseinfoComponent_div_43_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "pre", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "  *only pdf can be uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ClientCaseinfoComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ClientCaseinfoComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r32.originalname, " ");
} }
function ClientCaseinfoComponent_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Size(In Kb) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ClientCaseinfoComponent_td_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r33.size / 1000, " ");
} }
function ClientCaseinfoComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Created At ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ClientCaseinfoComponent_td_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, element_r34.createdAt), " ");
} }
function ClientCaseinfoComponent_th_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ClientCaseinfoComponent_td_59_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientCaseinfoComponent_td_59_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const element_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.deletePdf(element_r35.filename); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ClientCaseinfoComponent_td_59_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientCaseinfoComponent_td_59_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const element_r35 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.downloadPdf(element_r35.filename, element_r35.contentType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ClientCaseinfoComponent_td_59_button_3_Template, 2, 0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.caseData.status === "admitted" || ctx_r17.caseData.status === "pre-admitted");
} }
function ClientCaseinfoComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 38);
} }
function ClientCaseinfoComponent_tr_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 39);
} }
function ClientCaseinfoComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Linked Lawyer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientCaseinfoComponent_div_63_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r43.onMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r20.linkedLawyer.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r20.linkedLawyer.lastname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r20.linkedLawyer.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r20.linkedLawyer.phnno, " ");
} }
class ClientCaseinfoComponent {
    constructor(caseService, router, sanitizer) {
        this.caseService = caseService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.Editor = _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_0__;
        this.displayNextOrder = false;
        this.displayedColumns = ['Order Date', 'Note'];
        this.newTitle = '';
        this.newNote = '';
        this.editNoteMode = false;
        this.fileToUpload = null;
        this.DocColumns = ['Name', 'Size', 'Created_At', 'Actions'];
    }
    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    onDetailsUpdated() {
        this.caseData.details = this.details;
        this.caseService.updateDetails(this.caseData);
    }
    handleFileInput(files) {
        this.fileToUpload = files;
        if (this.fileToUpload.length != 0) {
            this.caseService.onUploadDoc(this.fileToUpload, this.caseData._id).subscribe((data) => {
                this.files = data;
                this.caseData.docs = data;
            });
        }
    }
    downloadPdf(filename, contentType) {
        this.caseService.downloadPDF(filename, contentType).subscribe((res) => {
            const file = new Blob([(res)], { type: "application/pdf" });
            const fileURL = URL.createObjectURL(file);
            window.open(fileURL);
        });
    }
    deletePdf(filename) {
        this.files = this.files.filter(function (e) {
            return e.filename != filename;
        });
        this.caseData.docs = this.files;
        this.caseService.onDeleteDoc(this.files, this.caseData._id);
        this.caseService.deletePDF(filename);
    }
    onMessage() {
        this.router.navigate(["clientChatroom"]);
    }
    ngOnInit() {
        this.linkedLawyerSub = this.caseService.getlinkedLawyerUpdateListener().subscribe((data) => {
            this.linkedLawyer = data;
        });
        this.caseSub = this.caseService.getsingleCaseUpdateListener().subscribe((data) => {
            this.caseData = data;
            this.details = data.details;
            this.orders = data.orders;
            this.notes = data.notes;
            this.files = data.docs;
            this.caseData.orders.sort(function (a, b) {
                var c = new Date(a.orderDate);
                var d = new Date(b.orderDate);
                return d - c;
            });
            if (new Date(this.caseData.orders[0].orderDate) > new Date()) {
                this.displayNextOrder = true;
            }
        });
    }
    ngOnDestroy() {
        this.caseSub.unsubscribe();
        this.linkedLawyerSub.unsubscribe();
    }
}
ClientCaseinfoComponent.ɵfac = function ClientCaseinfoComponent_Factory(t) { return new (t || ClientCaseinfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_case_service__WEBPACK_IMPORTED_MODULE_2__["CaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"])); };
ClientCaseinfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ClientCaseinfoComponent, selectors: [["app-client-caseinfo"]], decls: 64, vars: 25, consts: [[1, "bg-image"], [1, "grid-container", "bg-text"], [1, "mat-h1", 2, "font-family", "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "font-weight", "bold"], [2, "margin", "20px 50px"], [2, "min-height", "510px", "max-height", "auto"], ["mat-align-tabs", "start"], ["label", "Case Info"], ["fxLayout", "column", 2, "display", "flex", "margin", "20px 20px"], ["fxLayout", "row"], [2, "margin-left", "30px"], [4, "ngIf"], ["style", "margin-left: 30px;", 4, "ngIf"], ["label", "Details"], [1, "document-editor", 3, "editor", "ngModel", "ngModelChange", "ready"], ["label", "Hearings"], ["style", "display: flex; width: 80%; margin: 40px auto;", 4, "ngIf"], ["mat-table", "", "class", "mat-elevation-z8", "style", "width: 80%; margin: 40px auto;", 3, "dataSource", 4, "ngIf"], ["label", "Documents"], ["style", "display: flex; margin: 20px 20px;", "fxLayout", "column", 4, "ngIf"], ["mat-table", "", 2, "width", "80%", "margin", "auto", 3, "dataSource"], ["matColumnDef", "Name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Size"], ["matColumnDef", "Created_At"], ["matColumnDef", "Actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["label", "Lawyer"], [2, "display", "flex", "width", "80%", "margin", "40px auto"], [1, "mat-h3", 2, "font-size", "large"], [1, "mat-h3", 2, "margin-left", "20px"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "80%", "margin", "40px auto", 3, "dataSource"], ["matColumnDef", "Order Date"], ["mat-header-cell", "", "style", "font-size: medium;", 4, "matHeaderCellDef"], ["matColumnDef", "Note"], ["mat-header-cell", "", 2, "font-size", "medium"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [2, "font-size", "large"], ["enctype", "multipart/form-data"], ["type", "file", "id", "file", "multiple", "", "accept", "application/pdf", 3, "change"], [2, "color", "red"], ["mat-header-cell", ""], ["mat-button", "", "color", "accent", 3, "click"], ["mat-icon-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", 3, "click"], [2, "margin-top", "20px", "display", "flex"], [1, "tab"], [1, "flex-spacer"], ["mat-raised-button", "", "color", "primary", 2, "width", "10%", 3, "click"]], template: function ClientCaseinfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Case Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-tab-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ClientCaseinfoComponent_hr_15_Template, 1, 0, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ClientCaseinfoComponent_mat_label_17_Template, 2, 1, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ClientCaseinfoComponent_mat_label_18_Template, 3, 3, "mat-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ClientCaseinfoComponent_mat_label_30_Template, 2, 1, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ClientCaseinfoComponent_mat_label_31_Template, 2, 1, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ClientCaseinfoComponent_hr_32_Template, 1, 0, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ClientCaseinfoComponent_mat_label_33_Template, 2, 1, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-tab", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ckeditor", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ClientCaseinfoComponent_Template_ckeditor_ngModelChange_37_listener($event) { return ctx.details = $event; })("ready", function ClientCaseinfoComponent_Template_ckeditor_ready_37_listener($event) { return ctx.onReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ClientCaseinfoComponent_mat_card_40_Template, 8, 4, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ClientCaseinfoComponent_table_41_Template, 9, 3, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-tab", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, ClientCaseinfoComponent_div_43_Template, 8, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](48, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, ClientCaseinfoComponent_th_49_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, ClientCaseinfoComponent_td_50_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](51, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, ClientCaseinfoComponent_th_52_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, ClientCaseinfoComponent_td_53_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](54, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, ClientCaseinfoComponent_th_55_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, ClientCaseinfoComponent_td_56_Template, 3, 3, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](57, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, ClientCaseinfoComponent_th_58_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, ClientCaseinfoComponent_td_59_Template, 4, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, ClientCaseinfoComponent_tr_60_Template, 1, 0, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, ClientCaseinfoComponent_tr_61_Template, 1, 0, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-tab", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, ClientCaseinfoComponent_div_63_Template, 15, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Stamp No: ", ctx.caseData.stampNo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Filling Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 23, ctx.caseData.fillingDate), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.caseData.RegNo || ctx.caseData.RegDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.caseData.RegNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.caseData.RegDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Retitioner: ", ctx.caseData.petitioner, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Respondent: ", ctx.caseData.respondent, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Bench: ", ctx.caseData.bench, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Status: ", ctx.caseData.status, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("District: ", ctx.caseData.district, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.caseData.stage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.caseData.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.caseData.act);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.caseData.act);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("editor", ctx.Editor)("ngModel", ctx.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayNextOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orders.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.caseData.status === "admitted" || ctx.caseData.status === "pre-admitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.DocColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.DocColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.caseData.lawyer);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_11__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatRow"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".document-editor[_ngcontent-%COMP%] {\n  margin: 20px 20px;\n}\n\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  width: 195px;\n  height: 16px;\n  padding: 5px;\n  background-color: white;\n  cursor: pointer;\n  list-style-type: none;\n}\n\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #607D8B;\n}\n\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n  display: block;\n  text-decoration: none;\n}\n\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  color: white;\n}\n\n#search-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 20px;\n}\n\n.tab[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 40px;\n}\n\nul.search-result[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNsaWVudC1jYXNlaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUVKOztBQUNFO0VBQ0UseUJBQUE7QUFFSjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFFSjs7QUFDRTtFQUNFLFlBQUE7QUFFSjs7QUFBRTtFQUNFLFlBQUE7QUFHSjs7QUFERTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBSUo7O0FBREU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBREU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUlKIiwiZmlsZSI6ImNsaWVudC1jYXNlaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb2N1bWVudC1lZGl0b3Ige1xuICAgIG1hcmdpbiA6MjBweCAyMHB4O1xufVxuLnNlYXJjaC1yZXN1bHQgbGkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xuICAgIHdpZHRoOiAxOTVweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIH1cbiAgXG4gIC5zZWFyY2gtcmVzdWx0IGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICB9XG4gIFxuICAuc2VhcmNoLXJlc3VsdCBsaSBhIHtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIC5zZWFyY2gtcmVzdWx0IGxpIGE6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuc2VhcmNoLXJlc3VsdCBsaSBhOmFjdGl2ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gICNzZWFyY2gtYm94IHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICAudGFiIHsgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbiAgICBtYXJnaW4tbGVmdDogNDBweDsgXG59IFxuICBcbiAgdWwuc2VhcmNoLXJlc3VsdCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbiAgIl19 */", ".bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"/assets/bg.jpg\");\n  \n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  \n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.bg-text[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: normal;\n  \n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 95%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFFQSx1Q0FBQTtFQUVBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBSko7O0FBT0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBRUEsbUJBQUE7QUFMSiIsImZpbGUiOiJjaGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5iZy1pbWFnZSB7XHJcbiAgICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9ucHIuYnJpZ2h0c3BvdGNkbi5jb20vZGltczQvZGVmYXVsdC9mZjkzMjEzLzIxNDc0ODM2NDcvc3RyaXAvdHJ1ZS9jcm9wLzE4NzV4MTI1MCswKzAvcmVzaXplLzg4MHg1ODchL3F1YWxpdHkvOTAvP3VybD1odHRwOiUyRiUyRm5wci1icmlnaHRzcG90LnMzLmFtYXpvbmF3cy5jb20lMkZsZWdhY3klMkZzaXRlcyUyRnd2cG4lMkZmaWxlcyUyRjIwMTUxMSUyRlNjYWxlc29mSnVzdGljZS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYmcuanBnJyk7XHJcblxyXG4gICAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xyXG4gICAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG5cclxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmJnLXRleHQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLy8gei1pbmRleDogMjtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map