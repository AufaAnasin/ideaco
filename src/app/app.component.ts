import { Bunis } from './model/bunis';
import { Honda } from './model/honda';
import { Toyota } from './model/toyota';
import { Cesna } from './model/cesna';
import { Boeing } from './model/boeing';
import { Component } from '@angular/core';
import { Airbus } from './model/airbus';
import { Mazda } from './model/mazda';
import { Telkom } from './model/telkom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // create object for Boeing
  TripleSeven:Boeing = new Boeing("Boeing 777", 2, 350, true);
  AirbusThreeFifty:Airbus = new Airbus("Airbus 350", 2, 440, true);
  CesnaOneSeventyTwo:Cesna = new Cesna("Cessna 172", 1, 3)
  ToyotaSupra:Toyota = new Toyota("Toyota Supra", 4, 6200, true)
  HondaCRV: Honda = new Honda("Honda CRV", 4, 2400, 8)
  MazdaCX: Mazda = new Mazda("Mazda CX9", 4, 3000, "Racing Red")

  TelkomUniversity: Telkom = new Telkom("Telkom University", "A++")
  BunisUniversity: Bunis = new Bunis("Bunis University", "A")
}
