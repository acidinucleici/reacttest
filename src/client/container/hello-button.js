// @flow

import { connect } from 'react-redux'

import { sayHello, sayHelloBody } from '../action/hello'
import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'Say hello',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { 
	dispatch(sayHello('Hello!')) 
	dispatch(sayHelloBody(' Bro!'))	
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
