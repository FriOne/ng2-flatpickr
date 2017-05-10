(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('flatpickr')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', 'flatpickr'], factory) :
	(factory((global.ng2Flatpickr = global.ng2Flatpickr || {}),global.ng.core,global._angular_forms));
}(this, (function (exports,_angular_core,_angular_forms) { 'use strict';

var Ng2FlatpickrComponent = (function () {
    function Ng2FlatpickrComponent() {
        var _this = this;
        this.defaultFlatpickrOptions = {
            wrap: true,
            clickOpens: true,
            onChange: function (selectedDates) { _this.writeValue(selectedDates); }
        };
        this.placeholder = "";
        this.propagateChange = function (_) { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    Ng2FlatpickrComponent.prototype.writeValue = function (value) {
        this.propagateChange(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    Ng2FlatpickrComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @return {?}
     */
    Ng2FlatpickrComponent.prototype.registerOnTouched = function () { };
    /**
     * @param {?} date
     * @return {?}
     */
    Ng2FlatpickrComponent.prototype.setDateFromInput = function (date) {
        this.flatpickrElement.nativeElement._flatpickr.setDate(date, true);
    };
    /**
     * @return {?}
     */
    Ng2FlatpickrComponent.prototype.ngAfterViewInit = function () {
        if (this.config) {
            Object.assign(this.defaultFlatpickrOptions, this.config);
        }
        this.flatpickr = this.flatpickrElement.nativeElement.flatpickr(this.defaultFlatpickrOptions);
        if (this.setDate) {
            this.setDateFromInput(this.setDate);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    Ng2FlatpickrComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('setDate') && changes.setDate.currentValue) {
            this.setDateFromInput(changes.setDate.currentValue);
        }
    };
    return Ng2FlatpickrComponent;
}());
Ng2FlatpickrComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'ng2-flatpickr',
                template: "\n\t\t<div class=\"ng2-flatpickr-input-container\" #flatpickr>\n\t\t\t<input class=\"ng2-flatpickr-input\" [placeholder]=\"placeholder\" type=\"text\" data-input>\n\t\t</div>",
                providers: [
                    {
                        provide: _angular_forms.NG_VALUE_ACCESSOR,
                        useExisting: _angular_core.forwardRef(function () { return Ng2FlatpickrComponent; }),
                        multi: true
                    }
                ]
            },] },
];
/**
 * @nocollapse
 */
Ng2FlatpickrComponent.ctorParameters = function () { return []; };
Ng2FlatpickrComponent.propDecorators = {
    'flatpickrElement': [{ type: _angular_core.ViewChild, args: ['flatpickr',] },],
    'config': [{ type: _angular_core.Input },],
    'placeholder': [{ type: _angular_core.Input },],
    'setDate': [{ type: _angular_core.Input },],
};

var Ng2FlatpickrModule = (function () {
    function Ng2FlatpickrModule() {
    }
    return Ng2FlatpickrModule;
}());
Ng2FlatpickrModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                declarations: [
                    Ng2FlatpickrComponent,
                ],
                exports: [
                    Ng2FlatpickrComponent,
                ],
                imports: [
                    _angular_forms.FormsModule,
                    _angular_forms.ReactiveFormsModule,
                ]
            },] },
];
/**
 * @nocollapse
 */
Ng2FlatpickrModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */

exports.Ng2FlatpickrComponent = Ng2FlatpickrComponent;
exports.Ng2FlatpickrModule = Ng2FlatpickrModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-flatpickr.umd.js.map
