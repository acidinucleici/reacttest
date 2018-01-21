// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  IS_NAV_OPEN,
} from '../action/general'

const initialState = Immutable.fromJS({
  isnavopen: false,
})

const generalReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case IS_NAV_OPEN:
      return state.set('isnavopen', !state.get('isnavopen'))
    default:
      return state
  }
}

export default generalReducer
