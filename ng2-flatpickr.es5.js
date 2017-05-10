import { Component, Input, NgModule, ViewChild, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import 'flatpickr';

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
    { type: Component, args: [{
                selector: 'ng2-flatpickr',
                template: "\n\t\t<div class=\"ng2-flatpickr-input-container\" #flatpickr>\n\t\t\t<input class=\"ng2-flatpickr-input\" [placeholder]=\"placeholder\" type=\"text\" data-input>\n\t\t</div>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return Ng2FlatpickrComponent; }),
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
    'flatpickrElement': [{ type: ViewChild, args: ['flatpickr',] },],
    'config': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'setDate': [{ type: Input },],
};

var Ng2FlatpickrModule = (function () {
    function Ng2FlatpickrModule() {
    }
    return Ng2FlatpickrModule;
}());
Ng2FlatpickrModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    Ng2FlatpickrComponent,
                ],
                exports: [
                    Ng2FlatpickrComponent,
                ],
                imports: [
                    FormsModule,
                    ReactiveFormsModule,
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

export { Ng2FlatpickrComponent, Ng2FlatpickrModule };
//# sourceMappingURL=ng2-flatpickr.es5.js.map
