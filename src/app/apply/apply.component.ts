import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { AddForm, LoadForm, LoadFormSuccess, EFormActions, FormActions } from '../store/form.actions';
import { Page1, Page2, Page3 } from '../models/page';
import { Router } from '@angular/router';
import { ofType, Actions } from '@ngrx/effects';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  constructor (private store: Store<AppState>, private router: Router, private actions$: Actions<FormActions>) {

    /* Wait for the LoadForm to complete before navigating to the next page */
    this.actions$.pipe(
         ofType(EFormActions.LoadFormSuccess),
         take(1))
         .subscribe((payload) => {
            console.log('LoadFormSuccess done');
            this.router.navigate(['/page1']);
    });
  }

  ngOnInit() {
  }

  enrol() {
      /* Create a new form with some dummy data */
        this.store.dispatch(new AddForm({formId: '1', title: 'My Enrolment Application', applicantId: '123456', applicantName: 'Fred1234',
            pages: [
                {pageNumber: '1', title: 'Page 1: Name and Address',
                                            customerName: '', customerAddress: ''} as Page1,
                {pageNumber: '2', title: 'Page 2: Contact Details', 
                                            emailAddress: '', mobile: ''} as Page2,
                {pageNumber: '3', title: 'Page 3: Subscription Details',
                                            subscriptionPeriod: ''} as Page3

            ]}));

        // Pages could be added this way using the AddPage action
        // this.store.dispatch(new AddPage({pageNumber: '1', title: 'Page 1: Name and Address', 
        //                                  customerName: 'Fred', customerAddress: '1 Adelaide St, Brisbane 4000'} as Page1));
        // this.store.dispatch(new AddPage({pageNumber: '2', title: 'Page 2: Contact Details', 
        //                                  emailAddress: 'fred@gmail.com', mobile: '0431345678'} as Page2));

        this.router.navigate(['/page1']);
  }

  restart() {
        /* Read the existing form from remote db */
        this.store.dispatch(new LoadForm({formId: '1', title: '', applicantId: '123456', applicantName: '', pages:  []}));
  }

}
