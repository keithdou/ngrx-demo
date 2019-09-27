import { Form } from '../models/form';
import { Page } from '../models/page';
import { Action } from '@ngrx/store';

export enum EFormActions {
    LoadForm = '[Form] Load Form',
    LoadFormSuccess = '[Form] Load Form Success',
    GetForm =  '[Form] Get Form',
    AddForm = '[Form] Add Form',
    AddFormSuccess = '[Form] Add Form Success',
    SaveForm = '[Form] Save Form',
    SaveFormSuccess = '[Form] Save Form Success',
    AddPage = '[Form] Add Page',
    UpdatePage = '[Form] Update Page'
}

export class LoadForm implements Action {
    public readonly type = EFormActions.LoadForm;
    constructor (public payload: Form) {}
}

export class LoadFormSuccess implements Action {
    public readonly type = EFormActions.LoadFormSuccess;
    constructor (public payload: Form) {}
}

export class GetForm implements Action {
    public readonly type = EFormActions.GetForm;
    constructor (public payload: Form) {}
}

export class AddForm implements Action {
    public readonly type = EFormActions.AddForm;
    constructor(public payload: Form) {}
}

export class AddPage implements Action {
    public readonly type = EFormActions.AddPage;
    constructor(public payload: Page) {}
}

export class UpdatePage implements Action {
    public readonly type = EFormActions.UpdatePage;
    constructor(public payload: Page) {}
}

export class AddFormSuccess implements Action {
    public readonly type = EFormActions.AddFormSuccess;
    constructor(public payload: Form) {}
}

export class SaveForm implements Action {
    public readonly type = EFormActions.SaveForm;
    constructor(public payload: Form) {}
}

export class SaveFormSuccess implements Action {
    public readonly type = EFormActions.SaveFormSuccess;
    constructor(public payload: Form) {}
}

export type FormActions = 
    AddForm | AddFormSuccess | LoadForm | LoadFormSuccess | GetForm | SaveForm |
    SaveFormSuccess | AddPage | UpdatePage;
