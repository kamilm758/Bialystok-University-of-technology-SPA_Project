import React, { Component } from 'react';

export class AboutUs extends Component {
  static displayName = AboutUs.name;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>O nas</h1>
        <h5><strong>Politechnika Białostocka jest największą uczelnią techniczną północno-wschodniej Polski. Mamy 70-letnią tradycję, z której jesteśmy bardzo dumni. Wykształciliśmy tysiące studentów, którzy podtrzymują z nami kontakt i dzielą się swoimi sukcesami.</strong></h5>
        <br></br>
        <p>
        Rektorem Politechniki Białostockiej od 2012 r. jest prof. dr hab. inż. Lech Dzienis. Nasza Uczelnia to 6 wydziałów, blisko 7,5 tysiąca studentów i ponad 650 nauczycieli akademickich.
        Kampus Politechniki Białostockiej znajduje się przy ul. Wiejskiej. Tu zlokalizowane są Wydziały: Budownictwa i Nauk o Środowisku, Elektryczny, Informatyki oraz Mechaniczny, a także Akademickie Centrum Sportu, Domy Studenta oraz Centrum Nowoczesnego Kształcenia. Przy ul. Oskara Sosnowskiego swą siedzibę ma Wydział Architektury. W znakomicie skomunikowanym z Białymstokiem Kleosinie znajduje się kampus Wydziału Inżynierii Zarządzania. Poza aglomeracją białostocką, w położonej w sercu Puszczy Białowieskiej Hajnówce, uczelnia prowadzi Centrum Naukowo-Badawcze, w którym funkcjonują laboratoria i pracownie Instytutu Nauk Leśnych.
        </p>
      </div>
    );
  }
}
