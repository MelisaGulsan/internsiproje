import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherInfo } from '../services/weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  today: Date = new Date();
  weatherInfo: WeatherInfo = {
  apiKey: '351e0e7d25509286f42705b433b137cb',
  city: 'Istanbul',
  };
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.weatherInfo.city}&appid=${this.weatherInfo.apiKey}&units=metric`;
  
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
  this.getWeatherData();
  }
  
  getWeatherData(): void {
  this.http.get(this.apiUrl).subscribe(
  (data) => {
  this.weatherData = data;
  },
  (error) => {
  console.error('Hava durumu bilgisi alınamadı:', error);
  }
  );
  }
}
