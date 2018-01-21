// @flow

import React from 'react'

type Props = {
  message: string,
  extra: string,
}

const Messagebig = ({ message, extra }: Props) =>
  <h1>{message}{extra}</h1>

export default Messagebig
