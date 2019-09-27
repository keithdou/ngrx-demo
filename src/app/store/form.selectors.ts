import { AppState } from './app.state';
import { FormState } from './form.state';
import { Form } from '../models/form';
import { createSelector } from '@ngrx/store';

const selectFormState = (state: AppState) => state.form;

export const selectForm = createSelector(
    selectFormState,
    (state: FormState) => {
        return state.form;
    }
);
