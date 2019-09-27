import { Component, OnInit } from '@angular/core';
import { Form } from '../models/form';
import { Page1 } from '../models/page';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { selectForm } from '../store/form.selectors';
import { SaveForm, UpdatePage} from '../store/form.actions';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-page1',
    templateUrl: './page1.component.html',
    styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

    form: Form;
    page: Page1;
    pageFormGroup: FormGroup;

    constructor(private store: Store<AppState>, private router: Router, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.store.select(selectForm).subscribe((form) => {
            this.form = form;
            this.page = this.form.pages[0] as Page1;
            console.log(this.page);
            this.pageFormGroup =  this.formBuilder.group({
                customerName: [this.page.customerName],
                customerAddress: [this.page.customerAddress]
            });
        });
    }

    updateForm() {
        this.store.dispatch(new UpdatePage(
            Object.assign({},this.page,{
                customerName: this.pageFormGroup.value.customerName,
                customerAddress: this.pageFormGroup.value.customerAddress
        } as Page1)));
        this.router.navigate(['/','page2']);
    }
}
