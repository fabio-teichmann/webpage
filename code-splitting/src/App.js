// import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';

import Page1 from './components/Page1';
// import AsyncComponent from './components/AsyncComponent';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';

// lazy import
const Page2Lazy = React.lazy(() => import('./components/Page2'));
const Page3Lazy = React.lazy(() => import('./components/Page3'));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: null,
    }
  }

  onRouteChange = (route) => {
    // no code splitting
    this.setState({route: route});
    // with code splitting
    // if (route === 'page1') {
    //   this.setState({ route: route }) 
    // } else if (route === 'page2') {
    //   import('./components/Page2').then((Page2) => {
    //     this.setState({ route: route, component: Page2.default })
    //   })
    // } else if (route === 'page3') {
    //   import('./components/Page3').then((Page3) => {
    //     this.setState({ route: route, component: Page3.default })
    //   })
    // }
  }

  render() {
    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange}/>;
    // } else {
    //   return <this.state.component onRouteChange={this.onRouteChange}/>;
    // }
    // switch(this.state.route) {
    //   case 'page1':
    //     return <Page1 onRouteChange={this.onRouteChange}/>;
    //   case 'page2':
    //     const AsyncPage2 = AsyncComponent(() => import('./components/Page2'));
    //     return <AsyncPage2 onRouteChange={this.onRouteChange}/>;
    //   case 'page3':
    //     const AsyncPage3 = AsyncComponent(() => import('./components/Page3'));
    //     return <AsyncPage3 onRouteChange={this.onRouteChange}/>;
    //   default:
    //     return
    // }
    // lazy
    switch(this.state.route) {
      case 'page1':
        return <Page1 onRouteChange={this.onRouteChange}/>;
      case 'page2': return (
        <Suspense fallback={<div>Loading...</div>}>
           <Page2Lazy onRouteChange={this.onRouteChange}/>;
        </Suspense>
      )
        
      case 'page3':
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Page3Lazy onRouteChange={this.onRouteChange}/>;
          </Suspense>
        )

      default:
        return
    }
  }
}

export default App;
