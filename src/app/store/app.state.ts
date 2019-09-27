import { FormState, initialFormState } from './form.state';

export interface AppState {
    form: FormState;
}

export const initialAppState: AppState = {
    form: initialFormState
};
