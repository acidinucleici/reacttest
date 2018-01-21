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



class NavBtn extends React.Component {

  constructor(props) {
    super(props)
  }

    componentDidMount(){
      console.log(this.node)
      const amount = 100
      TweenMax.to(this.node, .5, { y:`${amount}px`});

      TweenMax.to(this.node.querySelector(`.ico`), .5, { y:`${(-amount)}px`});
    }

    shouldComponentUpdate(nextProps, nextState) {
      return true
    }

    componentWillReceiveProps(nextProps) {    }

    render () {
      const { classes } = this.props
      return(
        <div id="navbtn" className={classes.generalNavBtn} onClick={this.props.handleClick} ref={node => (this.node = node)}>
          <div className="ico">
            {(this.props.open ? <div>OPEN</div> : <div>CLOSE</div>)}
          </div>
        </div>
      )
    }
}


const styles = {
  generalNavBtn: {
    opacity: props => props.opacity
  }
}

  NavBtn.PropTypes = {
    open: PropTypes.bool,
    opacity: PropTypes.number,
    handleClick: PropTypes.Function,
  }

  NavBtn.defaultProps = {
    open: false,
    opacity: .2,
    handleClick: () => { console.log('handleClick not defined') },
  }

//export default NavBtn
export default injectSheet(styles)(NavBtn)
