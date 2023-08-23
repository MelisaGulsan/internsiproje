interface Weather{
    weatherData:any;
    apiKey:"351e0e7d25509286f42705b433b137cb";
    city: "Istanbul";
    apiUrl:'https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric'
}