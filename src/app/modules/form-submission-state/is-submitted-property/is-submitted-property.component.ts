import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-is-submitted-property',
  templateUrl: './is-submitted-property.component.html',
  styleUrls: ['./is-submitted-property.component.css']
})
export class IsSubmittedPropertyComponent implements OnInit {

    /**
     * Is form submitted or not yet
     */
    isSubmitted = false;

    /**
     * Form values container
     */
    form: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.bindForm();
    }


    /**
     * Submit form handler
     */
    submit(): void {
        this.isSubmitted = true;
        console.log('form submitted');
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
