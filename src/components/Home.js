import React, { Component } from 'react';
import './Home.css'

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div className="homeContainer">
        <div className="content">
        <h1>Politechnika Białostocka</h1>
        <p><strong>Witaj na stronie Politechniki Białostockiej!</strong></p>
        <p>Wydziały politechniki:</p>
        <ul>
          <li>Wydział Informatyczny</li>
          <li>Wydział Mechaniczny</li>
          <li>Wydział Eletryczny</li>
          <li>Wydział Ochrony środowiska</li>
          <li>Wydział Zarządzania</li>
        </ul>
        <p><code>Administrator</code></p>
        </div>
      </div>
    );
  }
}
