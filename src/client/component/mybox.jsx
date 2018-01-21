// @flow

import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'


/*
import {TweenMax, Power2, TimelineLite} from "gsap";

import Draggable from "gsap/Draggable";
import ScrollToPlugin from "gsap/ScrollToPlugin";
*/
import { TimelineMax, TimelineLite, TweenLite, TweenMax, Expo } from 'gsap'



class MyBox extends React.Component {

  constructor(props) {
    super(props)
  }

    componentDidMount(){
    }


    componentWillReceiveProps(nextProps) {    }

    render () {
      const { classes } = this.props
      return(
        <div className={classes.generalNavBtn} ref={node => (this.node = node)}></div>
      )
    }
}


const styles = {
  generalNavBtn: {
    position: 'fixed',
    bottom:0,
    right:0,
    width:'100px',
    height:'100px',
    background:'rgba(0,255,0)'
  }
}


//export default NavBtn
export default injectSheet(styles)(MyBox)
