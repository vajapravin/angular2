import { createSelector } from 'reselect';
import { ActionReducerMap } from '@ngrx/store';
import * as _ from 'lodash';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
// import * as fromRouter from '@ngrx/router-store';
import * as fromLayout from '../core/layout/shared/layout.reducer';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  // router: fromRouter.RouterReducerState;
  layout: fromLayout.State;
}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export const reducers: ActionReducerMap<State> = {
  // router: fromRouter.routerReducer,
  layout: fromLayout.reducer
};