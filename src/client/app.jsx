// @flow
//https://css-tricks.com/react-router-4/
//https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html
//https://medium.com/appifycanada/animations-with-reacttransitiongroup-4972ad7da286
//https://reacttraining.com/react-router/web/example/route-config
import React from 'react'
import HelloButton from './container/hello-button'
import HelloAsyncButton from './container/hello-async-button'
import Message from './container/message'
import Messagebig from './container/messagebig'
import MessageAsync from './container/message-async'
import Loader from './container/loader'
import NavBtn from './container/navbtn'
import MyBox from './component/mybox'
//import Menu from './container/menu'
import { APP_NAME } from '../shared/config'

import {Route, Switch, Link } from 'react-router-dom'


import asyncComponent from "./container/AsyncComponent"
const AsyncMenu = asyncComponent(() => import("./container/menu"))
const AsyncHome = asyncComponent(() => import("./component/home"))
const AsyncPippo = asyncComponent(() => import("./component/pippo"))

////////////////////////////////////////////////////////////
// first our route components
const Main = () => <h2>Main</h2>

const Sandwiches = () => <h2>Sandwiches</h2>

const Tacos = ({...props,  routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      {routes.map((route, i) => (
      <li key={i}><Link to={route.path} >{route.label}</Link></li>
      ))}
    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route}/>
    ))}
  </div>
)

const Cucine = ({...props,  routes }) => (
  <div>
    <h2>Cucine</h2>
    <p>la lista di link a seguire è ottenuta da una chiamata api che mi restitutisce tutte le possibile categorie delle cucine</p>
    <ul>
      <li><Link to="/cucine_slug/categoria-1/" >Categoria 1</Link></li>
      <li><Link to="/cucine_slug/categoria-2/" >Categoria 2</Link></li>
      <li><Link to="/cucine_slug/categoria-3/" >Categoria 3</Link></li>
    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route}/>
    ))}
  </div>
)

const CucineListCat = ({...props,  routes }) => (
  <div>
    <h3>Cat {props.match.params.cat}</h3>
    <p>la lista di lisk a seguire è ottenuta da una chiamata api che mi restitutisce tutte le possibile cucine per la categoria corrente</p>
    <ul>
      <li><Link to={`/cucine_slug/${props.match.params.cat}/cucina-1/`} >Cucina 1</Link></li>
      <li><Link to={`/cucine_slug/${props.match.params.cat}/cucina-2/`} >Cucina 2</Link></li>
      <li><Link to={`/cucine_slug/${props.match.params.cat}/cucina-3/`} >Cucina 3</Link></li>
    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route}/>
    ))}
  </div>
)

const SingolaCucina = (props) => <h3>Cucina {props.match.params.cat} {props.match.params.id}</h3>

import GeneralComponent from './component/generalcomponent'

/*const GeneralComponent = ({...props,  routes }) => (
  <div>
    <h3>General {props.location.pathname} {console.log(props)}</h3>
    <h2>template: </h2>
  </div>
)*/

const Bus = () => <h3>Bus</h3>
const Cart = () => <h3>Cart</h3>

////////////////////////////////////////////////////////////
// then our route config
const routes = [
  { path: '/sandwiches',
    component: Sandwiches
  },
  { path: '/tacos',
    component: Tacos,
    routes: [
      { path: '/tacos/bus',
        stub: 'tacos',
        label: 'BUS',
        component: Bus
      },
      { path: '/tacos/cart',
        stub: 'tacos',
        label: 'CART',
        component: Cart
      }
    ]
  },
  { path: '/cucine_slug',
    component: Cucine,
    stub: 'cucine_slug',
    routes: [
      { path: '/cucine_slug/:cat',
        stub: 'cucine_slug',
        label: '',
        component: CucineListCat,
        routes: [
          { path: '/cucine_slug/:cat/:id',
            stub: 'cucine_slug',
            label: '',
            component: SingolaCucina,
          }
        ]
      }
    ]
  }
]

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} slug={route.slug} routes={route.routes} />
  )}/>
)


class App extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       opacity: .3,
       rrr: 0
     }

     const self = this
     var gyroPresent = false
     window.addEventListener("devicemotion", function(event){
      if(event.rotationRate.alpha || event.rotationRate.beta || event.rotationRate.gamma || event.rotationRate.absolute)
          gyroPresent = true
          self.setState({
            rrr: event.rotationRate.alpha
          })
      })

  }

    varOpacity(k) {
      const self = this
      const dH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      const sH = 4
      const fH = dH / sH
      for(let i = sH; i > 0; --i){
        if(k < fH*i){
            self.setState({
              opacity: 1/i
            })
        }
      }
    }

    initTouch() {
	     // Register touchstart and touchend listeners for element 'source'
      const src = window
      const btn = document.getElementById("navbtn")
      let clientX, clientY
      const self = this

      src.addEventListener('touchstart', function(e) {
        // Cache the client X/Y coordinates
        //clientX = e.touches[0].clientX
        //clientY = e.touches[0].pageY
        clientY = parseInt(btn.offsetTop + btn.offsetHeight)

      }, false)

      src.addEventListener('touchend', function(e) {
        let deltaX, deltaY
        deltaY = e.changedTouches[0].pageY - clientY

        //self.varOpacity(deltaY)
        self.setState({
          opacity: .2
        })
      }, false)

      src.addEventListener('touchmove', function(e) {
        let deltaY
        deltaY = e.changedTouches[0].pageY - window.pageYOffset - clientY

        self.varOpacity(deltaY)

      }, false)

    }

    componentDidMount(){
    	this.initTouch()
    }

    render () {
      console.log(window.app_routes)
      return(
        <div id="main">
          <h1>{APP_NAME} - {this.state.rrr}</h1>
          <Message />
          <Messagebig />
          <HelloButton />
          <MessageAsync />
          <HelloAsyncButton />
          <Loader />
          <NavBtn opacity={this.state.opacity} />
          <AsyncMenu />
          <Switch>
              <Route path="/" exact component={AsyncHome} />
              <Route path="/pippo" component={AsyncPippo} />
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
              <Route component={GeneralComponent} />
          </Switch>
          <MyBox />
          <Link to='/'>Home</Link> - <Link to='/pippo'>Pippo</Link>  - <Link to='/cucine_slug'>Cucine</Link>  - <Link to='/pippo/pluto'>Pluto</Link>
          - <Link to='/sandwiches'>SAND</Link> - <Link to='/generico'>generico</Link> - <Link to='/altro-generico/url/deep/'>generico2</Link>

        </div>
      )
    }
}

export default App
