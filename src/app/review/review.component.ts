import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { selectForm } from '../store/form.selectors';
import { Form } from '../models/form';
import { SaveForm } from '../store/form.actions';
import { subscriptionPeriods } from '../models/page';

@Component({
    selector: 'app-review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

    form: Form;

    constructor(private store: Store<AppState>, private router: Router, private formBuilder: FormBuilder) {
        this.store.select(selectForm).subscribe((form) => {
            console.log(form);
            this.form = form;
        });
    }

    ngOnInit() {
    }

    saveForm() {
        console.log('save form');
        this.store.dispatch(new SaveForm(this.form));
        this.router.navigate(['/confirm']);
    }

    getSubscriptionPeriodName(value) {
        const ix = subscriptionPeriods.map(period => period.value).indexOf(value);
        return subscriptionPeriods[ix].label;
    }

}
