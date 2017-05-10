import { Component, Input, NgModule, ViewChild, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import 'flatpickr';

class Ng2FlatpickrComponent {
    constructor() {
        this.defaultFlatpickrOptions = {
            wrap: true,
            clickOpens: true,
            onChange: (selectedDates) => { this.writeValue(selectedDates); }
        };
        this.placeholder = "";
        this.propagateChange = (_) => { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.propagateChange(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
    /**
     * @param {?} date
     * @return {?}
     */
    setDateFromInput(date) {
        this.flatpickrElement.nativeElement._flatpickr.setDate(date, true);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.config) {
            Object.assign(this.defaultFlatpickrOptions, this.config);
        }
        this.flatpickr = this.flatpickrElement.nativeElement.flatpickr(this.defaultFlatpickrOptions);
        if (this.setDate) {
            this.setDateFromInput(this.setDate);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('setDate') && changes.setDate.currentValue) {
            this.setDateFromInput(changes.setDate.currentValue);
        }
    }
}
Ng2FlatpickrComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng2-flatpickr',
                template: `
		<div class="ng2-flatpickr-input-container" #flatpickr>
			<input class="ng2-flatpickr-input" [placeholder]="placeholder" type="text" data-input>
		</div>`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => Ng2FlatpickrComponent),
                        multi: true
                    }
                ]
            },] },
];
/**
 * @nocollapse
 */
Ng2FlatpickrComponent.ctorParameters = () => [];
Ng2FlatpickrComponent.propDecorators = {
    'flatpickrElement': [{ type: ViewChild, args: ['flatpickr',] },],
    'config': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'setDate': [{ type: Input },],
};

class Ng2FlatpickrModule {
}
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
Ng2FlatpickrModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { Ng2FlatpickrComponent, Ng2FlatpickrModule };
//# sourceMappingURL=ng2-flatpickr.js.map
