// @flow

import { connect } from 'react-redux'

import { sayHelloAsync, isLoading } from '../action/hello'
import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'Say hello asynchronously and send 1234',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { 
	dispatch(isLoading(true))	
	dispatch(sayHelloAsync(1234)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
