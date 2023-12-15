import { Mazda } from './../../model/mazda';
import { Cesna } from './../../model/cesna';
import { Airbus } from './../../model/airbus';
import { Toyota } from './../../model/toyota';
import { Honda } from './../../model/honda';
import { Bunis } from './../../model/bunis';
import { Boeing } from './../../model/boeing';
import { Telkom } from './../../model/telkom';

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    // create object for Boeing
    TripleSeven:Boeing = new Boeing("Boeing 777", 2, 350, true);
    AirbusThreeFifty:Airbus = new Airbus("Airbus 350", 2, 440, true);
    CesnaOneSeventyTwo:Cesna = new Cesna("Cessna 172", 1, 3)
    ToyotaSupra:Toyota = new Toyota("Toyota Supra", 4, 6200, true)
    HondaCRV: Honda = new Honda("Honda CRV", 4, 2400, 8)
    MazdaCX: Mazda = new Mazda("Mazda CX9", 4, 3000, "Racing Red")
    MazdaCS: Mazda = new Mazda("Mazda CS", 6, 2400, "Racing Blue")
  
    TelkomUniversity: Telkom = new Telkom("Telkom University", "A++")
    BunisUniversity: Bunis = new Bunis("Bunis University", "A")
  
    constructor(){
      this.HondaCRV.airbag = 10;
    }

}
