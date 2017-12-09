import * as layout from './layout.action';


export interface State {
  layout: string;
}

const initialState: State = {
  layout: 'alpha'
};

export function reducer(state = initialState, action: layout.Actions): State {
  return state;
}