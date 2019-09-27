import { Component, OnInit } from '@angular/core';
import { subscriptionPeriods } from '../models/page';
import { Form } from '../models/form';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { selectForm } from '../store/form.selectors';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

    form: Form;

    constructor(private store: Store<AppState>) {
        this.store.select(selectForm).subscribe((form) => {
            console.log(form);
            this.form = form;
        });
    }

    ngOnInit() {
    }

    getSubscriptionPeriodName(value) {

        const ix = subscriptionPeriods.map(period => period.value).indexOf(value);
        return subscriptionPeriods[ix].label;
    }

}
