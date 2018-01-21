// @flow

import React from 'react'
import injectSheet from 'react-jss'

class Menu extends React.Component {

  constructor(props) {
    super(props)

  }

    componentDidMount(){}

    render () {
      const { classes } = this.props
      return(
        <div id="menu" className={this.props.open ? 'menuOpen' : ''}>
          <ul>
            <li className={classes.pippo}><a href="#"><span>xxx</span></a></li>
          </ul>
        </div>
      )
    }
}


const styles = {
  pippo: {
    background: 'red',
    fontSize: '20px'
  }
}

//export default Menu
export default injectSheet(styles)(Menu)
