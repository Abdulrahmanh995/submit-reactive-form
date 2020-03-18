import { FormGroup } from '@angular/forms';

export class SubmitFormGroup extends FormGroup {

    /**
     * Sets a form to submitted state on ngSubmit
     */
    private _isSubmitted = false;

    constructor(form: {}, validators = null, isSubmitted: boolean = false) {
        super(form, validators);
        this._isSubmitted = isSubmitted;
    }

    /**
     * Reset form values with provided ones
     * @param value any
     * @param options object onlySelf: boolean, emitEvent: boolean
     */
    reset(value?: any, options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
        super.reset(value, options);
        this.isSubmitted = false;
    }

    get isSubmitted(): boolean {
        return this._isSubmitted;
    }

    set isSubmitted(value: boolean) {
        this._isSubmitted = value;
    }
}
