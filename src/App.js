import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { AboutUs } from './components/AboutUs';
import {Location} from './components/Location'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/aboutUs' component={AboutUs} />
        <Route path='/contact' component={Contact} />
        <Route path="/location" component={Location}/>
      </Layout>
    );
  }
}
