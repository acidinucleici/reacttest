// @flow

import { connect } from 'react-redux'

import Messagebig from '../component/messagebig'

const mapStateToProps = state => ({
  message: state.hello.get('message'),
  extra: state.hello.get('extra'),
})

export default connect(mapStateToProps)(Messagebig)
