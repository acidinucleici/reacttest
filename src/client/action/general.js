// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'

export const IS_NAV_OPEN = 'IS_NAV_OPEN'
export const isNavOpen = createAction(IS_NAV_OPEN)
