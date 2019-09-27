import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { formReducers } from './form.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  form: formReducers
};
