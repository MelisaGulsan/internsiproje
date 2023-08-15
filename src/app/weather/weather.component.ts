import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  today: Date = new Date();
  city:string = "İstanbul";
  
  //data$:Observable<any>;
  
  ngOnInit(): void {}
}
