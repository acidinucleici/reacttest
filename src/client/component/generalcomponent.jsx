// @flow

import React from 'react'
import injectSheet from 'react-jss'
import fetch from 'isomorphic-fetch'

//vanno importati tutti ipossibili componenti che sono utilizzati nella generazione di una pagina

class GeneralComponent extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        loading: false,
        component: null
      }
    }

    componentDidMount(){
      this.setState({loading:true})
      fetch('/static/getTemplate.js', {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      })
        .then((response) => response.json())
        .then(json => {
          this.setState({
            loading:false,
            component: json[0].template
          })
        })
    }

    doView(componentName){
      switch (this.state.component) {
        case 'remoteTemplate':
          return <h3>REMOTE VIEW</h3>
          break;
        default:
          return <h3>DEFAULT VIEW</h3>
      }
    }


    render () {
      const { classes } = this.props
      const view = this.doView(this.state.component)
      return(
        <div>
          <h1 className={classes.pippo}>General {this.props.location.pathname}</h1>
          {view}
        </div>
      )
    }
}


const styles = {
  pippo: {
    background: 'green',
    fontSize: '20px'
  }
}

//export default Menu
export default injectSheet(styles)(GeneralComponent)
