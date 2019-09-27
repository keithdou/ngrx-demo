import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { FormService } from '../service/form.service';
import { Store } from '@ngrx/store';
import { FormState } from './form.state';
import { Form } from '../models/form';
import { of } from 'rxjs';
import { LoadForm, LoadFormSuccess, AddForm, AddFormSuccess, SaveForm, SaveFormSuccess, EFormActions } from './form.actions';
import { switchMap, map} from 'rxjs/operators';

@Injectable()
export class FormEffects {
    @Effect()
    loadForm$ = this.actions$.pipe(
        ofType<LoadForm>(EFormActions.LoadForm),
        map(action => action.payload),
        switchMap((form: Form) => this.formService.getForm(form.formId)),
        switchMap((form: Form) =>
            of(new LoadFormSuccess(form)))
    );

    @Effect()
    addForm$ = this.actions$.pipe(
        ofType<AddForm>(EFormActions.AddForm),
        map(action => action.payload),
        switchMap((form: Form) => this.formService.addForm(form)),
        switchMap((form: Form) =>
            of(new AddFormSuccess(form)))
    );

    @Effect()
    saveForm$ = this.actions$.pipe(
        ofType<SaveForm>(EFormActions.SaveForm),
        map(action => action.payload),
        switchMap((form: Form) => this.formService.updateForm(form)),
        switchMap((form: Form) =>
            of(new SaveFormSuccess(form)))
    );

    constructor(
        private formService: FormService,
        private actions$: Actions,
        private store: Store<FormState>
    ) {}
}
