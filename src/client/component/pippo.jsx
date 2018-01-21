// @flow

import React from 'react'
import injectSheet from 'react-jss'

class Pippo extends React.Component {

  constructor(props) {
    super(props)

  }

    componentDidMount(){}

    render () {
      const { classes } = this.props
      return(
        <h1 className={classes.pippo}>Pippo</h1>
      )
    }
}


const styles = {
  pippo: {
    background: 'yellow',
    fontSize: '20px'
  }
}

//export default Menu
export default injectSheet(styles)(Pippo)
