// @flow

import { connect } from 'react-redux'

import Menu from '../component/menu'
import { isNavOpen } from '../action/general'


const mapStateToProps = state => ({
  state: state.general,
  open: state.general.get('isnavopen'),
})

const mapDispatchToProps = (dispatch) => ({})


export default connect(mapStateToProps, mapDispatchToProps)(Menu)
