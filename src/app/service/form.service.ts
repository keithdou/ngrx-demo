import { Injectable } from '@angular/core';
import { Observable, of, empty } from 'rxjs';
import { Form } from '../models/form';
import { Page1, Page2, Page3 } from '../models/page';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json'),
    observe: 'response' as 'body'
 };

const API_URL = '/form';  
@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  getForm(formId: string): Observable<Form> {
    return this.http.get<any>(API_URL, httpOptions).pipe(
            map(resp => {
                console.log(resp);
                return resp.body;
        }));

    // let form = {formId: formId, title: 'Application Form ' + formId, applicantId: '123456',  applicantName: 'Sally',
    //     pages: [
    //         {pageNumber: '1', title: 'Page 1: Name and Address',
    //                                     customerName: 'Fred', customerAddress: '1 Adelaide St, Brisbane 4000'} as Page1,
    //         {pageNumber: '2', title: 'Page 2: Contact Details', 
    //                                     emailAddress: 'fred@gmail.com', mobile: '0431345678'} as Page2,
    //         {pageNumber: '3', title: 'Page 3: Subscription Details', 
    //                                     subscriptionPeriod: '3'} as Page3

    //     ]};
    // return of(form);
    // //  return of({});
  }

  addForm(form: Form): Observable<Form> {
    // TODO store in remote db
    console.log('addForm:');
    console.log(form);
    return of(form);
  }

  updateForm(form: Form): Observable<Form> {
    return this.http.post(API_URL, form, httpOptions).pipe(
        map (resp => {
            console.log(resp);
            return form;
        })
    );
  }
}
