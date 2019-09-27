import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { Form } from '../models/form';
import { Page3 } from '../models/page';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { selectForm } from '../store/form.selectors';
import { SaveForm, UpdatePage} from '../store/form.actions';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

    form: Form;
    page: Page3;
    pageFormGroup: FormGroup;
    subscriptionPeriods: SelectItem[];

    constructor(private store: Store<AppState>, private router: Router, private formBuilder: FormBuilder) {

        this.store.select(selectForm).subscribe((form) => {
            console.log(form);
            this.form = form;
            this.page = this.form.pages[2] as Page3;
            this.pageFormGroup =  this.formBuilder.group({
                subscriptionPeriod: [this.page.subscriptionPeriod]
            });
        });

        this.subscriptionPeriods = [
            {label: '1 month', value: '1'},
            {label: '3 months', value: '3'},
            {label: '6 months', value: '6'},
            {label: '1 year', value: '12'}
        ];
     }

  ngOnInit() {
  }

  updateForm() {
    console.log('sub=' + this.pageFormGroup.value.subscriptionPeriod);
    this.store.dispatch(new UpdatePage(
        Object.assign({},this.page,{
            subscriptionPeriod: this.pageFormGroup.value.subscriptionPeriod
        } as Page3)));
    this.router.navigate(['/review']);
  }
}
