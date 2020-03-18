import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConcatComponent } from './modules/observables/combine/concat.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RetryWhenComponent } from './modules/observables/errors/retry-when.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgFormComponent } from './modules/form-submission-state/ng-form/ng-form.component';
import { IsSubmittedPropertyComponent } from './modules/form-submission-state/is-submitted-property/is-submitted-property.component';
import { SubmitFormComponent } from './shared/components/submit-form/submit-form.component';
import { FieldErrorsComponent } from './shared/components/field-errors/field-errors.component';
import { CustomSubmitFormComponent } from './modules/form-submission-state/custom-submit-form/custom-submit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ConcatComponent,
    RetryWhenComponent,
    NgFormComponent,
    IsSubmittedPropertyComponent,
    SubmitFormComponent,
    FieldErrorsComponent,
    CustomSubmitFormComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
