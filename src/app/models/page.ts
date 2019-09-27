export interface Page {
    pageNumber: string;
    title: string;
}

export interface Page1 extends Page {
    customerName?: string;
    customerAddress?: string;
}

export interface Page2 extends Page {
    emailAddress?: string;
    mobile?: string;
}

export interface Page3 extends Page {
    subscriptionPeriod: string;
}

export const subscriptionPeriods = [
    {label: '1 month', value: '1'},
    {label: '3 months', value: '3'},
    {label: '6 months', value: '6'},
    {label: '1 year', value: '12'}
];
