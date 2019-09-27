import { Page } from './page';

export interface Form {
    formId: string;
    title: string;
    applicantId: string;
    applicantName: string;
    pages?: Page[];
}
