import { Form } from '../models/form';

export interface FormState {
    form: Form;
}

export const initialFormState: FormState = {
    form: {formId: '', title: '', applicantId: '', applicantName: '', pages: []}
}