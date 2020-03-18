import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
    selector: 'app-ng-form',
    templateUrl: './ng-form.component.html',
    styleUrls: ['./ng-form.component.css']
})
export class NgFormComponent implements OnInit {
    /**
     * Form values container
     */
    form: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.bindForm();
    }


    submit(ngForm: FormGroupDirective): void {
        console.log('ngForm.submitted', ngForm.submitted);
        if (this.form.valid) {
            // Handle
        }
    }

    /**
     * Bind form initial values
     */
    private bindForm() {
        this.form = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]]
        });
    }
}
