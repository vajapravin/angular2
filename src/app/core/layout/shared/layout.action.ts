import { Action } from '@ngrx/store';

export const OPEN_SIDENAV =   '[Layout] Open Sidenav';

export class OpenSidenavAction implements Action {
  readonly type = OPEN_SIDENAV;
}

export type Actions
  = OpenSidenavAction