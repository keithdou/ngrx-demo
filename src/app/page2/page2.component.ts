import { Component, OnInit } from '@angular/core';
import { Form } from '../models/form';
import { Page2 } from '../models/page';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { selectForm } from '../store/form.selectors';
import { SaveForm, UpdatePage} from '../store/form.actions';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

    form: Form;
    page: Page2;
    pageFormGroup: FormGroup;

    constructor(private store: Store<AppState>, private router: Router, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.store.select(selectForm).subscribe((form) => {
            console.log(form);
            this.form = form;
            this.page = this.form.pages[1] as Page2;
            this.pageFormGroup =  this.formBuilder.group({
                emailAddress: [this.page.emailAddress],
                mobile: [this.page.mobile]
            });
        });
    }

    updateForm() {
        this.store.dispatch(new UpdatePage(
            Object.assign({},this.page,{
                emailAddress: this.pageFormGroup.value.emailAddress,
                mobile: this.pageFormGroup.value.mobile
            } as Page2)));
        this.router.navigate(['/', 'page3']);
    }

}
