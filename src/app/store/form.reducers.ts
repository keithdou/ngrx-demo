import { EFormActions, FormActions } from './form.actions';
import { initialFormState, FormState } from './form.state';

export const formReducers = (
    state = initialFormState,
    action: FormActions):
    FormState => {
        switch (action.type) {
            case EFormActions.AddFormSuccess: {
                return {
                    ...state,
                    form: action.payload
                };
            }

            case EFormActions.LoadFormSuccess: {
                return {
                    ...state,
                    form: action.payload
                };
            }

            case EFormActions.SaveFormSuccess: {
                return {
                    ...state,
                    form: action.payload
                };
            }

            case EFormActions.GetForm: {
                return {
                    ...state,
                    form: action.payload
                };
            }

            case EFormActions.AddPage: {
                return {
                    ...state,
                    form: Object.assign({}, state.form, {pages: [...state.form.pages, action.payload]})
                };
            }

            case EFormActions.UpdatePage: {
                const ix = state.form.pages.map(page => page.pageNumber).indexOf(action.payload.pageNumber);
                return {
                    ...state,
                    form: Object.assign({}, state.form, {pages: [
                        ...state.form.pages.slice(0, ix),
                        action.payload,
                        ...state.form.pages.slice(ix + 1)]}),
                    };
            }

            default:
                return state;
        }
    };