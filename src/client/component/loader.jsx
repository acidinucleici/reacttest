// @flow

import React from 'react'

type Props = {
  visible: bool,
}

const styleVisible = {display:'block'}
const styleInvisible = {display:'none'}

const Loader = ({ visible }: Props) =>
  <div style={(visible ? styleVisible : styleInvisible)}>xxx LOADING xxx</div>

export default Loader
