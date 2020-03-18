import { Component, OnInit } from '@angular/core';
import { SubmitFormGroup } from '../../../shared/models/submit-form-group';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-custom-submit-form',
    templateUrl: './custom-submit-form.component.html',
    styleUrls: ['./custom-submit-form.component.css']
})
export class CustomSubmitFormComponent implements OnInit {

    /**
     * Form values container
     */
    form: SubmitFormGroup;

    ngOnInit() {
        this.bindForm();
    }

    submit(): void {
        console.log('form submitted', this.form.value);
    }

    /**
     * Bind form initial values
     */
    private bindForm(): void {
        this.form = new SubmitFormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email])
        });
    }
}
