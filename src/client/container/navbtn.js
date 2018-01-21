// @flow

import { connect } from 'react-redux'

import NavBtn from '../component/navbtn'
import { isNavOpen } from '../action/general'


const mapStateToProps = state => ({
  state: state.general,
  open: state.general.get('isnavopen'),
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => {
      dispatch(isNavOpen(true))
   	},
})


export default connect(mapStateToProps, mapDispatchToProps)(NavBtn)
