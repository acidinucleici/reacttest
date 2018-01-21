// @flow

import { connect } from 'react-redux'

import Loader from '../component/loader'

const mapStateToProps = state => ({
  visible : state.hello.get('isloading'),
})

export default connect(mapStateToProps)(Loader)
